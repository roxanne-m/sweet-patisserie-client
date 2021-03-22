import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { UserProvider } from './contexts/UserContext';
import { DashboardProvider } from './contexts/DashboardContext';
import Footer from '../src/components/Footer/Footer';
import './index.css';

const routing = (
  <div className='page-container'>
    <div className='content-wrap'>
      <BrowserRouter>
        <UserProvider>
          <DashboardProvider>
            <App />
          </DashboardProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

ReactDOM.render(routing, document.getElementById('root'));
