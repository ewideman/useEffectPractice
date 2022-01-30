import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [windowWidth, SetWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //on every render 
  useEffect(() => {
    console.log("I re-rendered"); 
  }); //No brakets for every use effect
  
// on first render/mount only! - componentDidMount Alternative
  useEffect(() => {
  console.log('the component Mounted')
  }, []); 

//on first render/whenever the dependacy changes 
  useEffect(() => {
    console.log('name changed')
  }, [name]);

  //clean up code before running
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };

  }, []);
}

export default App;
