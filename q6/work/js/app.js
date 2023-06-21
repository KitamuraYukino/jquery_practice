$(function () {
  $('.select-box').change(function () {
    let selectedCategory = $(this).val();

    $('.food-list li').each(function () {
      let categoryType = $(this).data('category-type');

      if (selectedCategory === 'all' || selectedCategory === categoryType) {
        $(this).show();
        console.log('選んだ')
      } else {
        $(this).hide();
      }
    });
  });
});