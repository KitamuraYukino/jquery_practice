$(function () {
  // jQuery実行
  let modalOpen = false;
  //modalの開閉を管理するための変数を作成
  $('.btn').on('click', function () {
    // class(btn)を含む要素をクリックしたときに発生
    if (!modalOpen) {
      //modalOpenとanimationがともにfailseの場合
      modalOpen = true;
      //modalOpenをtrueに変更
      $('.modal_bg, .modal_win').fadeIn();
      // class(modal_bg),(modal_win)を含む要素をフェードインさせる
    }
  });
  $('.c-modal_close').on('click', function () {
    // class(c-modal_close)を含む要素をクリックしたときに発生
    if (modalOpen) {
      //modalOpenがtrue,animationがfalseの場合
      $('.modal_bg, .modal_win').stop(true, false).fadeOut();
      // class(modal_bg),(modal_win)を含む要素をフェードアウトさせる
      modalOpen = false;
      //modalOpenをfalseに変更
    }
  });
});