




# GameState


```mermaid
flowchart TD


%% GameStates

Initialised([Initialised])
Activated([Activated])
Deactivated([Deactivated])
Online([Online/Ready To Play])
Authenticating([Authenticating])
PreGame([PreGame])
GamePlaying([GamePlaying])
PostGame([PostGame])

%% Program Actions

AppStarts[[App Starts]]
AppEnds[[App Ends]]
AttachClient[[Attach Client]]
GameFinished[[Game Finished]]
ShowPostGameResult[[Show Post Game Result]]
BadAuth[[Auth failure/timeout]]

%% User Actions

GenerateAccessCode[GenerateAccessCode]
BeginGame[Begin Game]

%% Server Actions
ServerGetsAuthCode{{ServerGetsAuthCode}}
ServerHeartBeatTimeout{{Server detects excessive time without hearbeat}}

%% Flows

AppStarts --> Initialised
Initialised --> Activated
Activated -- currently auto --> Online
Online --> GenerateAccessCode
GenerateAccessCode --> Authenticating
GenerateAccessCode --> ServerGetsAuthCode
ServerGetsAuthCode --> GenerateAccessCode
Authenticating --> AttachClient
AttachClient --> PreGame
PreGame --> BeginGame
BeginGame --> GamePlaying
GamePlaying -- user plays game --> GamePlaying
GamePlaying --> GameFinished
GameFinished -->PostGame
PostGame --> ShowPostGameResult
ShowPostGameResult -->Online

Authenticating --> BadAuth
BadAuth -->Online

ServerHeartBeatTimeout --> Deactivated
AppEnds --> Deactivated
Deactivated --> Activated


```

# Hardware Architecture



```mermaid
flowchart TD


    %% c1-->a2
    subgraph Cloud
        DB[(Database)] <--> Game  
        SignalR --> HandleUserCommand

        subgraph Game
            HandleUserCommand --> UpdateGameState
            ProcessTime --> UpdateGameState
        end

        UpdateGameState --> BroadcastMsg

        subgraph AzureFuncs 

            subgraph PinState  
                Funcs.PinState
            end

            subgraph BroadcastMsg
                Funcs.Broadcast --> SignalR  
            end 

            subgraph UserCommand
                Funcs.UserCommand
            end
        end

        UserCommand --> BroadcastMsg
    end 

    subgraph Machine 

        subgraph Esp32_xN
            Esp32_I2C_Slave
        end     

        subgraph Arduino_xN
            Arduino_I2C_Slave
        end

        subgraph Pi
          subgraph PinAdapter_ConsoleApp
              PinAdapter
          end  

          subgraph Game_Viz_Browser
            SpaViz
          end          
                        
          I2CMaster
          PinAdapter --> I2CMaster
          PinAdapter <--> GPIO     
          I2CMaster --> Esp32_I2C_Slave
          I2CMaster --> Arduino_I2C_Slave 
          SignalR -- update Viz --> SpaViz
          SignalR -- DO changes --> PinAdapter
          PinAdapter -- DI changes --> Funcs.PinState
        end

    end  
 
    subgraph User Phone
        SignalR --> SpaUser
        SpaUser --> UserCommand
    end


    %% sq[Square shape] --> ci((Circle shape))
    %% subgraph A
    %%     od>Odd shape]-- Two line<br/>edge comment --> ro
    %%     di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
    %%     di==>ro2(Rounded square shape)
    %% end


    %% Notice that no text in shape are added here instead that is appended further down

    %% e --> od3>Really long text with linebreak<br>in an Odd shape]


    %% Comments after double percent signs
    %% e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    %% cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange

    %% ro2 --> sq

```

## Sending User Command


```mermaid
flowchart TD

  SpaUser --> Funcs.UserCommand
  Funcs.UserCommand --> Funcs.Broadcast.Cmd
  Funcs.Broadcast.Cmd --> SignalR.Cmd
  SignalR.Cmd --> Game.HandleUserCommand
  Game.HandleUserCommand --> UpdateGameState
  UpdateGameState --> Funcs.Broadcast.Viz
  Funcs.Broadcast.Viz --> SignalR.Viz
  SignalR.Viz --> SpaViz

```

Since no object has direct access to the SignalR Hub and it's clients directly, all traffic has to go through the AzureFuns functions. The first Funcs API handles the user command, and broadcasts it to all clients, one of which is the Game, which recognises that this message is for the game. It processes the message and produced a new game state, which is also sent to all SignalR clients via the Azure Funcs API. This "update viz" message is handled by the GameViz on the Pi.

All messages are send to all clients, even the messages that originated on that client. Messages contain routing information to allow clients to determine if this message is meant for them. Everything else is ignored.

### Senders and Recipients

#### SPA

Uses Funcs.PassCommandToStation to send commands from the game



| Sender  | Direction   |Command            | Purpose
| ------- | -------     |-------            |-------            
| GameId  | SPA2Station | GenerateAccessCode|  (1)
| GameId  | Station2SPA | AuthenticationTimeout| (2)
| GameId  | SPA2Station | AttachClient      |  (3)
| ClientId  | SPA2Station | AttachClient      | (4)
| PinStatePost  | DEV2DB | PinStateChange      |  (5)
| PinStatePost  | DB2DEV | PinStateChange      |  (6)



1) Ask Game to generate access code and upload the DB.
2) Tell SPA that access code is geenrated and will expire in Timeout
3) Successful access code, "attach" game to client
4) Uses Funcs.PassCommandToStation to send commands from the game UI
5) PinAdapter just uploaded new pin states to DB
6) DB just uploaded new pin states for PinAdapter to read


Funcs.BroadcastMessageToSignalRClients, post 
ClientMessage msg = JsonConvert.DeserializeObject<ClientMessage>(content);

VisualisationRestAPI.PublishVisualisationData(VisualisationData vd)
ClientMessage cm = new ClientMessage();
      cm.Sender = "Station";
      cm.StationId = "StationId";
      cm.Direction = "Station2Viz";
      cm.AccessToken = "";
      cm.Command = "UpdateViz";
      cm.Parameters = vd.Serialize;


maybe rename 

PassCommandToStation to PassMessageToStation


PublishMessageToClient to PassMessageToClient


## GenerateAccessCode


```mermaid

sequenceDiagram

  actor SPA
  SPA ->> Funcs: RestApi.GenerateNewAccessCode
  Note right of Funcs: Using SR
  Funcs ->> Game: SR.cmd="GenerateAccessCode"
  Note right of Game: Generate code (1000-9999)
  Game ->> Funcs: RestApi.UploadStationAccessCode
  Note right of Funcs: Store Accesscode in DB
  Funcs ->> SPA: SR.cmd="AuthenticationTimeout"
  Note left of SPA: SPA has <br>limited time to <br>key in code
  SPA ->> Funcs: RestApi.CheckAccessCode
  Note right of Funcs: Compare input code <br>to stored value
  Note right of Funcs: Generate token and <br>store in DB
  Funcs ->> Game: SR.cmd="AttachClient"
  Game ->> Funcs: RestApi.UploadStationStatus(PreGame)
  Funcs ->> SPA: RestApi.CheckAccessCode.retval
  Note left of SPA: Retval contains <br>ClientAuthCode


```





