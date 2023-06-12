$(function(){
  // jQuery実行
  $('.btn').on('click', function(){
  // class(btn)を含む要素をクリックしたときに発生
    $('.modal_bg, .modal_win').fadeIn();
  // class(modal_bg),(modal_win)を含む要素をフェードインさせる
  });
  $('.c-modal_close').on('click', function(){
  // class(c-modal_close)を含む要素をクリックしたときに発生
    $('.modal_bg, .modal_win').fadeOut();
  // class(modal_bg),(modal_win)を含む要素をフェードアウトさせる
  });
});