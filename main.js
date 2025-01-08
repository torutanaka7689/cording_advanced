const swiper = new Swiper(".swiper", {
    loop: true, //繰り返しをする
    centeredSlides: false, //アクティブなスライドが真ん中に出るかどうか
    breakpoints: {
        375: {        // スマホサイズの場合
            slidesPerView: 1, //スライド同時表示数
        },
        1024: {      // PCサイズの場合
            slidesPerView: 2, //スライド同時表示数
        },
    },
    spaceBetween: 0, //スライド間の距離
    speed: 600, //スライドの推移時間ms
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },//スライドの左右矢印
    pagination: {
        el: ".swiper-pagination",
        type:"bullets"
    },//ページネーション
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true
    }, //スクロールバー
    autoplay: true, //自動再生
});

//スマホサイズでスライド画像サイズ自動変更
$(function(){
    let img_tag = $("#sliderimg");
    if(window.matchMedia("(max-width: 599px)").matches){
        img_tag.css("height","90%");
        img_tag.css("width","80%");
        img_tag.css("margin","auto");
        img_tag.css("padding-top","5%");
    } else {
    };
});
$(function(){
    let img_tag = $("#sliderimg2");
    if(window.matchMedia("(max-width: 599px)").matches){
        img_tag.css("height","90%");
        img_tag.css("width","80%");
        img_tag.css("margin","auto");
        img_tag.css("padding-top","5%");
    } else {
    };
});
$(function(){
    let img_tag = $("#sliderimg3");
    if(window.matchMedia("(max-width: 599px)").matches){
        img_tag.css("height","90%");
        img_tag.css("width","80%");
        img_tag.css("margin","auto");
        img_tag.css("padding-top","5%");
    } else {
    };
});
$(function(){
    let img_tag = $("#sliderimg4");
    if(window.matchMedia("(max-width: 599px)").matches){
        img_tag.css("height","90%");
        img_tag.css("width","80%");
        img_tag.css("margin","auto");
        img_tag.css("padding-top","5%");
    } else {
    };
});
//アコーディオンのアニメーション
$(function(){
    let list3button_tag = $("#list3button");
    let list_tag = $(".li-accordion3");
    list3button_tag.on("click",function(){
        list_tag.addClass("fadeIn")
    });
});
//スマホサイズでグリッドの要素サイズ自動変更1つめ
$(function(){
    let gridtitle_tag = $("#gridtitle");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridtitle_tag.css("margin-left","10%");
    } else {
    };
});
$(function(){
    let gridimg_tag = $("#gridimg");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridimg_tag.css("width","90%");
        gridimg_tag.css("margin-left","5%");
    } else {
    };
});
$(function(){
    let gridmsg_tag = $("#gridmsg");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridmsg_tag.css("margin-top","0%");
        gridmsg_tag.css("margin-left","3%");
        gridmsg_tag.css("font-size","120%");
    } else {
    };
});
//スマホサイズでグリッドの要素サイズ自動変更2つめ
$(function(){
    let gridtitle2_tag = $("#gridtitle2");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridtitle2_tag.css("margin-left","10%");
    } else {
    };
});
$(function(){
    let gridimg2_tag = $("#gridimg2");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridimg2_tag.css("width","90%");
        gridimg2_tag.css("margin-left","5%");
    } else {
    };
});
$(function(){
    let gridmsg2_tag = $("#gridmsg2");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridmsg2_tag.css("margin-top","0%");
        gridmsg2_tag.css("margin-left","3%");
        gridmsg2_tag.css("font-size","120%");
    } else {
    };
});
//スマホサイズでグリッドの要素サイズ自動変更3つめ
$(function(){
    let gridtitle3_tag = $("#gridtitle3");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridtitle3_tag.css("margin-left","10%");
    } else {
    };
});
$(function(){
    let gridimg3_tag = $("#gridimg3");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridimg3_tag.css("width","90%");
        gridimg3_tag.css("margin-left","5%");
    } else {
    };
});
$(function(){
    let gridmsg3_tag = $("#gridmsg3");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridmsg3_tag.css("margin-top","0%");
        gridmsg3_tag.css("margin-left","3%");
        gridmsg3_tag.css("font-size","120%");
    } else {
    };
});
//スマホサイズでグリッドの要素サイズ自動変更4つめ
$(function(){
    let gridbg_tag = $("#gridbg");
    if(window.matchMedia("(max-width: 599px)").matches){
        gridbg_tag.css("margin-left","5%");
        gridbg_tag.css("margin-right","5%");
    } else {
    };
});
//スマホサイズで店舗一覧非表示
$(function(){
    let shop_tag = $("#shoplist");
    if(window.matchMedia("(max-width: 599px)").matches){
        shop_tag.remove();
    } else {
    };
});
//スクロールで要素をフェードイン
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
            $(".fadeIn").each(function () {
                const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("active");
            }
        });
    });
jQuery(window).scroll();
});