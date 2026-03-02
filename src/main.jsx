
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Products from './pages/Products'
import Quotation from './pages/Quotation'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

function App(){
  return (
    <BrowserRouter>
      <Nav />
      <main className="py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/quotation" element={<Quotation/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
      <footer className="border-t mt-10 bg-brand-gray-50">
        <div className="section py-6 text-sm text-brand-gray-500">© {new Date().getFullYear()} Tamil Solid Blocks</div>
      </footer>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
