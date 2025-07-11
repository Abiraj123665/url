// 📁 src/pages/Home.jsx
import React from 'react';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '500px',
      }}>
       
        <UrlForm />
        <UrlList />
      </div>
    </div>
  );
};

export default Home;
