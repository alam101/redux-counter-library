import store from "./Store.js";
const unsubscribe = store.subscribe(()=>{
    console.log("subscribe:-",store.getState());
});
// store.dispatch(addTask({task:'task 1'}));
// store.dispatch(addTask({task:'task 2'}));

store.dispatch({type:'SHOW_ERROR',payload:{error:'user not found'}});