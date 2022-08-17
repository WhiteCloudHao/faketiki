
import { Route, Routes } from "react-router";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import BuyProduct from "./component/BuyProduct/BuyProduct";



function App() {

 


  return (
    <div className="App">
      
      <Routes>
        <Route path= "/*" element = { <BuyProduct />} />
        <Route path = "signUP" element = { <SignUp />} />
        <Route path = "signIn" element = { <SignIn />} />
       
      </Routes>
    </div>
  );
}

export default App;
