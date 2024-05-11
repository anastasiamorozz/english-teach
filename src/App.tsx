import { useContext, useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import Header from "./components/Header/Header";
import './styles/global.css';
import Footer from "./components/Footer/Footer";

function App() {
  const {store} = useContext(Context);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])

  return (
    <div className="App">
      <Header></Header>
      {/* <LoginForm></LoginForm>

      <h1>{store.isAuth ? 'User exist' : 'User not found'}</h1>
      <RegistrationForm></RegistrationForm> */}
      <Footer></Footer>
    </div>
  );
}

export default observer(App);
