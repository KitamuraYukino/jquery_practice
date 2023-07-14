// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

//入力した内容をsearchWordに代入
let searchWord = $('#search-input').val();
//pageCountの初期値は1。検索結果が1ページ目であることを示すため。
let pageCount = 1;

//変数settingsに設定情報などを格納
const settings = {
  // 実行するURL
  "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
  //サーバーに送るメソッド
  "method": "GET",
};
/*
$(function () {
  //「検索」をクリックしたときに発生するイベント
  $('.search-btn').on('click', function () {
    //Ajaxを実行し設定情報（setting）を呼び出す
    $.ajax(settings)
    //.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
      .done(function (response) {
      //
        console.log(response); 
      })
    //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている。
      .fail(function (err) {
        console.error(err);
      });
  });
});
*/


$('.search-btn').on('click', function () {
  //Ajaxを実行し設定情報（setting）を呼び出す
  $.ajax(settings)
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    console.log(err);
  })
});
