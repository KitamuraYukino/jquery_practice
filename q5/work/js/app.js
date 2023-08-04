// .dropdwnの直下の子要素のliのホバー時に.dropdwn_menuの子要素のリストが開く

//jQueryの実行
$(function(){
  //.dropdown内のli要素のホバー時に発生するイベント
  $('.dropdwn > li').hover(function(){
    //.dropdown内の.dropdown_menuを含む要素を見つけてスライドダウンさせる。途中でホバーが外れた場合はアニメーションを止める。
    $(this).find('.dropdwn_menu').stop().slideDown();
  },
  //ホバーが外れた場合
  function(){
    //.dropdown内の.dropdown_menuを含む要素をスライドアップさせる（元に戻す）途中でホバーが外れた場合はアニメーションを止める。
    $(this).find('.dropdwn_menu').stop().slideUp();
  });
});