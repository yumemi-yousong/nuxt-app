<template>
<div>
  <v-textarea solo class="listcard" v-model="item.text" @focus="setShowdeleteFlag(true)" @blur="setShowdeleteFlag(false)" @change="update"></v-textarea>
    <v-btn v-if="showdelteFlag" @click="remove" class="button"><v-icon>clear</v-icon></v-btn>
    <!-- v-show랑 비교해보기 !-->
</div>
  
</template>

<script>

export default {
  components: {
      
  },
  props: {
      item :{
          type: Object,
          default: () => {}
      },
      index:{
          type: Number
      }
  },
  data() {
     return {
         showdelteFlag: false,
         text: this.item 
     };
  },
  computed: {
    
  },
  methods: {
    setShowdeleteFlag(state) {
        if(state){
            this.showdelteFlag = true;
        }else{//셋타임아웃 하지않으면 지워지지 않는다 
            setTimeout(() => {
                this.showdelteFlag = false;
            }, 500);
        }
    },
    update(){
        this.$emit('update');
    },
    remove(){
        this.$emit('remove', this.index);
        this.update();
    }

  }
}
</script>

<style scoped>
.listcard {
    margin: 10px;
}
.button{
    z-index: 1;
}
</style>