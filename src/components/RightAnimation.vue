<template>
  <div class="right-animation" ref="rightCon">
    <div v-if="enableHtml" v-html="showMyResume"></div>
    <pre v-else>{{showMyResume}}</pre>
  </div>
</template>

<script>
  import  marked from 'marked'
  export default{
    props:['markdown','enableHtml'],
    name:'RightAnimation',
    computed:{
      showMyResume(){
        return this.enableHtml? marked(this.markdown):this.markdown;
      }
    },
    methods:{
      goToBottom:function () {
        this.$refs.rightCon.scrollTop=999999;
      }
    }
  }
</script>

<style scoped>

</style>
