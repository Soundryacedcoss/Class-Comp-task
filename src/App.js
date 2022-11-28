// import logo from './logo.svg';
import "./App.css";
import "./App2";
import App2 from "./App2";
import "./MobileOs";
import MobileOs from "./MobileOs";
import "./MobileManufacturers";
import MobileManufacturers from "./MobileManufacturers";
import { Task3_comp1 } from "./Task3_comp1";
import { Task3_comp2 } from "./Task3_comp2";
import { Task3_comp3 } from "./Task3_comp3";
import { Navbar } from "./Task5/Navbar";
import { Profile } from "./Task5/Profile";
import { Trands } from "./Task5/Trands";
import Componant1 from "./Task6/Componant1";
import Compoannt2 from "./Task6/Compoannt2";
import Componant4 from "./Task6/Componant4";

function App() {
  return (
    <div>
      <b>
        Task 1 and TASK 2<br />
        <h2>
          Q1. a. Make a class component as a child of App.js and print Hello
          world!. Try using named and default exports.
        </h2>
        <h2> Q 2 Do the same using arrow functions.</h2>
      </b>
      <App2 />
      <hr></hr>
      <b>
        Task 3<br />
        <h2>
          Q2. Print the following data with two components MobileOS and
          MobileManufacturers using class components.
        </h2>
      </b>
      <p>
        <b>Mobile Os</b>
      </p>
      <MobileOs />
      <p>
        <b>MobileManufactures List</b>
      </p>
      <MobileManufacturers />
      <hr/><hr/>
      <h2>Here new task is started : design the template task 3</h2>
      <div className="main">
        {<Task3_comp1/>}
        {<Task3_comp2/>}
         {<Task3_comp3/>}
      </div>
      <hr></hr>
      <b>Task 5<br/><h2>Q5. Make the component structure as given in the attachment.</h2></b>
      <hr></hr>
     <div>
      <Navbar/>
      <br></br>
      <div className="main_div">
        <div className="section_04">
        <Profile/>
        <br></br>
        <Trands/>
        </div>
        <div className="feed">Feed</div>
        <div className="follow">Why to follow</div>

      </div>
      </div>
      <b>Task 6<br/><h2>Q3. Make the following component structure using class components.</h2></b>
      <div className="main_06">react App
       <Componant1/>
        <div className="div_section_04">
          <Compoannt2/>
          <Componant4/>
        </div>
      </div>
    </div>
  );
}

export default App;
