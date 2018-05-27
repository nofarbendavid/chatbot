import React, {Component}   from 'react';
import InputContainer       from './components/inputContainer/inputContainer';
import ChatContainer        from './components/chatContainer/chatContainer';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ChatbotActions  from './actions/chatbotActions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatContainer data={this.props.chatData} actions={this.props.chatbotActions}/>
        <InputContainer data={this.props.chatData} actions={this.props.chatbotActions}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const chatData = state.chatbotReducer;
  return {
    chatData
  };
};


const mapDispatchToProps = (dispatch) => ({
  chatbotActions: bindActionCreators(ChatbotActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
