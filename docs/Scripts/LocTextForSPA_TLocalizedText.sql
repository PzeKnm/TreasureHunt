IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E01') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E01',GroupId = 'SignPadAgent',TextId = 'AgentName',Text = 'as1 Sign Pad Agent',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E01' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E01','SignPadAgent','AgentName','as1 Sign Pad Agent','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E02') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E02',GroupId = 'SignPadAgent',TextId = 'CompleteWithoutSignature',Text = 'Ohne Unterschrift fertigstellen',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E02' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E02','SignPadAgent','CompleteWithoutSignature','Ohne Unterschrift fertigstellen','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E03') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E03',GroupId = 'SignPadAgent',TextId = 'ContactLocalSupport',Text = 'Bitte melden Sie sich bei Ihrem lokalen Ammann Support',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E03' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E03','SignPadAgent','ContactLocalSupport','Bitte melden Sie sich bei Ihrem lokalen Ammann Support','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E04') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E04',GroupId = 'SignPadAgent',TextId = 'DocumentsToSign',Text = 'Zu unterschreibende Dokumente',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E04' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E04','SignPadAgent','DocumentsToSign','Zu unterschreibende Dokumente','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E05') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E05',GroupId = 'SignPadAgent',TextId = 'DocumentSuccessfullySigned',Text = 'Das Dokument wurde erfolgreich unterschrieben',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E05' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E05','SignPadAgent','DocumentSuccessfullySigned','Das Dokument wurde erfolgreich unterschrieben','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E06') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E06',GroupId = 'SignPadAgent',TextId = 'Exit',Text = 'Beenden',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E06' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E06','SignPadAgent','Exit','Beenden','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E07') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E07',GroupId = 'SignPadAgent',TextId = 'FullName',Text = 'Vollst�ndiger Name',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E07' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E07','SignPadAgent','FullName','Vollst�ndiger Name','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E08') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E08',GroupId = 'SignPadAgent',TextId = 'InternalError',Text = 'Interner Fehler',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E08' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E08','SignPadAgent','InternalError','Interner Fehler','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E09') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E09',GroupId = 'SignPadAgent',TextId = 'InvalidSignature',Text = 'Die erfasste Unterschrift ist unzureichend. Bitte wiederholen Sie die Erfassung mit einer deutlicheren Unterschrift',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E09' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E09','SignPadAgent','InvalidSignature','Die erfasste Unterschrift ist unzureichend. Bitte wiederholen Sie die Erfassung mit einer deutlicheren Unterschrift','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E10') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E10',GroupId = 'SignPadAgent',TextId = 'NoDocumentsToSign',Text = 'Zurzeit liegen keine Dokumente zur Unterschrift vor',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E10' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E10','SignPadAgent','NoDocumentsToSign','Zurzeit liegen keine Dokumente zur Unterschrift vor','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E11') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E11',GroupId = 'SignPadAgent',TextId = 'OpenSigningDialog',Text = 'Unterschriften Dialog �ffnen...',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E11' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E11','SignPadAgent','OpenSigningDialog','Unterschriften Dialog �ffnen...','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E12') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E12',GroupId = 'SignPadAgent',TextId = 'ProgramCloseConfirmation',Text = 'Nach dem Beenden des Sign Pad Agent lassen sich keine Unterschriften mehr erfassen. Wollen sie die Anwendung wirklich beenden?',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E12' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E12','SignPadAgent','ProgramCloseConfirmation','Nach dem Beenden des Sign Pad Agent lassen sich keine Unterschriften mehr erfassen. Wollen sie die Anwendung wirklich beenden?','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E13') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E13',GroupId = 'SignPadAgent',TextId = 'RemoveSelection',Text = 'Auswahl Entfernen',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E13' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E13','SignPadAgent','RemoveSelection','Auswahl Entfernen','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E14') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E14',GroupId = 'SignPadAgent',TextId = 'StandbyText',Text = 'Unterschriften Erfassung ausser Betrieb',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E14' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E14','SignPadAgent','StandbyText','Unterschriften Erfassung ausser Betrieb','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E15') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E15',GroupId = 'SignPadAgent',TextId = 'ThankYou',Text = 'Besten Dank',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E15' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E15','SignPadAgent','ThankYou','Besten Dank','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E16') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E16',GroupId = 'SignPadAgent',TextId = 'DocumentKennung',Text = 'Kennung',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E16' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E16','SignPadAgent','DocumentKennung','Kennung','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E17') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E17',GroupId = 'SignPadAgent',TextId = 'DocumentDetails',Text = 'Bezeichnung',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E17' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E17','SignPadAgent','DocumentDetails','Bezeichnung','0','7' ) END 
IF EXISTS (SELECT * FROM TLocalizedText WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E18') BEGIN UPDATE TLocalizedText SET ID = 'A099A296-DF62-46A3-9768-6ABC320D6E18',GroupId = 'SignPadAgent',TextId = 'DocumentSigner',Text = 'Rolle',Protected = '0',LanguageId = '7' WHERE ID = 'A099A296-DF62-46A3-9768-6ABC320D6E18' END ELSE BEGIN  INSERT INTO TLocalizedText (ID,GroupId,TextId,Text,Protected,LanguageId) VALUES ('A099A296-DF62-46A3-9768-6ABC320D6E18','SignPadAgent','DocumentSigner','Rolle','0','7' ) END 