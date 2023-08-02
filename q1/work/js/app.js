// Q1-1
// #q1の色変更
$(function () {
  // jQuery実行
  $(document).ready(function () {
    // ページ読み込み時に発生
    $('#q1').css("color", "green");
    // id#q1のcssにcolor/greenを追加
  });
});

// Q1-2
// クリック時にボタンの色の変更
$(function () {
  // jQuery実行
  $("#q2").on('click', function () {
    // id#q2を含む要素内がクリックされたときに発生する関数
    $(this).css('background', 'pink');
    // id#q2のCSSにbackground/pinkを追加
  });
});

// Q1-3
// クリックしてフェードアウト
$(function () {
  // jQueryの実行
  $("#q3").on("click", function () {
    // id#q4を含む要素がクリックされたときに発生する
    $(this).fadeOut(3000);
    // 3000ミリ秒かけてフェードアウト
  });
});

// Q1-4
// クリックしてサイズ変更
$(function () {
  // jQueryの実行
  $('#q4').on("click", function () {
    // id#q4を含む要素がクリックされたときに発生する
    $(this).addClass('large');
    // class[large]を追加
  });
});

// Q1-5
// クリックしてDOMの挿入
$(function () {
  // jQueryの実行
  $('#q5').on('click', function () {
    // id#q5を含む要素がクリックされたときに発生する
    $(this).before('<span>DOMの前</span>');
    // q5の要素の前にテキストの追加
    $(this).prepend('DOMの中の前');
    // q5の要素内で既存テキストの前にテキストを追加
    $(this).append('DOMの中の後');
    // q5の要素内で既存テキストの後にテキストを追加
    $(this).after('<span>DOMの後</span>');
    // q5の要素の後にテキストの追加
  });
});

// Q1-6
// クリックして移動
$(function () {
  // jQueryの実行
  $('#q6').on('click', function () {
    // id#q6を含む要素がクリックされたときに発生する
    $(this).animate({
      // id#a6を含む要素にアニメーションを付ける
      marginLeft: '100px',
      // 要素に対してmargin-leftを100px
      marginTop: '100px',
      // 要素に対してmargin-topを100px
    }, 2000);
    // 2秒かけて移動
  });
});

// Q1-7
// クリックしてidのノードをコンソールで表示
$(function () {
  // jQueryの実行
  $('#q7').on('click', function () {
    // id#q7を含む要素がクリックされたときに発生する
    console.log(this);
    // q7のノードをコンソールに表示
  });
});

// Q1-8
// ホバー時にボタンの大きさ変更
$(function () {
  // jQueryの実行
  $('#q8').hover(function () {
    // id#q8を含む要素のホバー時に発生する
    $(this).addClass('large');
      //q8にclass[large]を追加
  },
    function () {
      // ホバーが離れた時の設定
      $(this).removeClass('large');
        // ホバーが離れたらclass[large]を除く
    });
});

// Q1-9
// クリックして配列のアラートを表示
$(function () {
  // jQueryの実行
  $('#q9').children().on('click', function () {
    // id#q9を含む要素の子要素をクリックしたときに発生する
    const index = $('#q9').children().index(this);
    // q9の子要素の配列番号の取得
    alert(index);
    // アラートの表示
  });
});

// Q1-10
// Q10をクリックしてQ11を操作
$(function () {
  // jQueryの実行
  $('#q10 li').on('click', function () {
    // id#q10を含む要素内のli要素をクリックしたときに発生する
    const index = $(this).index();
    // id#q10を含む要素内のliのindexの取得
    $('#q11 li:nth-child(' + (index + 1) + ')').addClass('large-text');
    // id#q11の中のli要素の中でid#q10の順番と一致する要素に対してclass[large-text]を追加
  });
});