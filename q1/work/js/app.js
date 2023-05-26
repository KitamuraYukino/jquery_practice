// Q1-1
// #q1の色変更
$(function(){
  // jQuery実行
  $(document).ready(function(){
    // ページ読み込み時に発生
  $('#q1').css("color", "green");
  // id#q1のcssにcolor/greenを追加
});
});

// Q1-2
// クリック時にボタンの色の変更
  $(function(){
    // jQuery実行
    $("#q2").on('click', function(){
      // id#q2を含む要素内がクリックされたときに発生する関数
      $(this).css('background', 'pink');
      // id#q2のCSSにbackground/pinkを追加
    });
  });

// Q1-3
// クリックしてフェードアウト
$(function() {
  $("#q3").on("click", function() {
    $(this).fadeOut(3000);
  });
});

// Q1-4
// クリックしてサイズ変更
$(function(){
  $('#q4').on("click", function(){
    $(this).width(300);
    $(this).height(75);
    $(this).css('font-size', '125%')
  });
});

// Q1-5
// クリックしてDOMの挿入
$(function(){
  // jQueryの実行
  $('#q5').on('click', function(){
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