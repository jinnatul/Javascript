function atlascrm() {
  var AtlasSheet = SpreadsheetApp.getActiveSheet();
  var data = AtlasSheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    Name = data[i][0]
    Email = data[i][1]
    Statuscheck = data[i][2]

    if (Statuscheck != "Complete") {
      console.log("inside")
      Name = AtlasSheet.getRange(i + 1, 1).getValue().toString()
      Email = AtlasSheet.getRange(i + 1, 2).getValue().toString()
      Statuscheck = AtlasSheet.getRange(i + 1, 5).getValue().toString()
      console.log("Name " + Name)
      console.log("Email " + Email)
      console.log(Statuscheck)

      // token
      var tokenResponse = UrlFetchApp.fetch("https://atlascrm.avisi-apps.com/api/1.0/oauth/token", {
        "method": "post",
        "headers": {
          "Authorization": "Basic " + Utilities.base64Encode("dd664876-f5ee-4138-bf4a-9551cefa6dd5:94665223f8a4a5855fa357c8146f127936c685bb6de418074aa054f41f007265"),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "payload": {
          "grant_type": "client_credentials"
        }
      });

      var tokenResult = JSON.parse(tokenResponse.getContentText());
      Logger.log("access_token " + tokenResult.access_token);



      // Create new entity
      var entityResponse = UrlFetchApp.fetch("https://atlascrm.avisi-apps.com/api/1.0/workspace/CRM/entities", {
        "method": "post",
        "headers": {
          "Authorization": "Bearer " + tokenResult.access_token,
          "Content-Type": "application/json"
        },
        "payload": JSON.stringify({
          "type": "contact",
          "fields": {
            "contact-name": Name,
            "contact-email": Email
          }
        })
      });

      var entityResult = JSON.parse(entityResponse.getContentText());
      Logger.log(entityResult);

      AtlasSheet.getRange(i + 1, 3).setValue("Complete")
    }
  }
}
