function animate(obj, targent, callback) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写道定时器的里面
        // 步长值改为整数，不能出现小数情况【要考虑到正负值的问题】
        let step = (targent - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == targent) {
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
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);

}