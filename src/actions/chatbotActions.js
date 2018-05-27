export const setUserinput = (userInput) => {
  return {
    type: 'SET_USER_INPUT',
    userInput
  }
}



export const getUsernameFromLocalStorage = () => {
  return {
    type: 'GET_USERNAME_FROM_LOCAL_STORAGE'
  }
}



export const setUsernameToLocalStorage = (username) => {
  return {
    type: 'SET_USERNAME_TO_LOCAL_STORAGE',
    username
  }
}