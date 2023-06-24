import './App.css';
import React from 'react';
import MenuKontak from './page/MenuKontak';
import MenuProduct from './page/MenuProduct';
import MenuTentangKami from './page/MenuTentangkami';
import MenuUtama from './page/MenuUtama';

function Header(){
  return(
    <div>
      <h2>Ini Halaman Utama Header</h2>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <h2>Ini Halaman Untuk Footer</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
      
    </div>
  );
}

export default App;
