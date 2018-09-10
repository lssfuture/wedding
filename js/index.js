/*
* @Author: 我的文档
* @Date:   2018-08-31 16:14:03
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-07 11:24:04
*/
// let imgs=document.querySelectorAll("img");
// let banner=document.querySelectorAll(".banner")[0];
// let leftbtn=document.querySelectorAll(".leftbtn")[0];
// let rightbtn=document.querySelectorAll(".rightbtn")[0];
// console.log(imgs);
// let widths=parseInt(getComputedStyle(imgs[0],null).width);
// console.log(widths);
//  imgs[0].style.left=0;
//     let now=0;
//     let next=0;
//     let flag=true;

//     let t=setInterval(move,2000);
//     function move() {
//         next++;
//         if (next==imgs.length){
//             next=0;
//         }
//         //下一张图永远在最右侧
//         imgs[next].style.left=widths+"px";
//         animate(imgs[now],{left:-widths});
//         animate(imgs[next],{left:0},function () {
//             flag=true;
//         });
//         now=next;
//     }
//     function moveL() {
//         next--;
//         if (next<0){
//             next=imgs.length-1;
//         }
//         imgs[next].style.left=-widths+"px";
//         animate(imgs[now],{left:widths});
//         animate(imgs[next],{left:0},function () {
//             flag=true;
//         });
//         now=next;
//     }
//     leftbtn.onclick=function () {
//         // 判断开关是否开启
//         // 如果开关开启，则!flag=false,不执行return,执行flag=false和move,move执行完flag=true;
//         // 开关关闭的时候，不要点击
//         // flag=false      !flag=true;     执行return     结束函数
//         if (!flag){
//             return;
//         }
//         flag=false;
//         moveL();
//     }
//     rightbtn.onclick=function () {
//         if (!flag){
//             return;
//         }
//         flag=false;
//         move();
//     }
//     banner.onmouseover=function () {
//          clearInterval(t);
//      }
//     banner.onmouseout=function () {
//          t=setInterval(move,2000);
//     }
	
// 	let back=document.querySelectorAll(".sort ul li")[2];
// 	// console.log(back);
// 	back.onclick=function(){
// 		animate(document.documentElement,{scrollTop:0},600);
// 	}
//     
         
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    autoplay: {
        delay: 2000,//2秒切换一次
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  
  })        
mySwiper.el.onmouseover = function(){
  mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function(){
  mySwiper.autoplay.start();
}

  // 返回顶部
    let back=document.querySelectorAll(".sort ul li")[2];
    console.log(back);
    back.onclick=function(){
        animate(document.documentElement,{scrollTop:0},600);
    } 
  
