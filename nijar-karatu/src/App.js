import { useState, useEffect } from "react";
import './App.css';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from './firebase-config'
import Schools from "./schools";
import Programs from "./programs";

function App() {

  return(
    <div className="App">
      <Schools />
      <Programs />
    </div>
  );
}

export default App;