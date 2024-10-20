import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header({cartItems}) {
  const navigate = useNavigate()
    return (
    <section className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <button onClick={() => { navigate('/')}} className="text-2xl font-bold text-gray-800">MyStore </button>
        <Link to='/cart' className="text-lg text-blue-600 hover:text-blue-800">
            GIỏ hàng {cartItems.length}
        </Link>
    </section>
  )
}
