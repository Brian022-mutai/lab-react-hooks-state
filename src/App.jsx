import React, { useState } from 'react'

export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Banana', category: 'Fruits' },
  { id: 3, name: 'Carrot', category: 'Vegetables' },
  { id: 4, name: 'Milk', category: 'Dairy' }
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const filteredProducts =
    category === 'All'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Shopping App</h1>

      
     <button onClick={toggleDarkMode}>
  {darkMode ? 'Toggle Light' : 'Toggle Dark'}
</button>

      
      <div>
        <label>Filter by Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <p>{product.name}</p>

              <button
                data-testid={`product-${product.id}`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      
      <div>
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} is in your cart
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App