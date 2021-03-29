import React, {useEffect, useState} from 'react';
import {data} from '../../payload';
export default function Admin() {
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPayload(data.admin);
    setLoading(true);
    
  }, [loading]);

  const adminColor = (id) => {
    setPayload((ps) => {
      const color = ps.map((color) => {
        if (color._id === id) {
          setLoading(false);
          color.clicked = !color.clicked;
        }
        return color;
      });
      return color;
    });
  };

  const adminItem = payload.map((i) => (
    <div
      key={i._id}
      style={{
        backgroundColor: i.clicked ? 'green' : 'yellow',
        color: i.clicked ? '#fff' : '#000',
        margin: '2rem',
        padding: '4rem',
        width: '300px',
        borderColor: '#555',
        cursor: 'pointer',
      }}
      onClick={() => adminColor(i._id)}
    >
      <h3 style={styles.text}>{i.name}</h3>
    </div>
  ));

  return <div>{adminItem}</div>;
}

const styles = {
  text: {
    textAlign: 'center',
    margin: '0',
  },
};
