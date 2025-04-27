import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import AddStudent from "./Pages/AddStudent";
import AddBus from "./Pages/AddBus";
import AddDriver from "./Pages/AddDriver";
import AdminHome from "./Pages/AdminHome";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import ViewDriver from "./Components/ViewDriver";
import ParentLogin from "./Pages/ParentLogin";
import ParentHome from './Pages/ParentHome';
import Complaint from './Pages/Complaint';
import ViewComplaints from './Components/ViewComplaints';
import ViewDetail from "./Components/ViewDetail";
import ViewLocation from "./Components/ViewLocation";
import LiveLocation from "./Components/LiveLocation";
import Driver from './Components/Driver';
import UpdateLocation from "./Pages/UpdateLocation";
import ViewBus from "./Components/ViewBus";
function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addStudents/:id" element={<AddStudent/>}/>
          <Route path="/addBus" element={<AddBus />} />
          <Route path="/addDriver/:id" element={<AddDriver />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/viewDriver" element={<ViewDriver />} />
          <Route path="/parentLogin" element={<ParentLogin/>}/>
          <Route path="/parentHome" element={<ParentHome/>} />
          <Route path="/complaint" element={<Complaint/>} />
          <Route path="/viewComplaints" element={<ViewComplaints/>}/>
          <Route path="/viewDetais" element={<ViewDetail/>} />
          <Route path="/viewLocation" element={<ViewLocation/>} />
          <Route path="/liveLocation/:id" element={<LiveLocation/>}/>
          <Route path="/driver" element={<Driver/>} />
          <Route path="/updateLocation/:id" element={<UpdateLocation/>} />
          <Route path="/viewBus" element={<ViewBus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
