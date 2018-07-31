import userReducer from './UserRuducer';
import employeeReducer from './employeeReducer';

const rootReducer = {
    emp: employeeReducer,
    user: userReducer
};

export default rootReducer;