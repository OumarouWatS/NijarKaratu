import { useState, useEffect } from "react";
import './App.css';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from './firebase-config'

function Schools() {
    const [schools, setSchools] = useState([]);
  
    const [newName, setNewName] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newAccRate, setNewAccRate] = useState("");
    const [newGradRate, setNewGradRate] = useState(0);
    const [newAvgCost, setNewAvgCost] = useState(0);
    const [newGenRatio, setNewGenRatio] = useState("");
    const [newOfferCS, setNewOfferCS] = useState("");
    const [newSpecialExam, setNewSpecialExam] = useState("");
    const [newHasLab, setNewHasLab] = useState("");
    const [newLogo, setNewLogo] = useState("");
  
    const schoolsCollectionRef = collection(db, "schools");
  
    const createSchool = async () => {
      await addDoc(schoolsCollectionRef,
        {
          name: newName,
          location: newLocation,
          acceptance_rate: newAccRate,
          graduation_rate: newGradRate,
          average_cost: newAvgCost,
          girls_to_boys_ratio: newGenRatio,
          offers_cs: newOfferCS,
          special_exam: newSpecialExam,
          has_laboratory: newHasLab,
          logo: newLogo
        })
    };
  
    useEffect(() => {
  
      const getSchools = async () => {
        const data = await getDocs(schoolsCollectionRef);
        setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
  
      getSchools();
    }, [])
  
    return (
      
      <div className="App">
        <h1>Most updated code connected to most shared repository.</h1>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }} />
        <input
          placeholder="Location..."
          onChange={(event) => {
            setNewLocation(event.target.value);
          }} />
        <input
          placeholder="Acceptance Rate..."
          onChange={(event) => {
            setNewAccRate(event.target.value);
          }} />
        <input
          placeholder="Graduation Rate..."
          onChange={(event) => {
            setNewGradRate(event.target.value);
          }} />
        <input
          placeholder="Average Cost..."
          onChange={(event) => {
            setNewAvgCost(event.target.value);
          }} />
        <input
          placeholder="Girl/Boys Ratio..."
          onChange={(event) => {
            setNewGenRatio(event.target.value);
          }} />
        <input
          placeholder="Offers CS..."
          onChange={(event) => {
            setNewOfferCS(event.target.value);
          }} />
        <input
          placeholder="Requires Special Exam..."
          onChange={(event) => {
            setNewSpecialExam(event.target.value);
          }} />
        <input
          placeholder="Has Laboratory..."
          onChange={(event) => {
            setNewHasLab(event.target.value);
          }} />
        <input
          placeholder="Logo..."
          onChange={(event) => {
            setNewLogo(event.target.value);
          }} />
        <button onClick={createSchool}>Add New School</button>
        {schools.map((school) => {
          return (
            <div>
              {" "}
              <h1>Name: {school.name}</h1>
              <h1>Location: {school.location}</h1>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Schools;