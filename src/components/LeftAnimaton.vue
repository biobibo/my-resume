<template>
  <div class="left-animation" ref="leftCon">
    <div class="myCode" v-html="showStyle"></div>
    <pre v-html="highlightCode"></pre>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  export default{
    name:'leftAnimation',
    props:['code'],
    computed:{
      //使得代码高亮 Prism插件
      highlightCode:function () {
        return Prism.highlight(this.code,Prism.languages.css)
      },
      //插入打印代码
      showStyle:function () {
        return `<style>${this.code}</style>`
      }
    },
    methods:{
      goToBottom() {
        this.$refs.leftCon.scrollTop=999999;
      }
    }
  }
</script>

<style scoped>

</style>
