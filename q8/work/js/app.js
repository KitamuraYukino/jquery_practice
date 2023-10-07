
//jQueryの実行
$(function () {
  //一つ前の検索ワードを入れるための変数
  let previousWord = '';

  //pageCountの初期値は1。
  let pageCount = 1;



  //class[seach-btn]をクリックしたときに実行
  $('.search-btn').on('click', function () {

    //入力した内容をsearchWordに代入
    const searchWord = $('#search-input').val();

    //前と異なる言葉で検索した場合
    if (previousWord !== searchWord) {
      //pageCountを１に戻す
      pageCount = 1;
      //class[lists]の中を空にする
      $('.lists').empty();
      //previousWordにsearchWordを代入する
      previousWord = searchWord;
    }

    //変数settingsに設定情報などを格納
    const settings = {
      // 実行するURL
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      //サーバーに送るメソッド
      method: "GET",
    };



    //ajaxの実行
    $.ajax(settings).done(function (response) {

      //処理成功時の関数handleSuccess実行
      handleSuccess(response);

      //ajaxの実行にエラーが発生した場合
    }).fail(function (err) {

      //処理失敗時の関数handleFailure実行
      handleFailure(err);
    });

  });//$('.search-btn').on('click', function () {　の終了





  //handleSuccessの定義
  function handleSuccess(response) {

    //処理成功時にhtmlを追加するための変数doneHtmlを作成
    let doneHtml = '';


    //返ってきた情報の中の@graphのみ
    const result = response['@graph'];

    //返ってきた情報にresult[0].itemsを得られた場合
    if (result[0].items) {

      //@graphのitemsのindex数を取得する定数を定義
      const resultItemsLength = result[0].items.length;


      //結果を使ったループ処理
      for (let i = resultItemsLength - 1; i >= 0; i--) {

        //変数[title]に結果の中のタイトルを代入
        const title = typeof result[0].items[i].title !== 'undefined' ? result[0].items[i].title : 'タイトル不明';
        //変数[creator]に結果の中の著者を代入
        const creator = typeof result[0].items[i]["dc:creator"] !== 'undefined' ? result[0].items[i]["dc:creator"] : '作者不明';
        //変数[publisher]に結果の中の出版社を代入
        const publisher = typeof result[0].items[i]["dc:publisher"] !== 'undefined' ? result[0].items[i]["dc:publisher"] : '出版社不明';
        //変数[title]に結果の中のタイトルを代入
        const itemsId = typeof result[0].items[i]["@id"] !== 'undefined' ? result[0].items[i]["@id"] : '書籍情報不明';

        //doneHtmlに結果を追加
        doneHtml += `
      <li class="lists-item">
      <div class="list-inner">
      <p>タイトル：${title}</p>
      <p>作者：${creator}</p>
      <p>出版社：${publisher}</p>
      <a href=${itemsId} target="_blank">書籍情報</a>
      </div>
      </li>
      `;
      }

      //class[lists]にhtmlを追加
      $('.lists').prepend(doneHtml);

      //同じ言葉で検索した場合はpageCountを増やす
      pageCount++;

      //返ってきた情報にresult[0].itemsを得られなかった場合
    } else {

      //doneHtmlに追加する文
      doneHtml += `
      <p class="message">検索結果が見つかりませんでした。<br>
      別のキーワードで検索して下さい。</p>
      `;

      //一度class[lists]を空にして、doneHtmlを追加
      $('.lists').prepend(doneHtml);

    }
  }; //handleSuccessの終了




  //handleFailureの定義
  function handleFailure(err) {

    //処理失敗時にhtmlを追加するための変数failHtmlを作成
    let failHtml = '';

    //返ってきた引数errに含まれるstatusを定数errStatusに代入
    const errStatus = err.status;
    console.log(err);

    //返ってきたerrのstatusが0の場合
    if (errStatus === 0) {

      //failHtmlに追加する文
      failHtml += `
          <p class="message">正常に通信できませんでした。<br>
          インターネットの接続の確認をしてください。</p>
          `

      //返ってきたerrのstatusが400の場合
    } else if (errStatus === 400) {


      //failHtmlに追加する文
      failHtml += `
          <p class="message">検索ワードが有効ではありません。<br>
          1文字以上で検索してください。</p>
          `

      //返ってきたerrのstatusが0または400以外の場合
    } else {


      //failHtmlに追加する文
      failHtml += `
          <p class="message">予期せぬエラーが発生しました。<br>
          再読み込みを行ってください。</p>
          `
    };

    //一度class[lists]を空にして、failHtmlを追加
    $('.lists').empty().prepend(failHtml);


  };//handleFailureの終了





  //class[reset-btn]を押した際に発生するイベント
  $('.reset-btn').on('click', function () {

    //id[search-input]の中の値を空にする
    $('#search-input').val('');

    //previousWordをリセットする
    previousWord = '';

    //pageCountを1にする
    pageCount = 1;

    //class[lists]の中の要素を空にする
    $('.lists').empty();
  });
});

