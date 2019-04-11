<template>
<div class="loginBox">
  <h1 class="title">Please Login</h1>
  <span>please sign in with your account</span>
  <v-btn color="yellow" fab @click="eventHandler">login</v-btn>
</div>
  
</template>
  
<script>
import firebase from '~/utiles/firebase';// ==> ../utiles/firebase is comparable directory
export default {
  components: {
    
  },
  props: {
     
  },
  data() {
     return {

     };
  },
  computed: {
    
  },
  methods: {
    eventHandler(){
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        //result 전에 function을 적으면 안된다.
        console.log(result);
          this.$router.push('/mypage');
          this.$toasted.success('hoges');
          this.$store.dispatch('setAuth', {uid: result.user.uid, userName: result.user.displayName});
          //window 안에 있는 sessionStorage, 문자열을 저장할 수 있게 json.stringify(devTools 확인)
          sessionStorage.auth = JSON.stringify({uid: result.user.uid, userName: result.user.displayName});
          console.log(result);

      });
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 30px;
}
.loginBox{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>