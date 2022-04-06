import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import {useSelector} from "react-redux";
import AddUser from "./Componets/User/AddUser";
import ListUser from "./Componets/User/ListUser";
import EditUser from "./Componets/User/EditUser";
import Header from "./Componets/Header/Header";

function App() {

  const {isLogged} = useSelector((state)=>state);
  const localData = localStorage.getItem("token");
  return (
    <div className="container">
      {!isLogged ? <Header /> : ""}
      <h2>This is crud app</h2>
      {/* {!isLogged ? <Login /> : ""} */}
  
      <Routes>
        <Route path="/" element={<Login /> }/>
        <Route path="/list" element={<ListUser />}/>
        <Route path="/create" element={<AddUser />}/>
        <Route path="/edit/:id" element={<EditUser />}/>
      </Routes>
    
    </div>
  );
}

export default App;
