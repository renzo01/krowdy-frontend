import React from 'react';
import Navbar from './components/Navbar/index';
import Login from './components/Login/index';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login titleForm="Ingrese su numero de celular:"
        placeholderForm='Ingrese solo números de Perú' />
    </div>
  );
}

export default App;
