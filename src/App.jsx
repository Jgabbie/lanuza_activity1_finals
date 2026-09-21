import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import TopNav from './components/TopNav'
import CheckoutPage from './pages/CheckoutPage'


function App() {

  const [cartItems, setCartItems] = useState([])
  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <BrowserRouter>
      <TopNav cartCount={cartCount} />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path='/cart'
          element={
            <CartPage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path='/checkout'
          element={
            <CheckoutPage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
