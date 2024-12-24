import React from "react"
import './App.css';
import Home from "./home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Description from "./Descriptions/Description"
import Builder from "./Builder/Builder"
import Enhance from "./Enhance/Enhance"
import Template from "./Template/Template"
import Summary from "./Summary/Summary"
import Guidance from "./Guidance/Guidance"
import Signup from './components/Signup';
import Signin from './components/Signin';
//simport Home from './home/Home';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          {/*Responsible for the authentication routes*/ }
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />

          {/*Routes related to the dashboard in our application*/}
          <Route path="/" element={<Home />} />
          <Route path="Description" element={<Description />}/>
          <Route path="Builder" element={<Builder/>}/>
          <Route path="Enhance" element={<Enhance/>}/>
          <Route path="Template" element={<Template/>}/>
          <Route path="Summary" element={<Summary/>}/>
          <Route path="Guidance" element={<Guidance/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App