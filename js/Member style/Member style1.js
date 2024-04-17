
           //封装函数
            function byid(id){
                return typeof(id)==='string'?document.getElementById(id):id;
            }
            //len的设定   ：  由于长度上的计算很少，而且图片和数字移动数量相同，只需设置一个
            var main = byid('main'),
                pics = byid('banner').getElementsByTagName('div'),
                //dots是下面的标识
                dots = byid('dots').getElementsByTagName('li'),
                //prev是前一张
                prev = byid('prev'),
                //next是下一张
                next = byid('next'),
                len = pics.length,


                index = 0,
                timer = null;
            function solide(){
                
                for(var j=0;j<len;j++){
                    //在开始前，我们需要知道，函数是可以独立作用域之外的。
                    dots[j].index=j;//为所以dots属性添加id，分别为0，1，2，3，4。
                    //不太推荐使用这样，毕竟id名字取数字开头不好，不太合规矩。
                    dots[j].onclick = function(){
                        index = this.index;//(引用id的是dots,及dots的id);
                        changImg();
                    }
                }
                //然后是上、下一张
                prev.onclick = function(){
                    index--;
                    if(index<0){
                        index=len-1;
                    }
                    changImg();
                }
                next.onclick = function(){
                    index++;
                    if(index>=len){
                        index=0;
                    }
                    changImg();
                }
            }
            solide();//提前写上，开始方法，才有轮播效果
            //图片自动切换
            function changImg(){
                for(var i=0;i<len;i++){
                    pics[i].style.display='none';
                    dots[i].className="";
                }
                pics[index].style.display='block';
                dots[index].className='li1';
            }
            
            /*
            //计时器
            banner.onmouseover=function(){
                if(timer){//即timer不为null，为真
                    clearInterval(timer);//清除setinterval，并且此时timer又为false，不过，随着循环（即师表
                    //移开banner，循环继续又变回 setinterval。
                }
            }
            banner.onmouseout = function(){
                timer = setInterval(function(){
                    index++;
                    if(index>=len){
                        index=0;
                    }//注意因为index表示的是图片的标号，最大为4！！
                    //有了index就可以进行轮播了，可是我们没有执行图片变化的番薯
                    //设置一个，在全局作用域中。
                    changImg();
                },3000);
            }
            banner.onmouseout();//这样子直接运行function，可以不用在鼠标移出才进行，进入页面同时就开始轮播
            //接下来我们开始数字下标绑定图片移动；
            //再写一个划出继续启动定时器
            */
            
