namespace DummyPinball
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lstOutput = new System.Windows.Forms.ListBox();
            this.btnLeft = new System.Windows.Forms.Button();
            this.btnRight = new System.Windows.Forms.Button();
            this.lblLeft = new System.Windows.Forms.Label();
            this.lblRight = new System.Windows.Forms.Label();
            this.lblStatus = new System.Windows.Forms.Label();
            this.btnActivate = new System.Windows.Forms.Button();
            this.btnDeactivate = new System.Windows.Forms.Button();
            this.lblAccessCode = new System.Windows.Forms.Label();
            this.edtCommand = new System.Windows.Forms.TextBox();
            this.edtParameters = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.btnSendCommand = new System.Windows.Forms.Button();
            this.btnSignalR = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lstOutput
            // 
            this.lstOutput.FormattingEnabled = true;
            this.lstOutput.Location = new System.Drawing.Point(9, 224);
            this.lstOutput.Name = "lstOutput";
            this.lstOutput.Size = new System.Drawing.Size(369, 160);
            this.lstOutput.TabIndex = 0;
            // 
            // btnLeft
            // 
            this.btnLeft.Location = new System.Drawing.Point(17, 138);
            this.btnLeft.Name = "btnLeft";
            this.btnLeft.Size = new System.Drawing.Size(75, 23);
            this.btnLeft.TabIndex = 1;
            this.btnLeft.Text = "Left";
            this.btnLeft.UseVisualStyleBackColor = true;
            this.btnLeft.Click += new System.EventHandler(this.btnLeft_Click);
            // 
            // btnRight
            // 
            this.btnRight.Location = new System.Drawing.Point(289, 138);
            this.btnRight.Name = "btnRight";
            this.btnRight.Size = new System.Drawing.Size(75, 23);
            this.btnRight.TabIndex = 2;
            this.btnRight.Text = "Right";
            this.btnRight.UseVisualStyleBackColor = true;
            this.btnRight.Click += new System.EventHandler(this.btnRight_Click);
            // 
            // lblLeft
            // 
            this.lblLeft.BackColor = System.Drawing.SystemColors.Info;
            this.lblLeft.Location = new System.Drawing.Point(13, 175);
            this.lblLeft.Name = "lblLeft";
            this.lblLeft.Size = new System.Drawing.Size(79, 23);
            this.lblLeft.TabIndex = 3;
            this.lblLeft.Text = "---------->";
            // 
            // lblRight
            // 
            this.lblRight.BackColor = System.Drawing.SystemColors.Info;
            this.lblRight.Location = new System.Drawing.Point(285, 175);
            this.lblRight.Name = "lblRight";
            this.lblRight.Size = new System.Drawing.Size(79, 23);
            this.lblRight.TabIndex = 4;
            this.lblRight.Text = "<----------";
            // 
            // lblStatus
            // 
            this.lblStatus.Location = new System.Drawing.Point(13, 13);
            this.lblStatus.Name = "lblStatus";
            this.lblStatus.Size = new System.Drawing.Size(127, 23);
            this.lblStatus.TabIndex = 5;
            this.lblStatus.Text = "Status";
            // 
            // btnActivate
            // 
            this.btnActivate.Location = new System.Drawing.Point(146, 8);
            this.btnActivate.Name = "btnActivate";
            this.btnActivate.Size = new System.Drawing.Size(75, 23);
            this.btnActivate.TabIndex = 6;
            this.btnActivate.Text = "Activate";
            this.btnActivate.UseVisualStyleBackColor = true;
            this.btnActivate.Click += new System.EventHandler(this.btnActivate_Click);
            // 
            // btnDeactivate
            // 
            this.btnDeactivate.Location = new System.Drawing.Point(227, 8);
            this.btnDeactivate.Name = "btnDeactivate";
            this.btnDeactivate.Size = new System.Drawing.Size(75, 23);
            this.btnDeactivate.TabIndex = 7;
            this.btnDeactivate.Text = "Deactivate";
            this.btnDeactivate.UseVisualStyleBackColor = true;
            this.btnDeactivate.Click += new System.EventHandler(this.btnDeactivate_Click);
            // 
            // lblAccessCode
            // 
            this.lblAccessCode.Location = new System.Drawing.Point(14, 49);
            this.lblAccessCode.Name = "lblAccessCode";
            this.lblAccessCode.Size = new System.Drawing.Size(127, 23);
            this.lblAccessCode.TabIndex = 8;
            this.lblAccessCode.Text = "AccessCode";
            // 
            // edtCommand
            // 
            this.edtCommand.Location = new System.Drawing.Point(73, 75);
            this.edtCommand.Name = "edtCommand";
            this.edtCommand.Size = new System.Drawing.Size(100, 20);
            this.edtCommand.TabIndex = 9;
            // 
            // edtParameters
            // 
            this.edtParameters.Location = new System.Drawing.Point(218, 73);
            this.edtParameters.Name = "edtParameters";
            this.edtParameters.Size = new System.Drawing.Size(100, 20);
            this.edtParameters.TabIndex = 10;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(17, 79);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(54, 13);
            this.label1.TabIndex = 11;
            this.label1.Text = "Command";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(179, 78);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(36, 13);
            this.label2.TabIndex = 12;
            this.label2.Text = "Parms";
            // 
            // btnSendCommand
            // 
            this.btnSendCommand.Location = new System.Drawing.Point(324, 74);
            this.btnSendCommand.Name = "btnSendCommand";
            this.btnSendCommand.Size = new System.Drawing.Size(58, 23);
            this.btnSendCommand.TabIndex = 13;
            this.btnSendCommand.Text = "Send";
            this.btnSendCommand.UseVisualStyleBackColor = true;
            this.btnSendCommand.Click += new System.EventHandler(this.btnSendCommand_Click);
            // 
            // btnSignalR
            // 
            this.btnSignalR.Location = new System.Drawing.Point(130, 113);
            this.btnSignalR.Name = "btnSignalR";
            this.btnSignalR.Size = new System.Drawing.Size(75, 23);
            this.btnSignalR.TabIndex = 14;
            this.btnSignalR.Text = "SignalR";
            this.btnSignalR.UseVisualStyleBackColor = true;
            this.btnSignalR.Click += new System.EventHandler(this.SignInButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(394, 396);
            this.Controls.Add(this.btnSignalR);
            this.Controls.Add(this.btnSendCommand);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.edtParameters);
            this.Controls.Add(this.edtCommand);
            this.Controls.Add(this.lblAccessCode);
            this.Controls.Add(this.btnDeactivate);
            this.Controls.Add(this.btnActivate);
            this.Controls.Add(this.lblStatus);
            this.Controls.Add(this.lblRight);
            this.Controls.Add(this.lblLeft);
            this.Controls.Add(this.btnRight);
            this.Controls.Add(this.btnLeft);
            this.Controls.Add(this.lstOutput);
            this.Name = "Form1";
            this.Text = "Dummy Pinball";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.Form1_FormClosed);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

    #endregion

    private System.Windows.Forms.ListBox lstOutput;
    private System.Windows.Forms.Button btnLeft;
    private System.Windows.Forms.Button btnRight;
    private System.Windows.Forms.Label lblLeft;
    private System.Windows.Forms.Label lblRight;
    private System.Windows.Forms.Label lblStatus;
    private System.Windows.Forms.Button btnActivate;
    private System.Windows.Forms.Button btnDeactivate;
    private System.Windows.Forms.Label lblAccessCode;
    private System.Windows.Forms.TextBox edtCommand;
    private System.Windows.Forms.TextBox edtParameters;
    private System.Windows.Forms.Label label1;
    private System.Windows.Forms.Label label2;
    private System.Windows.Forms.Button btnSendCommand;
        private System.Windows.Forms.Button btnSignalR;
    }
}

