window.addEventListener('load',function(){
    // 获取元素
    let maios =document.querySelector('.maios');
    let sliderbar =document.querySelector('.slider-bar');
    let goBack=document.querySelector('.goBack');
    let R_B =document.querySelector('.R_B');
    let nav =document.querySelector('.nav');

    let maiostop= maios.offsetTop;
    let navtop= nav.offsetTop;
    let sliderbartop=sliderbar.offsetTop-maiostop;
    let R_Btop=R_B.offsetTop;
    // 滚动事件 scroll
    document.addEventListener('scroll',function(){
        if(window.pageYOffset>=maiostop){
            sliderbar.style.position=   'fixed'
            sliderbar.style.top=sliderbartop +'px';
            goBack.style.display=   'block'
        }else{
            sliderbar.style.position=   'absolute'
            sliderbar.style.top='800px';
            goBack.style.display=   'none'
        }
        
    });
    goBack.addEventListener('click',function(){
        // window.scroll(0,0);
        animate(window,0);
    });
    // 动画函数
    function animate(obj, targent, callback) {

        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            //步长值写道定时器的里面
            // 步长值改为整数，不能出现小数情况【要考虑到正负值的问题】
            let step = (targent - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == targent) {
                //清楚定时器【停止动画 本质是停止定时器】
                clearInterval(obj.timer);
                // 回调函数写在定时器结束的位置
                if (callback) {
                    callback();
                }
                // 短路运算知识
                // 【两个真才为真，一个假就为假，前面为假就为假】
                // callback &&callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值，公式（目标位置-当前位置）/10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0,window.pageYOffset + step )
        }, 30);
    
    }

})