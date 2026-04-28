import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
