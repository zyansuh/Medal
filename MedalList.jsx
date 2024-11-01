import React from 'react';
import MedalItem from './MedalItem.jsx';

function MedalList({ medals, onDeleteMedal, onEditMedal }) {
  const sortedMedals = [...medals].sort((a, b) => b.gold - a.gold);

  return (
    <div style={styles.list}>
      {sortedMedals.map((medal, index) => (
        <MedalItem key={index} medal={medal} onDelete={() => onDeleteMedal(medal.country)} onEdit={() => onEditMedal(medal)} />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px'
  }
};

export default MedalList;
