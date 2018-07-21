import { createStore } from "redux";

const initialState={
    result : 15000,
    value : []
};

const reducer = (state=initialState,action) => {
    switch (action.type){
        case "ADD" :
            /*state+=action.payload;*/
            state={
                /*result: state.result+=action.payload,
                value: state.value*/
                ...state,
                result: state.result+=action.payload,
                value: [...state.value,action.payload]
            };
            break;

        case "SUBTRACT" :
            /*state-=action.payload;*/
            break;

        default:
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
        console.log("Update Store : ",store.getState());
    }
);

store.dispatch({
    type: 'ADD',
    payload : 100
});
store.dispatch({
    type: 'ADD',
    payload : 200
});
/*
store.dispatch({
    type: 'SUBTRACT',
    payload : 20
});*/