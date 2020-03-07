; (function () {
    window.addEventListener('load', function () {
        let preview_img = document.querySelector('.preview_img');
        let mask = document.querySelector('.mask');
        let bigmask = document.querySelector('.bigmask');

        let bigimg = document.querySelector('.bigimg');

        preview_img.addEventListener('mouseover', function () {
            mask.style.display = 'block';
            bigmask.style.display = 'block';
        })
        preview_img.addEventListener('mouseout', function () {
            mask.style.display = 'none';
            bigmask.style.display = 'none';
        })
        preview_img.addEventListener('mousemove', function (e) {
            // mask.style.display='none';
            // bigmask.style.display='none';
            let x = e.pageX - this.offsetLeft;
            let y = e.pageY - this.offsetTop;
            // console.log(x,y);
            let maskX = x - mask.offsetWidth / 2;
            let maskY = y - mask.offsetHeight / 2;
            if (maskX <= 0) {
                maskX = 0;
            } else if (maskX >= preview_img.offsetWidth - mask.offsetWidth) {
                maskX = preview_img.offsetWidth - mask.offsetWidth;
            }
            if (maskY <= 0) {
                maskY = 0;
            } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
                maskY = preview_img.offsetHeight - mask.offsetHeight;
            }
            mask.style.left = maskX + 'px';
            mask.style.top = maskY + 'px';
            // 大图片移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
            // 遮挡层移动距离  maskX maskY
            // maskmax遮挡层最大移动距离  preview_img.offsetHeight-mask.offsetHeight
            // bigmax大图片最大移动距离 bigimg.offsetWidth-big.offsetWidth
            let bigmax = bigimg.offsetWidth - bigmask.offsetWidth;
            let maskmax = preview_img.offsetWidth - mask.offsetWidth;
            let bigx = maskX * bigmax / maskmax;
            let bigy = maskY * bigmax / maskmax;
            bigimg.style.left = -bigx + 'px';
            bigimg.style.top = -bigy + 'px';
        })
    });
})();

; (function () {
    window.onload = function () {
        let detail_tab_list = document.querySelector('.detail_tab_list');
        let ul = detail_tab_list.querySelector('ul');
        let li = ul.querySelectorAll('li');
        let items = document.querySelectorAll('.item');


        for (let i = 0; i < li.length; i++) {
            li[i].setAttribute('index', i);
            li[i].onclick = function () {
                for (let j = 0; j < li.length; j++) {
                    li[j].className = '';
                }
                this.className = 'current';
                let index = this.getAttribute('index');

                // console.log(index);
                for (let n = 0; n < items.length; n++) {
                    items[n].style.display = 'none';
                }
                items[index].style.display = 'block';
            }
        };


    }
})();