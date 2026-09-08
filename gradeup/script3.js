'use strict';
const box=document.getElementById('image');
box.addEventListener('mouseover',()=>{box.style.transform='scale(2)'});
box.addEventListener('mouseout',()=>{box.style.transform='scale(1)'});