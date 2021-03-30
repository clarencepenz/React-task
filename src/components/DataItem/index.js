import React from 'react';

export default function DataItem({name, clicked, onClick, rest}) {
  return (
    <div
      {...rest}
      style={{
        backgroundColor: clicked ? 'green' : 'yellow',
        color: clicked ? '#fff' : '#000',
        margin: '2rem',
        padding: '4rem',
        width: '300px',
        borderColor: '#555',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <h3 style={styles.text}>{name}</h3>
    </div>
  );
}

const styles = {
  text: {
    textAlign: 'center',
    margin: '0',
  },
};
