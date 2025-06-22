function doGet(e) {
  const page = e.parameter.page;
  if (page === "results") {
    const template = HtmlService.createTemplateFromFile("results");
    template.name = e.parameter.name || "";
    template.email = e.parameter.email || "";
    template.category = e.parameter.category || "";
    Logger.log(JSON.stringify(e.parameter));
    return template.evaluate();
  }
  return HtmlService.createHtmlOutputFromFile("index");
}



function recordResponse(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const row = headers.map(h => data[h] || "");
  sheet.appendRow(row);
  return data;  // <--- return it back to success handler
}
