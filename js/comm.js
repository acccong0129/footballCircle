
	var myscroll;
    function loaded(){
       setTimeout(function(){
                myscroll= new iScroll("wrapper");
         },100);
    }
    window.addEventListener("load",loaded,false);

window.onload = function(){

    //首页热点 关注切换
    $('.index a').tap(function(){
    	if($(this).hasClass('indexHeaderAct')){
    		return;
    	}

    	switch($(this).index()){
    		case 0 :
    			window.location.href = "index_hot.html"
                break;
            case 1 :
				window.location.href = "index_att.html"
	            break;
    	}

    });

    //首页热点子菜单切换
    $('.indexMain a').tap(function(){
        if($(this).hasClass('active')){
            return;
        }

        switch($(this).index()){
            case 0:
                $('.indexBody ul').eq(0).css({'display':'block','display':'-webkit-flex',
    'display':'-webkit-box'}).siblings().css('display','none')
                $('.indexMain a').eq(0).addClass('active').siblings().removeClass('active')
                break;
            case 1:
                $('.indexBody ul').eq(1).css({'display':'block','display':'-webkit-flex',
    'display':'-webkit-box'}).siblings().css('display','none')
                $('.indexMain a').eq(1).addClass('active').siblings().removeClass('active')
               break;
            case 2:
                $('.indexBody ul').eq(2).css({'display':'block','display':'-webkit-flex',
    'display':'-webkit-box'}).siblings().css('display','none')
                $('.indexMain a').eq(2).addClass('active').siblings().removeClass('active')
                break;
        }

    })




	//底部导航切换
    $('.menu a').tap(function(){
    	if($(this).hasClass('menuActive')){
    		return;
    	}

    	switch($(this).index()){
    		case 0 :
    			window.location.href = "index_hot.html"
                break;
            case 1 :
				window.location.href = "find.html"
	            break;
	        case 3 :
    			window.location.href = "user.html"
                break;
            case 4 :
				window.location.href = "login.html"
	            break;
    	}

    });

    //find页面搜索框聚焦键盘调出处理事件
    var hei = $(window).height();
    window.onresize = function(){
    	if($(window).height() < hei-20){
			$('footer').css('display','none')
    	}else if($(window).height() >= hei-10){
    		$('footer').css('display','block')
    	}
    };













}