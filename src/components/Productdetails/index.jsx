import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetail({handleAddToCart}) {
  const location = useLocation()
    const {product} =location.state || {}
  return (
    <section className="p-6 max-w-3xl mx-auto border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-gray-800">{product.prdName}</h2>
      <div className="flex">
        <img src={product.prdImage} alt={product.prd} className="w-80 h-80 object-cover shadow-md py-5"/> 
        <div className="">
          <p className="text-xl font-semibold text-gray-800">Giá: {product.price} VNĐ </p>
          <p className='text-lg text-gray-600'>Mô tả: {product.description}</p>
          <div className='text-end mt-20'>
          <button onClick={() => { handleAddToCart(product) }} className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all:duration-500'>Thêm vào giỏ hàng</button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
