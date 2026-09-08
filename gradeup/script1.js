'use strict';
function recalc(){
    const now=new Date();
    const year=now.getFullYear();
    const month=now.getMonth();
    const date=now.getDate();
    const hour=now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds()
    const output=`現在時刻 ${year}年${month+1}月${date}日 ${hour}時${min}分${sec}秒`;
    document.getElementById('time').textContent=output;
    setTimeout(recalc,1000);
}

recalc();
