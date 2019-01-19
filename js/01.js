

var load_step = 1;
var messages =[];

$(function () {



    //请求   // 初始化加载
    $.getJSON("../data/message.json" , function (results) {
        messages = results;
    });

    //生成页面
    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            // console.log(e)

            //替换成 自己的 HTML ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            let item = $("<div class=\"dynamic-area\">\n" +
                "            <div class=\"dynamic-img\" style=\"background-image: url("+e.imga+")\"></div>\n" +
                "            <div class=\"dynamic-img\" style=\"background-image: url("+e.imgb+")\"></div>\n" +
                "            <div class=\"dynamic-img\" style=\"background-image: url("+e.imgc+")\"></div>\n" +
                "        </div>");
            //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

            $("#dynamic").append(item);
        })

    }

//监听滚动
    $("#dynamic").scroll(function () {   //监听滚动事件..

        let dynamic_totalHeight = this.scrollHeight;  //总高度

        let dynamic_scroll = $(this).scrollTop();   //卷动高度 // 看不见的部分

        let dynamic_height = $(this).height();   //元素可见部分的高度



        if ((Math.ceil(dynamic_scroll) + Math.ceil(dynamic_height)) / dynamic_totalHeight >0.9999 ) {

            setTimeout(function () {
                let arr = messages.slice((load_step-0) , load_step+5);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                load_step += 5;
            }, 0)

            // console.log("container_totalHeight =  " + container_totalHeight + " ,  container_height : " + container_height + " + scroll : "+contianer_scroll );

        }

    })



});
