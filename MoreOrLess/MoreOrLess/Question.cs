﻿using GameLib;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace MoreOrLess
{

  class QuestionSource
  {
    RestApi _restApi;

    List<int> _lstAlreadyAsked;

    public QuestionSource(RestApi api)
    {
      _restApi = api;
      Reset();
    }

    public void Reset()
    {
      _lstAlreadyAsked = new List<int>();
    }


    public Question GetQuestion()
    {
      string sExclude  = "";

      foreach(int n in _lstAlreadyAsked)
      {
        if(sExclude.Length > 0)
          sExclude += ",";
        else
          sExclude += "&ExcludeKeys=";
        sExclude += n.ToString();
      }

      string sReply = _restApi.GetHttpRequestWithDeviceDetails("MoreOrLessGetQuestion", sExclude);

      RestWrapper<Question> wrap = JsonConvert.DeserializeObject<RestWrapper<Question>>(sReply);
      Question q = wrap.Data;

      if(_lstAlreadyAsked.Contains(q.QuestionKey))
      {
        Console.WriteLine("Duplicate question obtained");
      }

      _lstAlreadyAsked.Add(q.QuestionKey);
      return q;          
    }

  }

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
