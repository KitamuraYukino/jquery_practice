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

$(function () {
  $('.search-btn').on('click', function () {
    //入力した内容をsearchWordに代入
    let searchWord = $('#search-input').val();
    console.log(searchWord);

    //pageCountの初期値は1。
    let pageCount = 1;

    //変数settingsに設定情報などを格納
    const settings = {
      // 実行するURL
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      //サーバーに送るメソッド
      method: "GET",
    };
    console.log(settings.url);

    //Ajaxを実行し設定情報（setting）を呼び出す
    $.ajax(settings).done(function (response) {
      //返ってきた情報の中の@graphのみ
      const result = response['@graph'];
      //@graphのみをコンソールに表示する
      console.log(result);
      //@graphのitemsのindex数
      const len = result[0].items.length;
      console.log(len);
      let html = '';
      for (let i = 0; i < len; i++) {
        if (typeof result[0].items[i]["dc:creator"] == 'undefined') {
          result[0].items[i]["dc:creator"] = '作者（不明）'
        }
        if (typeof result[0].items[i]["dc:publisher"] == 'undefined') {
          result[0].items[i]["dc:publisher"] = "出版社（不明）"
        }
        html += `
        <li class="lists_item">
<div class="list-inner">
<p>タイトル：${result[0].items[i].title}</p>
<p>作者：${result[0].items[i]["dc:creator"]}</p>
<p>出版社：${result[0].items[i]["dc:publisher"]}</p>
<a href="" target="_blank">書籍情報</a>
</div>
</li>
        `;
      }
      $('.lists').empty().prepend(html);
    });
  });
});

/*        html += `
        <li class="lists_item">
<div class="list-inner">
<p>タイトル：${response[0].items[i].title}</p>
<p>作者：${response[0].items[i]["dc:creator"]}</p>
<p>出版社：${response[0].items[i]["dc:publisher"][i]}</p>
<a href="" target="_blank">書籍情報</a>
</div>
</li>
        `;
      }
    })
      .fail(function (err) {
        console.log(err);
      })
  });
});
*/

/*追加したいやつ
<li class="lists_item">
<div class="list-inner">
<p>タイトル：</p>
<p>作者：</p>
<p>出版社：</p>
<a href="" target="_blank">書籍情報</a>
</div>
</li>
*/