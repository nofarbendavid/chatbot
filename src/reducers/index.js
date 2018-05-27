import {combineReducers} from 'redux';
import chatbotReducer    from './chatbotReducer';


const chatbotApp = combineReducers({
  chatbotReducer: chatbotReducer
});

export default chatbotApp;