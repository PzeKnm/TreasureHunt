
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace DummyPinball
{
  public partial class Form1 : Form
  {


    private Timer _tmrLeft;
    private Timer _tmrRight;

    private bool _bActive;

    private int _accessCode;


    SignalRClient _signalClient;

    //// IotHub _iotHub;


    public Form1()
    {
      _bActive = false;
      GenerateNewAccessCode();

      _tmrLeft = new Timer();
      _tmrLeft.Interval = 300;
      _tmrLeft.Tick += _tmrLeft_Tick;

      _tmrRight = new Timer();
      _tmrRight.Interval = 300;
      _tmrRight.Tick += _tmrRight_Tick;
               
      InitializeComponent();
      
      //  _iotHub.StartListening(); 
      _signalClient = new SignalRClient();
      _signalClient.CommandReceived += _signalClient_CommandReceived;
      _signalClient.StartListening();

    }

    private void _signalClient_CommandReceived(object sender, ClientCommandEventArgs e)
    {
      this.Invoke(new Action(() => { this.OnCommandReceived(e.Command); }));
    }


    private void OnCommandReceived(string sCmd)
    {
      WriteLineToOutputListbox(sCmd);

      if (sCmd == "Left")
        BumpLeft();
      if (sCmd == "Right")
        BumpRight();

      if (sCmd == "GenerateAccessCode")
      {
        GenerateNewAccessCode();
        if (RestApi.SendAccessCodeToServer(_accessCode))
          UpdateAccessCodeLabel();
        else
          WriteLineToOutputListbox("Failed to upload access code");
      }
    }

    private void Form1_Load(object sender, EventArgs e)
    {
      UpdateStatusLabel();
      UpdateAccessCodeLabel();

      edtCommand.Text = "DisplayText";
      edtParameters.Text = "Game begins";
    }

    private void Form1_FormClosed(object sender, FormClosedEventArgs e)
    {
      btnDeactivate_Click(sender, null);
    }
    
    private void btnActivate_Click(object sender, EventArgs e)
    {
      _bActive = RestApi.ActivateStation();
      UpdateStatusLabel();
    }

    private void btnDeactivate_Click(object sender, EventArgs e)
    {
      if (_bActive == false)
        return;

      if (RestApi.DeactivateStation())
        _bActive = false;
      UpdateStatusLabel();
    }

    private void UpdateStatusLabel()
    {
      if(_bActive)
        lblStatus.Text = "Status: Active";
      else
        lblStatus.Text = "Status: Inactive";
    }

    private void UpdateAccessCodeLabel()
    {
      lblAccessCode.Text = string.Format("{0}", _accessCode);
    }

    private void GenerateNewAccessCode()
    {
      Random r = new Random();
      _accessCode = r.Next(1000, 9999);
    }






    private void btnLeft_Click(object sender, EventArgs e)
    {
      BumpLeft();
    }

    private void btnRight_Click(object sender, EventArgs e)
    {
      BumpRight();
    }

    private void BumpLeft()
    {
      lblLeft.Text = "XXXXXXXXX";
      _tmrLeft.Start();
    }


    private void BumpRight()
    {
      lblRight.Text = "XXXXXXXXX";
      _tmrRight.Start();
    }

    private void _tmrLeft_Tick(object sender, EventArgs e)
    {
      _tmrLeft.Stop();
      lblLeft.Text = "----------";
    }

    private void _tmrRight_Tick(object sender, EventArgs e)
    {
      _tmrRight.Stop();
      lblRight.Text = "----------";
    }

    private void WriteLineToOutputListbox(string s)
    {
      lstOutput.Items.Add(s);
      lstOutput.TopIndex = lstOutput.Items.Count - 1;
    }

    private void btnSendCommand_Click(object sender, EventArgs e)
    {
      string sCommand = edtCommand.Text;
      string sParameters = edtParameters.Text;

      if (!RestApi.SendCommandEventToClient(sCommand, sParameters))
      {
        MessageBox.Show("Error sending command");
      }
    }





    private void SignInButton_Click(object sender, EventArgs e)
    {


    }

  }
}
