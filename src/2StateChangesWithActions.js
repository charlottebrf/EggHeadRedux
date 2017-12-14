import React, from 'react';

function StateChangesWithActionsIncrement() {
    return {
        index: 1,
        text: "Increment the button on the frontend";
        type: "INCREMENT";
};
}

function StateChangesWithActionsDecrement() {
    return {
        index: 2,
        text: "Decrement the button on the frontend";
        type: "DECREMENT";
};
}

export default {StateChangesWithActionsIncrement: StateChangesWithActionsIncrement};
export default {StateChangesWithActionsDecrement: StateChangesWithActionsDecrement};