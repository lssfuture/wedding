/*
* @Author: 我的文档
* @Date:   2018-09-15 16:00:57
* @Last Modified by:   我的文档
* @Last Modified time: 2018-09-15 16:04:46
*/
function pic(lis,cover,left,right){
        lis.click(function () {
            let i=$(this).index();
            cover.addClass("hot");
            let imgSrc=$(this).children("img").attr("src");
            cover.children("img").attr("src",imgSrc);

            right.click(function (e) {
                e.stopPropagation();
                i++;
                if (i==lis.length){
                    i=0;
                }
                let val=lis.eq(i).children("img").attr("src");
                cover.children("img").attr("src",val);
            })
           left.click(function (e) {
                e.stopPropagation();
                i--;
                if (i==-1){
                    i=lis.length-1;
                }
                let val=lis.eq(i).children("img").attr("src");
                cover.children("img").attr("src",val);
            })
        })


        cover.click(function () {
            cover.removeClass("hot");
        })
}

