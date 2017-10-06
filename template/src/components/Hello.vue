<template lang="pug">
  div.hello
    h1(:style="'color:' + color1") {{ msg }}
    h2 {{point}}
    <div>
      <el-button @click="offsetPoint(-100)">Default</el-button>
      <el-button type="primary" @click="offsetPoint(1)">Primary</el-button>
      <el-button type="success" @click="offsetPoint(2)">Success</el-button>
      <el-button type="info" @click="offsetPoint(3)">Info</el-button>
      <el-button type="warning" @click="offsetPoint(10)">Warning</el-button>
      <el-button type="danger" @click="onDanger">Danger</el-button>
    </div>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <div class="block">
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js Vuex Pug Element-UI Stylus テンプレート'
    }
  },
  computed: {
    ...mapState(['point']),
    ...mapGetters(['foobaa']),
    color1: {
        get () {
          return this.$store.state.color1
        },
        set (value) {
          this.updateState({'color1':value})
        }
    },
  },
  methods:{
    ...mapActions(['offsetPoint']),
    ...mapMutations(['updateState']),
    onDanger() {
      for(var i = 0; i < 10; i++ ) {
        setTimeout( () => {
          this.$message('This is a message.');
          this.$notify.info({
            title: 'Info',
            message: 'This is an info message'
          })
        }, 100 * i)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
ul
  list-style-type: none
  padding: 0

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983
</style>
