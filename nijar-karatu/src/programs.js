import { useState, useEffect } from "react";
import './App.css';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from './firebase-config'

function Programs() {
    const [programs, setPrograms] = useState([]);

    const [curriculum, setCurriculum] = useState([]);
    const [classSize, setClassSize] = useState(0);
    const [duration, setDuration] = useState(0);
    const [name, setName] = useState("");
    const [offeredTracks, setOfferedTracks] = useState([]);
  
    const ProgramsCollectionRef = collection(db, "programs");
  
    const createPrograms = async () => {
      await addDoc(ProgramsCollectionRef,
        {
          curriculum: curriculum,
          location: classSize,
          duration: duration,
          name: name,
          offeredTracks: offeredTracks
        })
    };
  
    useEffect(() => {
  
      const getPrograms = async () => {
        const data = await getDocs(ProgramsCollectionRef);
        setPrograms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }

      getPrograms();
    }, [])
  
    return (
      
      <div className="App">
        <h1>Programs component</h1>
        <input
          placeholder="Curriculum..."
          onChange={(event) => {
            setCurriculum(event.target.value);
          }} />
        <input
          placeholder="Class size..."
          onChange={(event) => {
            setClassSize(event.target.value);
          }} />
        <input
          placeholder="Duration..."
          onChange={(event) => {
            setDuration(event.target.value);
          }} />
        <input
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }} />
        <input
          placeholder="Offered Tracks..."
          onChange={(event) => {
            setOfferedTracks(event.target.value);
          }} />
        
        <button onClick={createPrograms}>Add New Programs</button>
        {programs.map((programs) => {
          return (
            <div>
              {" "}
              <h1>Curriculum: {programs.curriculum}</h1>
              <h1>Average Class Size: {programs.class_size}</h1>
              <h1>Program Duration: {programs.duration}</h1>
              <h1>Program Name: {programs.name}</h1>
              <h1>Offered Tracks: {programs.offered_tracks}</h1>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Programs;