import { combineReducers, createStore } from 'redux'
import BaiTapDatVeReducer from './reducer/BaiTapDatVeReducer';

const rootReducer = combineReducers({
    //các state dự án sẽ được khai báo tại đây
    BaiTapDatVeReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());