
using Newtonsoft.Json;
using System.Runtime.Serialization;


namespace PinAdapter
{


  [DataContract]
  public class VisualisationData
  {
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public byte EnvironmentStatus { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string GameState { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int GameStateInt { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string InternalState { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int InternalStateInt { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int AccessCode { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public Question currentQuestion { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int currentQuestionMin { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int currentQuestionMax { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int currentAnswerLo { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int currentAnswerHi { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int PotentialScore { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int Score { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int TotalGameSecs { get; set; }

    // Could be remaining game time, pregame countdown or authentication countdown
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int RemainingSecs { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int RemainingQuestionSecs { get; set; }


  }

}
