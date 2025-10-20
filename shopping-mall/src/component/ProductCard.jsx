import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item?.id}`)
  }
  return (
    <div className='card product-card' onClick={showDetail} style={{ margin: '20px 0', width: '100%', overflow: 'visible' }}>
      <img 
        src={item?.img} 
        className={'product-image'}
        style={{ width: '100%', height: 'auto', objectFit: 'cover', cursor: 'pointer' }}
      />
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
