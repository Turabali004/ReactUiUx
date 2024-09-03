import { createContext, useContext, useReducer } from "react";
import serviceImg from ".././src/assets/pictures/Rectangle 37.png"
import aboutImg from ".././src/assets/pictures/Rectangle 38.png"
import homeImg from "../src/assets/pictures/Rectangle 39.png"
import webDevImg from "../src/assets/pictures/Rectangle 41.png"
import reducer from "./reducer";


// Create Context
const AppContext = createContext();

// Initial State
const initialState = {
  title: "",
  content: "",
};

// Provider Component
function CreateContextData({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  // console.log(dispatch);
  

  const updateHomePage = () => {
    dispatch({
      type: "HOME_UPDATE",
      payload: {
        title: "Empowering Your Business with IT Innovation",
        content: `We specialize in delivering cutting-edge IT services tailored to meet the unique needs of 
businesses across industries. Our expert team is dedicated to providing comprehensive 
solutions that drive efficiency, enhance security, and foster innovation`,
        homeImg:homeImg,
      },
    });
  };

  const updateAboutPage = () => {
    dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        title: "OUR STORY",
        content: "Lorem ipsum dolor sit amet consectetur. Leo id bibendum aliquam eget",
        aboutImg : aboutImg, 
      },
    });
  };
  const updateWebDevPage = () => {
    dispatch({
      type: "WEBDEV_UPDATE",
      payload: {
        title: "WEBDEVELOPMENT",
        content: "Delivering cutting-edge digital solutions tailored to your business needs",
        webDevImg:webDevImg,
      },
    });
  };
  const updateServicePage = () => {
    dispatch({
      type: "SERVICE_UPDATE",
      payload: {
        title: "OUR SERVICES",
        content: "Delivering cutting-edge digital solutions tailored to your business needs",
        serviceImg: serviceImg,
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, updateWebDevPage, updateServicePage }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook to use the context
const useDataGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, useDataGlobal, CreateContextData };
