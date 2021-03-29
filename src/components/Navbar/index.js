import React from 'react'

export default function Navbar() {
  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>Ta<span style={styles.span}>sk</span></h1>
    </div>
  )
}


const styles = {
  container: {
      height: '10vh'
  },
  logo: {
    paddingLeft: '3.5rem',
    paddingTop: '0.5rem',
    fontSize: '4rem',
    fontWeight: 'bolder',
    color: "#50d8af"
  },  
  span: {
    color: "#0c2e8a"
  }
}