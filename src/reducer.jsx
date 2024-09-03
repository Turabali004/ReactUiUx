
const reducer = (state, action) => {
    console.log(state)
    console.log(action);
    
    switch (action.type) {
      case "HOME_UPDATE":
        return {
          ...state,
          title: action.payload.title,
          content: action.payload.content,
          homeImg: action.payload.homeImg
        };
      case "ABOUT_UPDATE":
        return {
          ...state,
          title: action.payload.title,
          content: action.payload.content,
          aboutImg: action.payload.aboutImg,
        };
      case "SERVICE_UPDATE":
        return {
          ...state,
          title: action.payload.title,
          content: action.payload.content,
          serviceImg: action.payload.serviceImg,
        };
      case "WEBDEV_UPDATE":
        return {
          ...state,
          title: action.payload.title,
          content: action.payload.content,
          webDevImg: action.payload.webDevImg,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  