// Shows what createStore redux does under the hood

const { createStore } = Redux;


const counter  = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT';
        return state + 1;
        case 'DECREMENT';
        return state - 1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
    let state;

    const getState = () => state;

    // Call reducer with current action being disatched
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    // everytime there's a change push a new listener into the array
    //unsubscribe a listener- return a function from the subscribe method that removes the listener from the array
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter( l => l !== listener);
        };
    };

    return { getState, dispatch, subscribe };

};

dispatch({});


const store = createStore(counter);

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT'});
});