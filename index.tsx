
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Research from './src/pages/Research';
import Events from './src/pages/Events';
import Contact from './src/pages/Contact';
import LeadershipProfile from './src/pages/LeadershipProfile';
import PublicationDetail from './src/pages/PublicationDetail';
import OrderForm from './src/pages/OrderForm';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="research" element={<Research />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="leadership/:name" element={<LeadershipProfile />} />
          <Route path="research/publications/:id" element={<PublicationDetail />} />
          <Route path="research/publications/:id/order" element={<OrderForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
