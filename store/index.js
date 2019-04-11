import Vuex from 'vuex'
import firebase from '~/utiles/firebase'
const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         auth: {}
         ,todoList:{
             
         }
      }),
      mutations: {//mutation에서는 state를 다시 정의하는 곳이니까 파라미터로 state를 정의하지않으면 안된다. 
         setAuth(state, payload){
             state.auth = {
                 uid: payload.uid,
                 userName: payload.userName
             }
         },
         updateTodoList(state, payload){
            state.todoList = payload;
         }
      },
      actions: {
         setAuth(store, payload){
            store.commit('setAuth',payload);
             
         },
         async updateTodoList(store, payload){
            store.commit('updateTodoList', payload);
            await firebase.app().functions('asia-northeast1').httpsCallable('setData')(payload);
         }
      }
   })
}

export default createStore;