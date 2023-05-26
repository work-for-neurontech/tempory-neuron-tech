import "./App.css";
import Feature from "./components/feature/Feature";
import Gettouch from "./components/gettouch/Gettouch";
import Header from "./components/main-header/Header";
import Navbar from "./components/navbar/Navbar";
import Process from "./components/process/Process";
import Services from "./components/services/Services";
import Contacts from "./components/contact/Contacts";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div className="home-section">
        <Navbar />
        <Header />
      </div>
      <Services />
      <Gettouch />
      <Feature />
      <Process />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
