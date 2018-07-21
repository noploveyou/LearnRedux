import initialState from './initalState';

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

        case "CREATE" :
            state={
                ...state
            };
            break;

        default:

    }
    return state;
};

export default reducer;