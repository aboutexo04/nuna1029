import React,{useEffect,useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';    
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList]=useState([]);
    const getProducts= async ()=>{
        const isLocalHost = typeof window !== 'undefined' && window.location.hostname === 'localhost'
        const url = isLocalHost ? "http://localhost:3000/products" : "/products.json"
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
      <Container style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <Row>
            {productList.map((menu, index)=><Col key={index} lg={3}><ProductCard item={menu}/></Col>)}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
