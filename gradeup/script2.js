'use strict';
let album = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function showAlbumLoop() {
  while (true) {  // 無限ループ
    for (let photo of album) {
      document.getElementById('image').setAttribute('src', './img/'+photo);
      await sleep(1000);  // 1秒待つ
    }
  }
}

showAlbumLoop();  // 実行
