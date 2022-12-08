import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PetDetail from "./Components/Functionality/Details/PetDetail";
import ServiceDetail from "./Components/Functionality/Details/ServiceDetail";
import Profile from "./Components/Functionality/Details/UserDetail";
import VetDetail from "./Components/Functionality/Details/VetDetail";
import FormHistoryPet from "./Components/Functionality/Forms/HistoryPet";
import Login from "./Components/Functionality/Forms/Login";
import FormPet from "./Components/Functionality/Forms/Pet";
import FormUser from "./Components/Functionality/Forms/User";
import FormVet from "./Components/Functionality/Forms/Vet";
import NavBar from "./Components/Functionality/Navbar/index";

import Payment from "./Components/Functionality/Payment";
import ErrorPay from "./Components/Functionality/Payment/ErrorPay";

import AdminServiceDetail from "./Components/Functionality/PanelAdmin/AllServices/AdminServiceDetail";
import PanelAdmin from "./Components/Functionality/PanelAdmin/Body/PanelAdmin";
import AdminProfileDetail from "./Components/Functionality/PanelAdmin/Users/Detail";

import ChooseVetTurn from "./Components/Functionality/Turns/ChooseVetTurn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./Components/View/HomeFake/HomeFake";
import { getMyUser } from "./Redux/actions";
<<<<<<< HEAD
import AdminVetDetail from "./Components/Functionality/PanelAdmin/VetInformation/VetDetail";

=======
import Confirm from "./Components/Functionality/AuthService";
>>>>>>> 0a0acf6bbd83dd8225c8c6e1c81471af9e4f422c

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyUser());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vet/:id" element={<VetDetail />} />
        <Route path="/pet/:id" element={<PetDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/service/:servId/turn" element={<ChooseVetTurn />} />
        <Route exact path="/reguser" element={<FormUser />} />
        <Route exact path="/formdescrip" element={<FormHistoryPet />} />
        <Route exact path="/pet/register" element={<FormPet />} />
        <Route exact path="/vet/register" element={<FormVet />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mp" element={<Payment />} />
        <Route exact path="/errorPay" element={<ErrorPay />} />
        <Route path="/user/:id" element={<AdminProfileDetail />} />
<<<<<<< HEAD
        <Route path="/serv/:id" element={<AdminServiceDetail/>}/>
        <Route path="/adminvet/:id" element={<AdminVetDetail/>} />
        <Route path="/admin/*" element={<PanelAdmin/>}/>

=======
        <Route path="/serv/:id" element={<AdminServiceDetail />} />
        <Route path="/admin/*" element={<PanelAdmin />} />
        <Route path="/confirm/:confirmationCode" element={<Confirm />} />
>>>>>>> 0a0acf6bbd83dd8225c8c6e1c81471af9e4f422c
      </Routes>
    </div>
  );
}

export default App;
