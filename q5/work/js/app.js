// .dropdwnの直下の子要素のliのホバー時に.dropdwn_menuの子要素のリストが開く

$(function(){
  $('.dropdwn > li').hover(function(){
    $(this).find('.dropdwn_menu').slideDown();
  },
  function(){
    $(this).find('.dropdwn_menu').slideUp();
  });
});