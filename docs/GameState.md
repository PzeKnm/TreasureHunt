


bgfbgfbgb

# fdsfdsfsfds


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






