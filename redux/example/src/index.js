import { createStore } from 'redux';

function counter(state = 0, action){
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'SUB':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(() =>{
  console.log(store.getState())
  document.querySelector("#counter").innerHTML = store.getState();
});



store.dispatch({ type: 'ADD' });

store.dispatch({ type: 'ADD' });

store.dispatch({ type: 'SUB' })

document.querySelector("#add").addEventListener('click',(e)=>{
    store.dispatch({ type: 'ADD' });
})

document.querySelector("#sub").addEventListener('click',(e)=>{
    store.dispatch({ type: 'SUB' });
})