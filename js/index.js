;
(function () {

    window.addEventListener('load', function () {
        // this.alert(1);
        // 獲取元素
        let zhu = document.querySelector('.zhu');
        let ll = document.querySelector('.ll');
        let rr = document.querySelector('.rr');
        let zhuWidth = zhu.offsetWidth;
        // 給元素添加事件監聽





        //鼠標經過顯示【隱藏】箭頭
        zhu.addEventListener('mouseenter', function () {
            ll.style.display = 'block';
            rr.style.display = 'block';
            clearInterval(timer);
            timer = null;
        });
        zhu.addEventListener('mouseleave', function () {
            ll.style.display = 'none';
            rr.style.display = 'none';
            timer = setInterval(function () {
                // 手动调用点击事件
                rr.click();
            }, 2500);
        });

        // 动态生成小圆圈，有幾張圖片，就有幾個小圓圈
        //1.獲取圖片的個數【圖片在li裏面，所以只要數有幾個li】用for循環
        //2.創建元素節點createElement('li');添加節點element.appendchild(li)
        let ul = zhu.querySelector('ul');
        let ol = zhu.querySelector('ol');
        // console.log(ul.children.length);
        for (let i = 0; i < ul.children.length; i++) {
            //創建元素節點createElement('li');
            let li = document.createElement('li');
            // 记录当前小圆圈的索引号，通过自定义属性来做setattribute
            li.setAttribute('index', i);
            //    添加節點element.appendchild(li)
            ol.appendChild(li);
            //排他思想  在生成小圓圈的同時可以綁定事件【幹掉所有人，留下我自己】
            li.addEventListener('click', function () {
                //幹掉所有人  把所有li的類current清除
                for (let j = 0; j < ol.children.length; j++) {
                    ol.children[j].className = '';
                }
                //留下我自己  把當前的li添加類current
                this.className = 'current';
                // 点击小圆圈，移动图片【移动ul】,用到动画函数
                // ul的移动距离 小圆圈的索引号 * 图片的宽度，是负值
                // 点击某个小li，就拿到当前小li的索引号
                let index = this.getAttribute('index');
                // 当点击某个小li就要把    这个小li的索引号给num circle
                num = index;
                circle = index;
                console.log(zhuWidth);
                console.log(index);

                animate(ul, -(index * zhuWidth));
            })
        }
        ol.children[0].className = 'current';
        // 6.克隆第一张土坯那（li）放到ul,最后面
        let first = ul.children[0].cloneNode(true);
        ul.appendChild(first);

        //7.点击右侧按钮滚动图片
        let num = 0;
        // circle控制小圆圈的播放
        let circle = 0;
        // flag设置遮罩层
        let flag = true;
        rr.addEventListener('click', function () {
            // alert(1); 
            if (flag) {
                flag = false;

                //如果走到最后复制的一张图片，这时，ul要快速复原left 改为 0
                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                // console.log(num);
                animate(ul, -(num * zhuWidth), function () {
                    flag = true;
                });
                // 8.点击右侧按钮，小圆圈跟随变化，再申明一个变量控制小圆圈的播放
                circle++;
                if (circle == ol.children.length) {
                    circle = 0;
                }
                // for (i = 0; i < ol.children.length; i++) {
                //     排他思想，去掉所有人
                //     ol.children[i].className = '';
                // }
                // 留下自己
                // ol.children[circle].className = 'current';
                paita();
            }

        });
        // 9.左侧按钮
        ll.addEventListener('click', function () {
            // alert(1); 
            if (flag) {
                flag = false;
                //如果走到最后复制的一张图片，这时，ul要快速复原left 改为 0
                if (num == 0) {
                    num = ol.children.length;
                    ul.style.left = -(num * zhuWidth) + 'px';
                }
                num--;
                // console.log(num);
                animate(ul, -(num * zhuWidth), function () {
                    flag = true;
                });
                // 8.点击左侧按钮，小圆圈跟随变化，再申明一个变量控制小圆圈的播放
                // 如果circle《0 说明是第一张图片，小圆圈要改为zuihouyige
                circle--;
                if (circle < 0) {
                    circle = ol.children.length - 1;
                }
                // for (i = 0; i < ol.children.length; i++) {
                //     排他思想，去掉所有人
                //     ol.children[i].className = '';
                // }
                // 留下自己
                // ol.children[circle].className = 'current';
                paita();
            }

        });
        let paita = function () {
            for (i = 0; i < ol.children.length; i++) {
                // 排他思想，去掉所有人
                ol.children[i].className = '';
            }
            // 留下自己
            ol.children[circle].className = 'current';
        };
        // 11/动画【定时器】
        let timer = setInterval(function () {
            // 手动调用点击事件
            rr.click();
        }, 2500);

        // =============================================
        // =============================================
        // let ci = document.querySelector('.ci');
        // let lll = dcoument.querySelector('.lll');
        // let rrr = dcoument.querySelector('.rrr');
        // ci.addEventListener('mouseenter',function(){
        //     lll.style.positoin='block'
        // })

    })
})();

;
(function () {
    window.addEventListener('load', function () {
        let changlunbotu = document.querySelector('.changlunbotu');
        let clb_l = changlunbotu.querySelector('#clb_l');
        let clb_r = changlunbotu.querySelector('#clb_r');
        changlunbotu.addEventListener('mouseenter', function () {
            clb_l.style.display = 'block';
            clb_r.style.display = 'block';
        });
        changlunbotu.addEventListener('mouseleave', function () {
            clb_l.style.display = 'none';
            clb_r.style.display = 'none';
        });

        let luntu = changlunbotu.querySelector('.luntu');
        let ull = luntu.querySelector('.ull');
        let changlunbotuWidth = changlunbotu.offsetWidth;
        let numm = 0;
        let firstt = ull.children[0].cloneNode(true);
        ull.appendChild(firstt);
        let flag = true;
        clb_r.addEventListener('click', function () {
            // alert(1);
            if (flag) {
                flag = false;
                if (numm == ull.children.length - 1) {
                    ull.style.left = 0;
                    numm = 0;
                }
                numm++;
                animate(ull, -numm * changlunbotuWidth, function () {
                    flag = true;
                });
            }

        });
        clb_l.addEventListener('click', function () {
            // alert(1);
            if (flag) {
                flag = false;
                if (numm == 0) {
                    numm = ull.children.length - 1;
                    ull.style.left = -numm * changlunbotuWidth + 'px';
                }
                numm--;
                animate(ull, -numm * changlunbotuWidth, function () {
                    flag = true;
                });
            }

        })
    });


})();

;
(function () {
    window.addEventListener('load', function () {
        let duanlunbotu2 = document.querySelector('.duanlunbotu2');
        let points = document.querySelectorAll('.point');

        let index = 0;

        let clearOn = function () {
            for (let i = 0; i < points.length; i++) {
                points[i].className = 'point';
            }
            for (let j = 0; j < duanlunbotu2.children.length; j++) {
                duanlunbotu2.children[j].className = 'duan color';
            }
        };

        let addOn = function () {
            points[index].className = 'point current';
            duanlunbotu2.children[index].className = 'duan color on';
        };

        //    小圆点
        for (let i = 0; i < points.length; i++) {
            points[i].addEventListener('mouseenter', function () {
                let pointIndex = this.getAttribute('data-index');
                index = pointIndex;

                clearOn();
                addOn();
            })
        };
        if (index > duanlunbotu2.children.length) {
            index = 0;
        }
        clearOn();
        addOn();

        let timer = setInterval(function () {
            index++;
            if (index > duanlunbotu2.children.length - 1) {
                index = 0;
            }
            clearOn();
            addOn();
        }, 2500);

        duanlunbotu2.addEventListener('mouseenter', function () {
            clearInterval(timer);
            timer = null;
        });
        duanlunbotu2.addEventListener('mouseleave', function () {
            timer = setInterval(function () {
                index++;
                if (index > duanlunbotu2.children.length - 1) {
                    index = 0;
                }
                clearOn();
                addOn();
            }, 2500);

        });

    });


})();

;
(function () {

    window.addEventListener('load', function () {
        // this.alert(1);
        // 獲取元素
        let qingdan = document.querySelector('.qingdan');
        let btn_l = document.querySelector('.btn-l');
        let btn_r = document.querySelector('.btn-r');
        let qingdanWidth = qingdan.offsetWidth;
        let xiaoyuanddian = document.querySelector('.xiaoyuanddian');
        let qing_ul = qingdan.querySelector('ul');
        let qing_ol = xiaoyuanddian.querySelector('ol');
        // 給元素添加事件監聽
        //鼠標經過顯示【隱藏】箭頭
        qingdan.addEventListener('mouseenter', function () {
            clearInterval(timer);
            timer = null;
        });
        qingdan.addEventListener('mouseleave', function () {
            timer = setInterval(function () {
                // 手动调用点击事件
                btn_r.click();
            }, 2500);
        });
        for (let i = 0; i < qing_ul.children.length; i++) {
            // console.log(qing_ul.children.length);
            let li = document.createElement('li');
            li.setAttribute('index', i);
            qing_ol.appendChild(li);

            li.addEventListener('mouseenter', function () {
                //幹掉所有人  把所有li的類current清除
                for (let j = 0; j < qing_ol.children.length; j++) {
                    qing_ol.children[j].className = '';
                }
                //留下我自己  把當前的li添加類current
                this.className = 'curret';
                let index = this.getAttribute('index');
                num = index;
                circlee = index;
                animate(qing_ul, -index * qingdanWidth);

            });
        }
        qing_ol.children[0].className = 'curret';

        let first = qing_ul.children[0].cloneNode(true);
        qing_ul.appendChild(first);


        var num = 0;
        // circle控制小圆圈的播放
        let circlee = 0;
        // flag设置遮罩层
        let flag = true;

        btn_r.addEventListener('click', function () {
            if (flag) {
                flag = false;
                if (num == qing_ul.children.length - 1) {
                    qing_ul.style.left = 0;
                    num = 0;
                }
                num++;
                animate(qing_ul, -num * qingdanWidth, function () {
                    flag = true;
                });
                circlee++;

                if (circlee == qing_ol.children.length) {
                    circlee = 0;
                }
                paita();
            }
        });
        btn_l.addEventListener('click', function () {
            if (flag) {
                flag = false;
                if (num == 0) {
                    num = qing_ul.children.length - 1;
                    qing_ul.style.left = -num * qingdanWidth + 'px';
                }
                num--;
                animate(qing_ul, -num * qingdanWidth, function () {
                    flag = true;
                });
                circlee--;

                if (circlee < 0) {
                    circlee = qing_ol.children.length - 1;
                }
                paita();
            }
        });



        let paita = function () {
            for (i = 0; i < qing_ol.children.length; i++) {
                // 排他思想，去掉所有人
                qing_ol.children[i].className = '';
            }
            // 留下自己
            qing_ol.children[circlee].className = 'curret';
        };
        let timer = setInterval(function () {
            // 手动调用点击事件
            btn_r.click();
        }, 2500);

    });
})();

; (function () {
    window.onload = function () {
        // ---------鼠标移入显示移除隐藏【家用电器】-------------
        let div = document.querySelector('.l');
        // let btm = document.querySelector('.btm');
        let ul = div.querySelector('ul');
        let li = ul.querySelector('li');
        let btm = li.querySelector('.btm');
        // let num = 0;
        // let index = 0;
        // for (let i = 0; i <= ul.children.length; i++) {
        //     if (num > ul.children.length) {
        //         num = 0;
        //     }
        //     num++;
        // };
        // for (let j = 0; j <= btm.length; j++) {
        //     if (index > btm.length) {
        //         index = 0;
        //     }
        //     index++;
        // };
        // ul.children[num].addEventListener('mouseenter', function () {
        //     btm[index].style.display = 'block';
        // });
        // ul.children[num].addEventListener('mouseleave', function () {
        //     btm[index].style.display = 'none';
        // })

        // ----------------------
    }

})();