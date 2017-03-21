<template>
  <div class="base-info">
    <div class="infos">
      <p class="person-info">个人信息</p>
      <div class="info-lists">
        <ul class="lists">
          <li class="list" v-for="info in myInfo">
            <span>{{info.item}}</span>
            <span>{{info.detail}}</span>
          </li>
        </ul>
      </div>
      <div class="my-word">
        {{myWord}}
      </div>
    </div>
    <div class="name-fe">
      <div class="name"></div>
      <div class="fe"></div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
     return {
       myInfo:[
         {item:'出生日期:',detail:'1992年11月3日'},
         {item:'教育经历:',detail:'武汉科技大学'},
         {item:'学历专业:',detail:'本科/冶金'},
         {item:'意向职位:',detail:'web前端开发工程师'},
         {item:'目标城市:',detail:'成都'},
         {item:'联系电话:',detail:'18723323620'},
       ],
       myWord:'人活一世，则要有一技在身，才能立足社会。当我大学毕业之时，面对茫茫社会，即遗憾大学之所学，又苦无赚钱之能。为报父母恩，为立社会中，同时也为心中之理想，寻找一技之能。遍寻良久，发现前端实乃宝库，智慧无穷，前景无限。余身无多余钱粮，又听众说培训班之荒唐，则一边自学一边劳作。前端真是浩瀚博深。纸上得来终觉浅，只有在工作中亲历亲为，方能掌握前端之技。我欲寻一公司，竭尽所能为其而作。'


     }
    }
  }
</script>

<style lang="scss" scoped>
  .base-info{
    width:70.625rem;
    height:41.25rem;
    background: url("../../static/img/img1.jpg") center center/100% no-repeat;
    .infos{
      width:36.875rem ;
      height:auto;
      text-align: left;
      margin-left: 4rem;
      p{
        font-size: 1.75rem;
        width:7.1875rem;
        padding-top: 2rem;
      }
      .info-lists{
        width:100%;
        height:auto;
        .lists{
          width:100%;
          height:auto;
          &:nth-child(1){
            margin-top: 2rem;
           }
          .list{
            margin-top:1rem;
            font-size:1.2rem;
            span:nth-child(2){
              display: inline-block;
              margin-left: 1rem;
             }
          }
        }
      }
      .my-word{
        margin-top: 4rem;
        /*background-color: dodgerblue;*/
        width:50rem;
        height:10rem;
        font-size: 1rem;
        color: #cccccc;
      }
    }
    .name-fe{
      width:100%;
      height:auto;
      position:relative;
      .name{
        background: url("../../static/img/name.png") -1% 100%/300% no-repeat;
        width:20rem;
        height:6.25rem;
        position: absolute;
        top:-1.5rem;
        left:7rem;
        transform:rotateZ(-3deg);
      }
      .fe{
        @extend .name;
        background: url("../../static/img/FE.png") -1% 100%/300% no-repeat;
        left: 20rem;
      }
    }
  }
</style>
