import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./homepage/contact/Contacts";
import Login from "./pages/home/Main";

import HomeMain from "./homepage/HomeMain";
import AboutUs from "./aboutus/AboutUs";
import Services from "./services/Services";

import { ToastContainer } from "react-toastify";
import AddBlog from "./addblog/AddBlog";
import Blog from "./blog/Blog";
import Events from "./events/Events";
import AddEvents from "./events/addEvents";
import AddRegister from "./registeration/AddRegister";
import EventTable from "./registeration/EventTable";
import AdminDashboard from "./dashboard/AdminDashboard";
import Startup from "./startup/Startup";
import AdminMain from "./pages/adminhome/AdminMain";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/adminlogin" element={<AdminMain />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/add-events" element={<AddEvents />} />
          <Route path="/add-register" element={<AddRegister />} />
          <Route path="/register" element={<EventTable />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/s" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
