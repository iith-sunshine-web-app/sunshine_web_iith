import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App(){
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <Navbar />

      <main className="flex-grow">
        {/* The router replaces this Outlet with the current tab page based on the URL. */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
