

using GameLib;
using System.Text.Json;

namespace MoreOrLess
{
/*
  public class PinStateDto
  {
    public string Id { get; set; }
    public string ControllerId { get; set; }
    public string PinName { get; set; }
    public string Direction { get; set; }
    public int State { get; set; }
  }
*/

  class VisualisationRestAPI
  {
   
    string m_StationId;
    RestApi m_RestApi;

    public VisualisationRestAPI(RestApi rapi, string stationId)
    {
      m_RestApi = rapi;
      m_StationId = stationId;
    }

    public void UpdateVisualisation(byte envStatus, GameManagerState GameState,
      MoreOrLess.InternalState internalState, int accessCode, Question _currentQuestion,
      AnswerParameters _currentAnswer, int nScore,
      int nTotalGameSecs, int nRemainingSecs, int nRemainingQuestionSecs)
    {
      VisualisationData vd = new VisualisationData();
      vd.EnvironmentStatus = envStatus;
      vd.GameState = GameState.ToString();
      vd.GameStateInt = (int)GameState;
      vd.InternalState = internalState.ToString();
      vd.InternalStateInt = (int)internalState;
      vd.AccessCode = accessCode;

      if (_currentQuestion != null)
        vd.currentQuestion = _currentQuestion;

      if (_currentAnswer != null)
      {
        vd.currentQuestionMin = _currentAnswer.GetMin();
        vd.currentQuestionMax = _currentAnswer.GetMax();
        vd.currentAnswerLo = _currentAnswer.GetLo();
        vd.currentAnswerHi = _currentAnswer.GetHi();
        vd.PotentialScore = _currentAnswer.GetPotentialPoints();
      }

      vd.Score = nScore;
      vd.TotalGameSecs = nTotalGameSecs;
      vd.RemainingSecs = nRemainingSecs;
      vd.RemainingQuestionSecs = nRemainingQuestionSecs;

      PublishVisualisationData(vd);
    }

    public void PublishVisualisationData(VisualisationData vd)
    {
      var serializeOptions = new JsonSerializerOptions
      {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = true
      };
      string vizData = System.Text.Json.JsonSerializer.Serialize(vd, serializeOptions);

      ClientMessage cm = new ClientMessage();
      cm.Sender = m_StationId;
      cm.StationId = m_StationId;
      cm.Direction = "Station2Viz";
      cm.AccessToken = "";
      cm.Command = "UpdateViz";
      cm.Parameters = vizData;

      m_RestApi.BroadcastMessageToSignalRClients(cm);
    }

  }
}
