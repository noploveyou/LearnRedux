import store from '../../../common/Store';


    Add = () => {
        store.dispatch({type: 'ADD', payload : 100});
    };

