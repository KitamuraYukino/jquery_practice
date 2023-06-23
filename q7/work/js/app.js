$(function () {
  $('.btn__submit').on('click', function () {
    let familyName = $('#family__name').val();
    let givenName = $('#given__Name').val();
    let year = $('.year').val();
    let month = $('.month').val();
    let day = $('.day').val();
    let gender = $("input[name='gender']:checked").val();
    let work = $('occupation').val();
    let accountName = $('#account__name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let duplicationPassword = $('#duplication__password').val();
    let address = $('#address').val();
    let tel = $('#tel').val();
    let subscription = [];
    $('input[type="checkbox"]:checked').each(function () {
      subscription.push($(this).val());
    });

    console.log('名字');
    console.log(familyName);
    console.log('名前');
    console.log(givenName);
    console.log('生年月日');
    console.log(year + '年' + month + '月' + day + '日');
    console.log('性別');
    console.log(gender);
    console.log('職業');
    console.log(work);
    console.log('アカウント名');
    console.log(accountName);
    console.log('メールアドレス');
    console.log(email);
    console.log('パスワード');
    console.log(password);
    console.log('確認用パスワード');
    console.log(duplicationPassword);
    console.log('住所');
    console.log(address);
    console.log('電話番号');
    console.log(tel);
    console.log('購読情報');
    console.log(subscription);
  });
});