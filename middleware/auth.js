export default async function({ store, redirect, route}) {
    let auth = sessionStorage.getItem('auth');
    auth = JSON.parse(auth);
    if(auth == null && route.path !=='/'){  
        //auth 정보가 없고 top page가 아닌 경우에 interruptor 실행
        console.log(route.path);      
        return redirect('/');
    } else if(auth != null){
        store.dispatch('setAuth', auth);
    }
    
}