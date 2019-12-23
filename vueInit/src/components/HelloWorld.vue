<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{this.$store.state.count}}</h2>
    <h2>{{this.$store.getters.computedCount}}</h2>
    <button @click="incCount">Add+1</button>
    <ul>
      <li v-for="(item,index) in list" :key='index'>
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../vuex/store.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list:[]
    };
  },
  store,
  methods: {
    incCount() {
      this.$store.commit("incCount"); // 触发mutations里面的方法
      this.$store.dispatch("incMutationsCount"); // 触发actions中的方法
    },
    requestData() {
      //请求数据
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      this.$http.get(api).then(
        response => {
          

          //注意this指向

          this.list = response.body.result;
          console.log(this.list);

          //数据放在store里面

          this.$store.commit("addList", response.body.result);
        },
        function(err) {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    this.requestData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
