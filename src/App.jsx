import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Booking from './components/Booking/Booking';
import ARPreview from './components/ARPreview/ARPreview';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { usePWAInstall } from './hooks/usePWAInstall';
import './App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isInstallable, install } = usePWAInstall();

  // Handle loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 second loading screen

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Services />
            <Booking />
            <ARPreview />
            <Testimonials />
          </main>
          <Footer />

          {/* PWA Install Prompt */}
          {isInstallable && (
            <button 
              className="install-btn"
              onClick={install}
              aria-label="Install app"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Install App
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;