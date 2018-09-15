/*
* @Author: 我的文档
* @Date:   2018-08-31 16:14:03
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-15 16:07:08
*/   
         
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
  
    pic($(".Portfolio ul li"),$(".Portfolio .mask"),$(".Portfolio .mask .leftbtn"),$(".Portfolio .mask .rightbtn"))
    pic($(".activity ul li"),$(".activity .mask"),$(".activity .mask .leftbtn"),$(".activity .mask .rightbtn"))

