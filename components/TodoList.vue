<template>
<div class="list">
  <v-sheet color="#80CBC4">
    <h2>{{listName}}</h2>
      <Draggable  :list="list" group="all">
      	<TodoCard v-for="(el, index) in list" :item="el" :key="index" :index="index" @remove="remove" @update="update" />
      </Draggable>
    <v-btn fab small @click="add"><v-icon>alarm_add</v-icon></v-btn>
  </v-sheet>
</div>
  
</template>
  
<script>
import TodoCard from '~/components/TodoCard'
import Draggable from 'vuedraggable'
export default {
  components: {
    TodoCard
    ,Draggable   
  },
  props: {
    //배열을 넣고 싶은 경우( Array) 무조건
    // list: {type: Array, default: ()=>[]} 이렇게 저장해야합니다.
    //object경우에는 
    // list: {type: Array, default: ()=>{}} 이렇게 저장해야합니다.
    list:{
      type: Array,
      default: () => []
    },
     listName: {
       type: String,//number, array, object
       default: 'UNDEFINED'
     }
  },
  data() {
     return {

     };
  },
  computed: {
    
  },
  methods: {
    remove(index){
      console.log(index);
      this.list.splice(index, 1);
    },
    update(){
      this.$emit('update');
    },
    add(){
      this.list.push({text: ''});
      this.update();
    }
  }
}
</script>

<style scoped>
.list{
  width: 270px;
  margin: 10px;
}
</style>