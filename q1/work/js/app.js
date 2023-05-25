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
/*
const q3 = document.querySelector('#q3.btn');
q3.addEventListener('click', ()=>{
  fadeOut(q3);
});

function fadeOut(q3) {
  let opacity =1;
  const timer = setInterval(()=>{
    if (opacity <= 0){
      clearInterval(timer);
      q3.style.display ='none';
    }else {
      q3.style.opacity = opacity;
      opacity -= 0.1;
    }
  }, 3000);
}*/
  document.querySelector('#q3.btn').onclick(function(){
    this.fadeOut(3000);
  });
