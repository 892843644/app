

var index_img = 2;
var task;


$(function(){ //当页面加载时





    task = setInterval("loadImg()" , 4500); //启动定时器

    $("#lift-img").mouseover(function(){ //鼠标经过
        window.clearInterval(task);
    });

    $("#lift-img").mouseout(function(){ //鼠标移出
        task = setInterval("loadImg()", 1000);
    })

})

function loadImg() {
    if (index_img === 4) index_img = 1;
    $("#lift-img").css("background-image", "url(../img/scroll-img/" + index_img + ".jpg)");
    index_img++;
}

