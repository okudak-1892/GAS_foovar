//demo
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange('A1:G20').setValue('ERROR');
  Browser.msgBox("ウイルスを検知しました。パソコンを破壊してください。", Browser.Buttons.OK)
}

//翻訳

/* 現在選択セル値を英語から日本語に翻訳 */
function translateToja() {
  
  var sheet = SpreadsheetApp.getActiveSheet(); // アクティブシート
  var range = sheet.getActiveRange();          // 選択範囲セル
  
  // 翻訳処理呼び出し
  sheetRangeTranslate(sheet, range, "en", "ja");
  
}

/* 現在選択セル値を日本語から英語に翻訳 */
function translateToen() {
  
  var sheet = SpreadsheetApp.getActiveSheet(); // アクティブシート
  var range = sheet.getActiveRange();          // 選択範囲セル
  
  // 翻訳処理呼び出し
  sheetRangeTranslate(sheet, range, "ja", "en");
  
}

/* 対象シートの範囲セル値を翻訳 */
function sheetRangeTranslate(sheet, range, transFrom, transTo) {
  
  var startRow = range.getRow();        // 開始行
  var startCol = range.getColumn();     // 開始列
  var endRow   = range.getLastRow();    // 終了行
  
  var j=startCol;    // 対象列
  var arrayVal = []; // 配列
  
  for(var i=startRow;i<=endRow;i++){ 
    var transVal = "";    // 翻訳値
    if (sheet.getRange(i, j).getValue() != "") { // 空でない場合
      // 翻訳処理
      transVal = LanguageApp.translate(sheet.getRange(i, j).getValue(), transFrom, transTo);
    }
    arrayVal.push([transVal]); // 配列に追加
  }
  // 翻訳後の配列値をアクティブ列の一つ右のセルに反映
  sheet.getRange(startRow, startCol+1, endRow-startRow+1, 1).setValues(arrayVal);
}