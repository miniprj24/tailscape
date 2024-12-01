import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageRoutes from './utilities/PageRoutes';
import ScrollToTop from './utilities/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const Layout = ({ children }) => {
    const location = useLocation();
    const isAuthRoute = location.pathname.startsWith('/auth');

    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 transition-all duration-300">
        <ScrollToTop />
        {!isAuthRoute && <Header />}
        <main className="flex-grow">{children}</main>
        {!isAuthRoute && <Footer />}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <PageRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
