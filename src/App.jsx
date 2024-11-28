import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Footer from './components/Footer';
import PageRoutes from './utilities/PageRoutes';
import ScrollToTop from './utilities/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out', // Easing for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 transition-all duration-300">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <PageRoutes />
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;