import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Footer from './components/Footer';
import PageRoutes from './utilities/pageRoutes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-300">
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
