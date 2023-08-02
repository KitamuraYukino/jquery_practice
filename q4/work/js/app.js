//jQueryの実行
$(function () {
  //.nav-itemのクリック時に実行
  $('.nav-item').on('click', function () {
    //変数indexに.nav-itemのインデックスを代入
    const index = $(this).index();
//.descriptionが含まれるliをdisplay: none;に変更
    $('.description li').addClass('is-hidden');
//変数indexに対応する.descriptionが含まれるliからdisplay: none;を除く
    $('.description li').eq(index).removeClass('is-hidden');
  });
});
