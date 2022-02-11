import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AllUsers from "./Components/AllUsers";
import AddUsers from "./Components/AddUsers";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/all-users" element={<AllUsers />} />
        <Route exact path="/add-users" element={<AddUsers />} />
        <Route exact path="/edit-user/:id" element={<EditUser />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
