
//jQueryの実行
$(function () {
  //一つ前の検索ワードを入れるための変数
  let previousWord = '';

  //class[search-input]に変化があったときに実行
  $('.search-input').change(function () {
    //previousWordにclass[search-input]に入っている値を代入
    previousWord = $(this).val();
  });
  //pageCountの初期値は1。
  let pageCount = 1;

  //class[seach-btn]をクリックしたときに実行
  $('.search-btn').on('click', function () {

    //入力した内容をsearchWordに代入
    let searchWord = $('#search-input').val();

    //前と同じ言葉で検索した場合
    if (previousWord !== searchWord) {
      //pageCountを１に戻す
      pageCount = 1;
      //class[lists]の中を空にする
      $('.lists').empty();
    }

    //previousWordにsearchWordを代入する
    previousWord = searchWord;

    //変数settingsに設定情報などを格納
    const settings = {
      // 実行するURL
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      //サーバーに送るメソッド
      method: "GET",
    };

    //後で消す
    console.log(settings.url);

    //htmlを追加するための変数htmlを作成
    let html = '';

    //Ajaxを実行し設定情報（setting）を呼び出す
    $.ajax(settings).done(function (response) {
      //返ってきた情報の中の@graphのみ
      const result = response['@graph'];

      //後で消す
      console.log(result);

      //返ってきた情報にresult[0].itemsを得られた場合
      if (result[0].items) {

        //@graphのitemsのindex数を取得する定数を定義
        const len = result[0].items.length;


        //結果を使ったループ処理
        for (let i = len-1; i >= 0; i--) {
          //著者の情報がundefindの場合は「作者（不明）」と表示
          if (typeof result[0].items[i]["dc:creator"] == 'undefined') {
            result[0].items[i]["dc:creator"] = '作者不明'
          }
          //出版社の情報がundefindの場合は「出版社（不明）」と表示
          if (typeof result[0].items[i]["dc:publisher"] == 'undefined') {
            result[0].items[i]["dc:publisher"] = "出版社不明"
          }

          //htmlに結果を追加
          html += `
        <li class="lists-item">
        <div class="list-inner">
        <p>タイトル：${result[0].items[i].title}</p>
        <p>作者：${result[0].items[i]["dc:creator"]}</p>
        <p>出版社：${result[0].items[i]["dc:publisher"]}</p>
        <a href=${result[0].items[i]["@id"]} target="_blank">書籍情報</a>
        </div>
        </li>
        `;
        }

        //class[lists]にhtmlを追加
        $('.lists').prepend(html);

        pageCount++;

        //返ってきた情報にresult[0].itemsを得られなかった場合
      } else {
        html += `
        <p class="message">検索結果が見つかりませんでした。<br>
        別のキーワードで検索して下さい。</p>
        `;

        //一度class[lists]を空にして、htmlを追加
        $('.lists').empty().prepend(html);

      }

      //class[search-input]の値が空のまま検索ボタンが押された場合
    }).fail(function (err) {

      html += `
        <p class="message">正常に通信できませんでした。<br>
        インターネットの接続の確認をしてください。</p>
        `;

      //一度class[lists]を空にして、htmlを追加
      $('.lists').empty().prepend(html);
    });

  });

  //class[reset-btn]を押した際に発生するイベント
  $('.reset-btn').on('click', function () {
    //id[search-input]の中の値を空にする
    $('#search-input').val('');
    //pageCountを1にする
    pageCount = 1;
    //class[lists]の中の要素を空にする
    $('.lists').empty();
  });
});

//else {
      //pageCountを１に戻す
      //pageCount = 1;
      //class[lists]の中を空にする
      //$('.lists').empty();
    //}