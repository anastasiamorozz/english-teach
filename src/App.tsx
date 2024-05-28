import { useContext, useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import './styles/global.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  const {store} = useContext(Context);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])

  return (<>
    <Outlet></Outlet>
  </>);
}

export default observer(App);
