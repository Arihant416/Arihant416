import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need for BrowserRouter import here
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import './index.css'; // or './App.css'

function App() {
	return (
		<div className='bg-gray-900/80 backdrop-blur-md border-b border-gray-700 min-h-screen text-white'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
