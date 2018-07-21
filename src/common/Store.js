import { createStore } from "redux";
import reducer from '../features/First/redux/reducers';

const store = createStore(reducer);

store.subscribe(() => {
        console.log("Update Store : ",store.getState());
    }
);

export default store;