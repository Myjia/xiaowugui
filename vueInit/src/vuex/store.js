import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    count:1,
    list:[]
}


var mutations = {
    incCount(){
        ++state.count;
    },
    addList(state,data){
        state.list = data;
    }
}


// 计算属性 改变state 的数据 会触发getters 里面的的方法 获取新的值
var getters = {
    computedCount(state){
        return state.count*2
    }
} 

var actions = {
    incMutationsCount (context){
        context.commit('incCount')
    }
}



const store  = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
export default store
