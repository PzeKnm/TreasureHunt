
using Newtonsoft.Json;
using System.Runtime.Serialization;


namespace PinAdapter
{


  [DataContract]
  public class Question
  {
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int QuestionKey { get; set; }
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Category { get; set; }
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string QuestionText { get; set; }
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int Answer { get; set; }
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int RangeLo { get; set; }
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public int RangeHi { get; set; }
  }


}
