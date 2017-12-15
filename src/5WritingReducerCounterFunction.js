
// es5 version of the function
function counter(state, action) {
  if (action.type === 'INCREMENT') {
      return state + 1;
  } else if (action.type === 'DECREMENT') {
      return state - 1;
  } else {
      return state;
  }
}

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


expect(
    counter(0, { type: 'INCREMENT'})
).toEqual(1);

expect(
    counter(1, { type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, { type: 'DECREMENT'})
).toEqual(1);

expect(
    counter(0, { type: 'DECREMENT'})
).toEqual(0);

// Handling unknown actions
expect(
    counter(1, { type: 'SOMETHING_ELSE'})
).toEqual(1);

console.log('Tests passed!');