import * as ChatFlows from '../config/chatFlows';
import {ENTITY_NAME}  from '../config/constants';

const initialState = {
  username: null,
  chatList: []
};

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_USERNAME_TO_LOCAL_STORAGE': {
      let updatedState = Object.assign({}, state);
      localStorage.setItem("username", JSON.stringify(action.username));
      let username = action.username;
      updatedState.username = username;
      updatedState.chatList.push(buildUserMessage(username));
      updatedState.chatList.push(buildMayaMessage(ChatFlows.afterUserEnterNameFlow, username));
      return updatedState;
    }

    case 'GET_USERNAME_FROM_LOCAL_STORAGE': {
      let updatedState = Object.assign({}, state);
      let localStorageUsername = localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : null;
      if(localStorageUsername){//refresh flow
        updatedState.username = localStorageUsername;
        updatedState.chatList.push( buildMayaMessage(ChatFlows.refreshFlow, localStorageUsername));
      }else{ //newUserFlow
        updatedState.chatList.push(buildMayaMessage(ChatFlows.newUserFlow, null));
      }
      return updatedState;
    }

    case 'SET_USER_INPUT': {
      let updatedState = Object.assign({}, state);
      let userMathExpression = action.userInput;
      updatedState.chatList.push(buildUserMessage(userMathExpression));
      let result = null;

      try{
        result = eval(userMathExpression);
      }catch(err) {
        result = NaN;
      }

      updatedState.chatList.push(buildMayaMessage(ChatFlows.result, result));
      return updatedState;
    }

    default:
      return state;
  }
};

export default chatbotReducer;



const buildUserMessage = (userInputText) => {
  return {
    entityName: ENTITY_NAME.USER,
    text: [userInputText]
  }
};


const buildMayaMessage = (messagesArr, additionalValue) => {

  let messages = messagesArr.map(msg => {
    return {
      id: msg.id,
      value: msg.needAdditionalData ? additionalValue : null
    }
  })

  return {
    entityName: ENTITY_NAME.MAYA,
    text: messages
  }
};