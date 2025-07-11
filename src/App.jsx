// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   );
// };

// export default App;



import React from 'react';
import UrlForm from './components/UrlForm';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '550px' }}>
      <UrlForm />
    </div>
  );
}

export default App;
