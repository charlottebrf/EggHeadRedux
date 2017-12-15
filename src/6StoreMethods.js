// es6 version of the function - gives state a default value
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT';
            return state + 1;
        case 'DECREMENT';
            return state -1;
        default:
            return state;
    }
}

// Let's you dispatch actions- when it's created also need to define the reducer
// es6 version of getting the store
const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();



//This is what is extracted into Render methods

// store.subscribe(() => {
//     document.body.innerText = store.getState();
// });
//
// document.addEventListener('click', () => {
//     store.dispatch({ type: 'INCREMENT'})
// });
// 3 core methods:
// 1.get stateNode
// 2. dispatch store
// 3.Subscribe to get notifications of when state changes 

// This is basically what subscribe does
// console.log(store.getState());
// store.dispatch({type : 'INCREMENT'});
// console.log(store.getState());


// es5 import
// var createStore = Redux.createStore;

// Import if you're using es6
// import { createStore } from 'Redux';