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

$(function () {
  $('.search-btn').on('click', function () {
    let searchWord = $('#search-input').val();
    console.log(searchWord);
  });
});

//pageCountの初期値は1、同じ検索ワードで検索を行う場合は、pageCountに+1する。違う検索ワードの場合は1に戻す
//

//通信成功、失敗の処理をdone、failの中に書いていくと見辛いコードになってしまうので関数化させてそれを呼ぶだけの処理とする
//レスポンス内容から値を取得する必要があるが、「@、:」などが使われているのでそう言った項目から値を取り出す時は、
//  〇〇['@や:が使われているプロパティ名'];とすれば取り出せる(〇〇は引数、変数を想定)
//検索結果がなかった場合でも検索結果があった場合と同じレスポンスを返す為doneの処理に入っていくで成功した時の処理で条件分岐を作る必要がある
//どう言った場合にエラーが起きるか想定してエラー処理の実装、念の為それ以外のエラーがおきた時の場合も考慮して実装
//リセットボタンの機能実装
