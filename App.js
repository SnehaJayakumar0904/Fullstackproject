import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NAVBAR from "./layout/NAVBAR"; 
import Home from "./pages/Home";
import "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import Adduser from "./user/Adduser";
import Updateuser from "./user/Updateuser";
import Viewuser from "./user/Viewuser";
function App() {
  return (
<div className="App">
  <div></div>
<Router>
<NAVBAR />
<Routes>
<Route exact path="/" element={<HomePage />} />
<Route exact path="/Home" element={<Home />} />
<Route exact path="/Adduser" element={<Adduser />} />
<Route exact path="/Updateuser" element={<Updateuser />} />
<Route exact path="/Viewuser" element={<Viewuser />} />
</Routes>
</Router>
</div>
);
  }
export default App;