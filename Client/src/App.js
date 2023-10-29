import "./App.css";
import logo from "./assets/Logo.png";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About_us from "./Components/About_us";
import Collections from "./Components/Collections";
import Collections_Card from "./Components/Collections_Card";
import Blog from "./Components/Blog";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./Components/BlogDetail";

function App() {
  return (
    <div className="App">
      {/* navigation */}
      <Navbar />
      {/*hero*/}
      <Hero />
      {/*about us*/}
      <About_us />

      {/* Collections */}
      <Collections />
      {/* {blog card} */}
      <Blog />
      {/*Faq*/}
      <Faq />
      {/* Contact us */}
      <Contact />
      {/* footer */}
      <Footer />
      <Routes>
        <Route path="/blogs/:id" element={<BlogDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
