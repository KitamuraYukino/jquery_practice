// menuクリック時
// drawer_bar_secondはフェードアウトできえる
// drawer_bar_firstは時計回りに45度回転
// drawer_bar_thirdは反時計回りに45度回転
// drawer_nav_wrapperがにゅって出てくる
// menuの文字がcloseに変わる

$(function () {
  let clicked = false;

  $('.drawer_button').on('click', function () {
    if (!clicked) {
      $('.drawer_button').addClass('active');
      $('.drawer_menu').addClass('right');
      $('.drawer_nav_wrapper').addClass('open');
      $('.drawer_bg').css('display', 'block').hide().fadeIn(500);
      clicked = true;
    } else {
      $('.drawer_button').removeClass('active');
      $('.drawer_menu').removeClass('right');
      $('.drawer_nav_wrapper').removeClass('open');
      $('.drawer_bg').fadeOut(500, function () {
        $(this).css('display', 'none');
      });
      clicked = false;
    }
  });
});

