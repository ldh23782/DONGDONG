(function($){
   var tabMenu = $('#tabMenu');
   var tabUl = tabMenu.children('ul');
   var tabLi = tabUl.children('li'); //tabUl의 자식요소 li를 변수처리
   var content = $('.menu_content');
   
   
   tabLi.on('click',['button'],function(e){
      e.preventDefault();
   var index = $(this).index(); //선택된 요소의 순서값 파악
   var myIndex =content.children('div').eq(index);//선택된 순서에 맞는 내용선택
   myIndex.stop().slideDown(); //선택된 요소를 슬라이딩 기능으로 display:block 처리
   myIndex.siblings('div').stop().slideUp();
   });
   })(jQuery);