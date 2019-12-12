/*--------슬라이드 ---------*/

const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
  const wrap = one('.slide') // .slide 선택
  const target = wrap.children[0] // .slide ul 선택
  const len = target.children.length // .slide li 갯수
  // .slide ul의 너비 조정
  target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s;`
  // .slide li의 너비 조정
  Array.from(target.children)
  .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
  // 화면 전환 실행
  let pos = 0
  setInterval(() => {
    pos = (pos + 1) % len // 장면 선택
    target.style.marginLeft = `${-pos * 100}%`
  }, 3000) // 3000 = 3000ms = 3sec. 즉, 3초 마다 실행
}
window.onload = function () {
  slide()
}

/* qna */

$(function(){
    function setHeight(){
        $(".response").each(function(index,element){
            var target = $(element);
            target.removeClass("fixed-height");
            var height = target.innerHeight();
            target.attr("data-height", height)
                  .addClass("fixed-height");
        });
    };
    $("input[name=question]").on("change", function(){
        $("p.response").removeAttr("style");
        
        var target = $(this).next().next();
        target.height(target.attr("data-height"));
    })
    setHeight();
});

/*--------family-------*/

$(document).ready(function(){
    $(".family ul").mouseenter(function(){
      $(".submenu").stop().slideDown();
    })
    $(".family ul").mouseleave(function(){
      $(".submenu").stop().slideUp();
    })
  })