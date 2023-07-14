//jQueryの実行
$(function () {
  //.select-box内の値を変えた場合に実行
  $('.select-box').change(function () {
    //変数selectedCategoryに.select-boxの値を代入
    let selectedCategory = $(this).val();
//.food-list内のliに一致するものすべてに繰り返し処理
    $('.food-list li').each(function () {
    //li要素内のcategory-type属性の値を取得してcategoryTypeに代入
      let categoryType = $(this).data('category-type');
//selectedCategoryがallまたはcategoryTypeと一致する場合
      if (selectedCategory === 'all' || selectedCategory === categoryType) {
      //あてはまるものを表示
        $(this).show();
      //あてはまらない要素について
      } else {
      //隠す
        $(this).hide();
      }
    });
  });
});