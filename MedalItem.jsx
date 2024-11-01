import React from 'react';

function MedalItem({ medal, onDelete, onEdit }) {
  return (
    <div style={styles.item}>
      <h3>{medal.country}</h3>
      <p>금메달: {medal.gold}</p>
      <p>은메달: {medal.silver}</p>
      <p>동메달: {medal.bronze}</p>
      <button onClick={onEdit}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

const styles = {
  item: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff'
  }
};

export default MedalItem;
