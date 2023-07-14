
//jQueryを実行
$(function () {
  //変数clickedにfalseを代入
  let clicked = false;

//.drawer_buttonをクリックしたときに発生するイベント
  $('.drawer_button').on('click', function () {
    //1回目のクリックの場合
    if (!clicked) {
    //以下3つのclassに疑似クラスを追加する
      $('.drawer_button').addClass('active');
      $('.drawer_menu').addClass('right');
      $('.drawer_nav_wrapper').addClass('open');
    //.drawer_bg内のdisplayをblockに変更し要素を画した状態から0.5秒かけてフェードインさせる
      $('.drawer_bg').css('display', 'block').hide().fadeIn(500);
      //clickedにtrueを再代入
      clicked = true;
    //そうでない場合（2回目のクリックの際）
    } else {
    //追加した3つの疑似クラスを除く
      $('.drawer_button').removeClass('active');
      $('.drawer_menu').removeClass('right');
      $('.drawer_nav_wrapper').removeClass('open');
      //.drawer_bgを0.5秒かけてフェードアウトさせる
      $('.drawer_bg').fadeOut(500, function () {
        //さらに.drawer_bg内のdisplayをnoneに変更
        $(this).css('display', 'none');
      });
      //clickedにfalseを再代入（初めの状態に戻す）
      clicked = false;
    }
  });
});

