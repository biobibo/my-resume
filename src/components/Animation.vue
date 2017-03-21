<template>
  <div class="animation">
    <left-animation :code="nowStyle" ref="leftAnimation"></left-animation>
    <right-animation ref="rightAnimation" :markdown="nowMarkdown" :enableHtml="enableHtml"></right-animation>
  </div>
</template>

<script>
  import LeftAnimation from  './LeftAnimaton.vue'
  import RightAnimation from './RightAnimation.vue'
  export default{
    components:{
      'left-animation':LeftAnimation,
      'right-animation':RightAnimation
    },
    data(){
      return{
        interval:50,  //打印间隔时间
        enableHtml:false,//右边的markdown简历是否显示
        //将要添加到屏幕的style
        nowStyle:'',
        //写好的style
        allStyle:[
          `
/*
*您好，我是雷淞
*我想应聘贵公司的前端开发工程师
*这是我的简历
*/

/*首先给元素们加上一些动画，看起来不那么呆板*/
*{
transition:all 0.2s ease;
}

/*看起来太单调了，首先来点背景*/
.animation-right{
    background-color:#3F5263;
}

.left-animation{
    border:solid 0.0625rem #fff;
    width:37rem;
    height:40.625rem;
    background-color:#303030;
    color:#AB72CC;
    font-size:1.25rem;
}
/*让代码独立的在中间起舞*/
.left-animation{
    padding-left:3rem;
    overflow:auto;
}

/*让代码色彩缤纷起来*/
.token.selector{ color: #C48B15; }
.token.property{ color: #7DD42F; }
.token.punctuation{ color: #627197; }
.token.function{ color:#63D3E8; }
.token.comment{color:#777262; }

/*让我们侧个身，敬个礼*/
html{
perspective:10000px;
}
.left-animation{
    transform-3d:preserve-3d;
    transform:rotateY(40deg) translateY(1.5rem);

}

/*再加个阴影，让他飘逸起来*/
.left-animation{
    box-shadow:0.1875rem 0.1875rem 0.3125rem black;
}
/*摸着他的时候，他会发光喔*/
.left-animation:hover{
    box-shadow:0 0 3rem 0.5rem rgba(255,255,255,0.4);
}

/*右边会出现一个编辑器，我的简历就在里面*/
.right-animation{
    position:fixed;
    top:1.5625rem;
    right:2rem;
    border:0.0625rem solid #fff;
    width:40.4375rem;
    height:40.625rem;
    background-color:#303030;

}

/*让我的编辑器也立体起来*/
.right-animation{
    transform:rotateY(-40deg) translate(1.5rem)
}

/*摸着他也会闪闪发亮*/
.right-animation:hover{
    box-shadow:0 0 3rem 0.5rem rgba(255,255,255,0.4);
}

/*好了，我要开始写我的简历了*/


`,
      `
/*建立看起来不对劲，这些符号是什么鬼
 *这是 markdown 的符号，应该让他看起来更舒适
 *用工具译成 HTML 的就行
 */
`,
          `
/*给简历加点效果，毕竟这是看脸的社会*/
.right-animation{
    box-sizing:border-box;
    padding-left:2rem;
    color:#fff;
    box-shadow:0.1875rem 0.1875rem 0.3125rem black;
}

.right-animation h2{
    display:inline-block;
    margin:2rem 0 1rem 0;
    border-bottom:0.0625rem solid;
}

.right-animation ul>li:before{
    content:'•';
    margin-right:0.5rem;
}

.right-animation ol{
    counter-reset:sub;
}

.right-animation ol li:before{
    counter-increment:sub;
    content:counters(sub,"") ".";
    margin-right:0.5rem;
}
`],






        nowMarkdown:'', //要添加的markdown简历
        //写好的markdown简历
        allMarkdown:`
## 雷 淞

web前端开发工程师，一年工作经验

技能
----

* HTML、CSS、JS
* Node.js
* Vue
* Webpack
* HTML5、CSS3

项目经验
----
1. 第一个项目
2. 第二个项目
3. 第三个项目
4. 第四个项目


`,
      }
    },
    created(){
      this.makeMyResume()
    },

    //用async/await、Promise函数进行异步操作
    methods:{
      //按续执行异步函数
      makeMyResume:async function(){
        await this.showLeftCssCode(0);
        await this.showRightResume();
        await this.showLeftCssCode(1);
        await this.showMarkdownResume();
        await this.showLeftCssCode(2)
      },
      //是否展示右边markdown简历
      showMarkdownResume(){
        return new Promise((resolve,reject)=>{
          this.enableHtml = true;
          resolve()
        })
      },
      //展示左边代码打印
      showLeftCssCode(n){
        return new Promise((resolve,reject)=>{
          let interval = this.interval; //获取间隔时间

          let printStyle=(async function () {
            let style = this.allStyle[n];
            if (!style) { return false }//有样式代码，才继续执行
            //计算前n个字符的总数
            let length=this.allStyle.filter((_,index)=>index <= n).map((item)=>item.length).reduce((p,c)=>p+c,0);
            //在markdown简历之前已经打印出来的字符数
            let prefixLength=length - style.length;
                //判断当前打印出来的字符数比需打印的字符数小，则继续打印
            if (this.nowStyle.length < length){
              let len=this.nowStyle.length - prefixLength;
              //逐个添加字符串
              let char = style.substring(len,len+1) || ' ';
              this.nowStyle+= char;
                //上个字符是换行，则使left-animation距顶部很大，以使滚动条始终在最底部；$nextTick()会使DOM下次更新之后调用回调
              if (style.substring(len-1,len) === '\n' && this.$refs.leftAnimation){
                this.$nextTick(() => {
                  this.$refs.leftAnimation.goToBottom()
                })
              }
              setTimeout(printStyle,interval)
            }else {
              resolve()
            }
          }).bind(this);//绑定this指向当前上下文
          printStyle();  //调用printStyle
        })
      },
      showRightResume(){
        return new Promise((resolve,reject)=>{
          let length=this.allMarkdown.length;
          let interval= this.interval;
          let printResume=()=>{
            if (this.nowMarkdown.length < length){
            this.nowMarkdown=this.allMarkdown.substring(0,this.nowMarkdown.length+1);
            //判断最后打印的如是换行，则执行goToBottom函数，滚动到最底部
            let nowChar=this.nowMarkdown[this.nowMarkdown.length-2];
            console.log(nowChar)
              if (nowChar === '\n' && this.$refs.rightAnimation){
              this.$nextTick(()=>{
                this.$refs.rightAnimation.goToBottom();
              })
              }
              setTimeout(printResume,interval)
            }else {
              resolve()
            }
          };
          printResume()
        })
      }
    }
  }
</script>

<style scoped>
  .animation{
    width:100%;
    height:100%;
  }
</style>
