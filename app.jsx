import React, { useState } from 'react';
import MedalForm from './MedalForm';
import MedalList from './MedalList';
import './app.css';

function App() {
  const [medals, setMedals] = useState([]);

  // 메달 추가 기능
  const addMedal = (newMedal) => {
    setMedals((prevMedals) => [...prevMedals, newMedal]);
  };

  // 메달 업데이트 기능
  const updateMedal = (updatedMedal) => {
    setMedals((prevMedals) =>
      prevMedals.map((medal) =>
        medal.country === updatedMedal.country ? updatedMedal : medal
      )
    );
  };

  // 메달 삭제 기능
  const deleteMedal = (country) => {
    setMedals((prevMedals) => prevMedals.filter((medal) => medal.country !== country));
  };

  return (
    <div style={styles.container}>
      <h1>메달 집계</h1>
      <MedalForm onAddMedal={addMedal} onUpdateMedal={updateMedal} />
      <MedalList medals={medals} onDeleteMedal={deleteMedal} onEditMedal={updateMedal} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  }
};

export default App;
