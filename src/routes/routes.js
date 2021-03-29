import React from 'react';
import Admin from '../components/Admin';
import Main from '../components/Main';

export default function Routes() {
  const [role, setRole] = React.useState('');

  const handleChange = (e) => {
    const {id, value} = e.target;
    setRole({[id]: value});
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '20px',
        backgroundColor:
          role.admin === 'Admin'
            ? '#f4f4f4'
            : role.main === 'Main'
            ? '#c4c4c4'
            : '#fff',
      }}
    >
      <div style={styles.container}>
        <label style={styles.label}>Admin</label>
        <input
          type="radio"
          id="admin"
          name="admin"
          value={'Admin'}
          onChange={handleChange}
          style={styles.radio}
          checked={role.admin === 'Admin'}
        />
        <label style={styles.label}>Main</label>
        <input
          type="radio"
          id="main"
          name="main"
          value={'Main'}
          onChange={handleChange}
          style={styles.radio}
          checked={role.main === 'Main'}
        />
      </div>
      <div style={styles.grid}>
        {role.admin === 'Admin' ? (
          <Admin />
        ) : role.main === 'Main' ? (
          <Main />
        ) : (
          <div>Choose an option</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  label: {
    fontSize: '30px',
    padding: '0 10px',
    fontWeight: '600',
  },
  radio: {
    height: '30px',
    width: '30px',
    paddingTop: '30px',
  },
  container: {
    height: '10%',
    alignSelf: 'center',
  },
  grid: {
    alignSelf: 'center',
  },
};
