// mydong.js


var x = "이동희의 portfolio 자료실입니다.";
var i = 0;
function typeWriter() {
    // let typing = $('.typing')[0];
    // console.log(typing);
    let typing = document.getElementsByClassName("typing")[0];
    // console.log(document.getElementsByClassName("typing")[0]);
if(i < x.length) {
    typing.innerHTML += x[i];
    // typing.append(x[i]);
    i++;
    setTimeout(typeWriter,150);    
 } 
}
typeWriter();
// 타이핑 효과 자바스크립트

(function($){
    /*
      let myarr  = [];
      let myplus = [11,'aa', 900];
      myarr.push(10);       // 뒤에 추가
      myarr.pop();          // 마지막요소 제거
      myarr.unshift(10023); // 앞에 추가
      myarr.shift();        // 앞요소 제거
      let myarrPlus = myarr.concat(myplus); // 두개의 배열을 합치기
    */
    const htmlEl = $('html, body');
    const wrap = $('#wrap');
    const scrollEl = wrap.find('.scroll');
    
    htmlEl.animate({scrollTop:0});
    let myScrollElTop = [];
    let scrollLen = scrollEl.length;
    let timed = 500;
    
    for(let i = 0; i < scrollLen; i++){
      let scTop = scrollEl.eq(i).offset().top;
      myScrollElTop.push(scTop);
    }
    // console.log(myScrollElTop);
    // ---------------------------------------------
    let myStatus = true, n, useN=0;
    // ================================================
    const skill = $('.skill')
    const ScrollMagic = function(){
      htmlEl.animate({scrollTop:myScrollElTop[useN]},
    
                     timed,'easeOutSine',function(){
    
                        if(useN === 2){skill

                        }
                    myStatus = true;
      });
     };// ScrollMagic() 
    // ================================================
    
    $(window).on('mousewheel DOMMouseScroll', function(e){
      if(e.originalEvent.wheelDelta){
        n = e.originalEvent.wheelDelta * -1;
      }else{    n = e.originalEvent.detail * 40;  }
     
      if(myStatus){
        myStatus = false;
        if(n > 0){useN++;
          if(useN >= scrollLen){useN = scrollLen-1;}  ScrollMagic();
        }else{useN--;
          if(useN < 0){useN = 0;}  ScrollMagic(); }
      }
    }); //마우스 휠
    

const myCan = document.querySelectorAll('.my_can');
// console.log(myCan);

for(let i=0; i<myCan.length; i++){
   myCan[i].innerHTML='<canvas width="260" height="260" class="myC"></canvas>';
   let myC = document.querySelectorAll('.myC')[i];
   myC.style = 'transform:rotate(-90deg) scale(0.5) translate(50%, -50%)'; 
} // for

// const resultArr = [90, 80, 50];
const resultArr = [{sj:'adobe photoshop'  , sc:60}, 
                   {sj:'adobe illustrator', sc:90},
                   {sj:'adobe premiere'   , sc:50},
                   {sj:'html/css3'  , sc:100},
                   {sj:'반응형웹'  , sc:100},
                   {sj:'javascript'  , sc:60},
                   {sj:'jquery'  , sc:80},
                   {sj:'웹 표준'  , sc:80},
                   {sj:'크로스브라우징'  , sc:70},
                   {sj:'웹 접근성'  , sc:70},
                   {sj:'bootstrap'  , sc:50},
                   {sj:'wordpress'  , sc:70},
                   {sj:'whois dream'  , sc:80},
                   {sj:'whois mall(쇼핑몰)'  , sc:80},]; // resultArr[index].sc
document.querySelectorAll('.myC').forEach(function(data, index){
    let ctx = data.getContext('2d');
    const myR = function(r){ return Math.PI / 180 * (3.6 * r);  };
    const progressArc = function(r){ ctx.arc(130, 130, 90, 0, myR(r) ); };
    let j = 0; 
    const graphGo = function(s){
        setInterval(function(){
            if (j < s){ ctx.beginPath(); ctx.lineWidth = 15;  
                        ctx.strokeStyle = '#12850C';  ctx.lineCap = "round"; progressArc(++j); ctx.stroke();
            }else{ clearInterval(); }
        }, 30);
    };
    graphGo( resultArr[index].sc );
});



})(jQuery);