// nav-item.lengthをクリックしたらis-hidden.lengthが表示される
// 同時にホームコンテンツにnav-hiddenを追加

$(function () {
  $('.nav-item').click(function () {
    let index = $(this).index();

    $('.description li').addClass('is-hidden');

    $('.description li').eq(index).removeClass('is-hidden');
  });
});
