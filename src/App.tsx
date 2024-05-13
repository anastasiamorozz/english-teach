import { useContext, useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import './styles/global.css';
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const {store} = useContext(Context);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])

  return (
    <div className="App">
      {/* <LoginForm></LoginForm>

      <h1>{store.isAuth ? 'User exist' : 'User not found'}</h1>
      <RegistrationForm></RegistrationForm> */}
      <LoginPage></LoginPage>
    </div>
  );
}

export default observer(App);
