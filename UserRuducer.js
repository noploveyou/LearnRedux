const userReducer = (state={name: 'Nop',age: 15},action) => {
    switch (action.type){
        case "setName" : {
            state = {
                ...state,
                name: action.payload
            }
        }
            break;

        case "setAge" : {
            state = {
                ...state,
                age: action.payload
            }
        }
            break;

        default:
    }
    return state;
};

export default userReducer;
