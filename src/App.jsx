import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App(){
  return (
    <div>
      <Navbar />

      <main className="mainContent">
        {/*  */}
        <p>*    Space for main content     *</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
