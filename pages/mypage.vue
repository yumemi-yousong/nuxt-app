<template>
<div>
  <h1>mypage</h1>
  <h1 class="top-level">{{auth.userName}}のTo-Do-list</h1>
  <div class="todolistArray">
    <!-- listName list-name!-->
    <TodoList list-name="to do list" v-bind:list="copiedList.todo" @update="updateTodoList" />
    <!-- v-bind하지 않으면 안된다. 
      !-->
    <TodoList list-name="work in progress" :list="copiedList.wip" @update="updateTodoList" />
    <TodoList list-name="completed" :list="copiedList.done" @update="updateTodoList" />

  </div>
</div>
  
</template>
  
<script>
import { mapState } from 'vuex';
import TodoList from '~/components/TodoList';
import Clonedeep from 'lodash.clonedeep';
import firebase from '~/utiles/firebase';

export default {
  components: {
    TodoList
  },
  props: {
     
  },
  data() {
     return {
       copiedList: {}
     };

  },
  computed: {
    ...mapState(['auth','todoList'])
    //변경이 있을만한 데이터를 여기에 넣어서 변화시키는거, 그냥 메소드랑 다른점은 재계산을 매번 안해도된다는거(캐쉬에 저장되기떄문에) 
    //예)
  },
  methods: {
    updateTodoList(){
       this.$store.dispatch('updateTodoList', Clonedeep(this.copiedList));
    }
  },
  beforeMount() {
    this.copiedList = Clonedeep(this.todoList);
  },
  //시간이 걸리니까 async를 넣어준다 //async data는 데이터에 들어간다
  async fetch({store}) {
    const val = await firebase.app().functions('asia-northeast1').httpsCallable('getData')();//어떤 에이피아이를 쓸지를 httpsCallable뒤에
      if(val.data){
         store.dispatch('updateTodoList', val.data);//액션명임 (업데이트두리스트는)
      }else{//새로 초기화면엔 아무 값이 없으니까 당연히 설정해놔야 널에러가 나온다 
         val.data = {
            done: [],
            wip: [],
            todo: []
         }
         store.dispatch('updateTodoList', val.data);
      }
  }
}
//promise 예제
new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve(1);
  }, 2000);
}).then(function(result){
  console.log(result);
  return result + 10;
}).then(function(result){
  console.log(result);
  return result + 20; 
}).then(function(result){
  console.log(result);
});

</script>

<style scoped>
.todolistArray {
  display: flex;
}

</style>