(function($){

    const wrap=$('#wrap');
    const headBox= $('#headBox')
    const gnb1=wrap.find('#gnb');
    const gnbT=gnb1.children('ul').children('li');

    const gnbUl=gnb1.find('ul.list');
    const gnbLi=gnbUl.find('li');

    gnbT.on('mouseenter',function(){
        $(this).find('ul').stop().slideDown(1000);
        headBox.addClass('action');
    });
    gnbT.on('mouseleave',function(){
        $(this).find('ul').stop().slideUp(1000);
        headBox.removeClass('action');
    });

    const viewBox = $('.viewBox');
    const view = viewBox.find('.view');
    const viewUl =view.find('ul');
    const viewLi =viewUl.find('li');
    const Indi= viewBox.children('.indicator');
    const IndiUl= Indi.children('ul');
    const IndiLi= IndiUl.children('li');
    let i = 0;
    
    viewLi.eq(0).siblings().fadeOut();

    setInterval(function($){
        i++
        if(i>=viewLi.length){i=0}
        viewLi.eq(i).fadeIn(function(){
            IndiLi.eq(i).css({backgroundSize:'200%'});
            IndiLi.eq(i).siblings().css({backgroundSize:'100%'});
            viewLi.eq(i).siblings().fadeOut();
        });
        

    },3000);
    //인디케이터 자동으로 이동


    





    
    

})(jQuery);