

var load_step = 1;
var messages =[];

$(function () {



    //请求   // 初始化加载
    $.getJSON("../data/message2.json" , function (results) {
        messages = results;
    });

    //生成页面
    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            // console.log(e)

            //替换成 自己的 HTML ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            let item = $("<div class=\"follow-dynamic-display \">\n" +
                "        <div class=\"display-first \">\n" +
                "            <div class=\"display-first-left xy-center \">\n" +
                "                <div class=\"display-first-left-img \" style=\"background-image: url("+e.photo+")\">\n" +
                "                    <div class=\"identification \"></div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"display-first-right \">\n" +
                "                <div class=\"display-first-right-top\">"+e.name+"\n" +
                "                    <div class=\"topic xy-center \">\n" +
                "                        <div class=\"topic-img \"></div>话题\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"display-first-right-bottom \">1小时前&nbsp;&nbsp;参与了话题[篮球鞋]</div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"display-second \" style=\"background-image: url("+e.img+")\"></div>\n" +
                "        <div class=\"display-third \">"+e.introduce+"</div>\n" +
                "        <div class=\"display-fourth xy-center \">\n" +
                "            <div class=\"display-fourth-left  xy-center\">\n" +
                "                <div class=\"display-retransmission \"></div>\n" +
                "                <div class=\"display-review \"></div>\n" +
                "            </div>\n" +
                "            <div class=\"display-fourth-right\"></div>\n" +
                "        </div>\n" +
                "        <div class=\"display-fifth\">\n" +
                "            <div class=\"display-comment\">"+e.comment1+"：<span>第</span><span>一</span></div>\n" +
                "            <div class=\"display-comment\">"+e.comment2+"：<span>封</span><span>面</span><span>无</span><span>敌</span></div>\n" +
                "            <div class=\"display-comment\">"+e.comment3+"：<span>没</span><span>毛</span><span>病</span></div>\n" +
                "        </div>\n" +
                "    </div>");

            //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

            $("#follow-dynamic").append(item);
        })

    }

//监听滚动
    $("#follow-dynamic").scroll(function () {   //监听滚动事件..

        let dynamic_totalHeight = this.scrollHeight;  //总高度

        let dynamic_scroll = $(this).scrollTop();   //卷动高度 // 看不见的部分

        let dynamic_height = $(this).height();   //元素可见部分的高度



        if ((Math.ceil(dynamic_scroll) + Math.ceil(dynamic_height)) / dynamic_totalHeight >0.9999 ) {

            setTimeout(function () {
                let arr = messages.slice((load_step-1) , load_step+1);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                load_step += 2;
            }, 0)

            // console.log("container_totalHeight =  " + container_totalHeight + " ,  container_height : " + container_height + " + scroll : "+contianer_scroll );

        }

    })



});
