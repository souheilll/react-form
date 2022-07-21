import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/Formulaire";
import image from './2.png';
import React from 'react';

const firstName = prompt('type your name');


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Sidebar />
      <SignIn />
      <img src={image} alt='im' style={{ width: '100px', marginLeft: '700px', marginTop: '20px' }}></img>

      <React.Fragment>
        <p>{firstName || 'Anonymos'} </p>
        {console.log(firstName)}
        <p style={{ marginLeft: 700 }}>it looks like you {firstName ? 'have' : 'you dont have'}  <b>a name</b> </p>

        {!firstName && (
          <form>
            <p style={{ marginLeft: 700 }}> type your name here :</p>
            <input style={{ marginLeft: 700 }} type='text'></input>
          </form>
        )}


      </React.Fragment>

    </div>


  );

}

export default App;
