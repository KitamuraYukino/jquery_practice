// Q1-1
// #q1の色変更
window.onload = function () {
  // ページの読み込み時に発生する関数
  const q1 = document.getElementById("q1").style.color = "green";
  // id"q1"の取得と文字の色の変更（関数の動作の中身）
  console.log(q1);
  // 関数の実行
};

// Q1-2
// クリック時にボタンの色の変更
document.getElementById('q2').addEventListener('click',
  // html内でq2というidがクリックされたときに発生するイベント
  function () {
    // 発生するイベントの関数
    this.style.backgroundColor = 'pink';
    // q2の背景にpinkを指定
  });

// Q1-3
// クリックしてフェードアウト
$(function() {
  $("#q3").on("click", function() {
    $(this).fadeOut(3000);
  });
});

// Q1-4
// クリックしてサイズ変更
$(function(){
  $('#q4').on("click", function(){
    $(this).width(250);
    $(this).height(100);
  });
});