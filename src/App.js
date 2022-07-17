import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/Formulaire";

function App() {
  return (
    <div lassName="App">
      <CustomNavbar />
      <Sidebar />
      <SignIn />
    </div>
  );
}

export default App;
