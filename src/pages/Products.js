import React, {useEffect,useState } from 'react'
import axios from 'axios'
import '../styles/pages/Products.css'

import iphone11 from '../media/product-item5.jpg'

export const Products = () => {
    const [products, setproducts] = useState([]);

    useEffect(()=> {
        const fetchProducts = async() =>{
            try{
                const response = await axios.get(
                    'http://localhost:8000/api/products/'
                )
                setproducts(response.data);
            } catch (error) {
                console.log('Error fetching products:', error)
            }
        };
        fetchProducts()
    },[]);
  return (
    <>

    <section className='f-section'>
        <div className='header'>
          <div className='headerContent'>
            <h1 className='header '>Shop</h1>
          </div>
        </div>

    </section>


    <div className='products pt-5'>

    <div className='container'>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                {/* <a href='#' className='button'> Add to cart</a> */}
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase mb-5'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                {/* <a href='#' className='button'> Add to cart</a> */}
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase mb-5'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                {/* <a href='#' className='button'> Add to cart</a> */}
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase mb-5'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                {/* <a href='#' className='button'> Add to cart</a> */}
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase mb-5'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                {/* <a href='#' className='button'> Add to cart</a> */}
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-5'>
                  <h3 className='card-title text-uppercase mb-5 '>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                {/* <a href='#' className='button'> Add to cart</a> */}
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase mb-5'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
            </div>
      </div>
    
    
      
    </>
  )
}
