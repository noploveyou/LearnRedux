const initialState={
    result : 15000,
    value : []
};

const employeeReducer = (state=initialState, action) => {
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
            state={
                /*result: state.result-=action.payload,
                value: state.value*/
                ...state,
                result: state.result-=action.payload,
                value: [...state.value,action.payload]
            };
            break;

        default:
    }
    return state;
};

export default employeeReducer;
