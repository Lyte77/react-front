import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import {  faMedal  } from '@fortawesome/free-solid-svg-icons'
import {  faTag  } from '@fortawesome/free-solid-svg-icons'
import {  faShield  } from '@fortawesome/free-solid-svg-icons'
import '../styles/pages/Home.css'

import bannerImage from '../media/banner-image.png'
import iphone11 from '../media/product-item5.jpg'
import watch from '../media/product-item7.jpg'
import saleImage from '../media/single-image1.png'
import Image12 from '../media/post-item1.jpg'
import Image13 from '../media/post-item2.jpg'
import Image14 from '../media/post-item3.jpg'
import Image1 from '../media/insta-item1.jpg'
import Image2 from '../media/insta-item2.jpg'
import Image3 from '../media/insta-item3.jpg'
import Image4 from '../media/insta-item4.jpg'
import Image5 from '../media/insta-item5.jpg'
import Image6 from '../media/dhl.png'
import Image7 from '../media/shippingcard.png'
import Image8 from '../media/visa.jpg'
import Image9 from '../media/mastercard.jpg'
import Image10 from '../media/paypal.jpg'


export const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true,
      };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        swipeToSlide:true,
        responsive:[
          {
            breakpoint:768,
            settings:{
              slidesToShow:2
            }
          }
        ]
      };
  return (
    <>
    <section id='billboard' className='position-relative 
    overflow-hidden bg-light-blue'>
        <Slider {...settings}>
        <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className=" text display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className=" col-md-5">
                  <div className="image-holder">
                    <img src={ bannerImage } alt="banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>

      <div className="swiper-slide sm-5" >
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center ">
                <div className="col-md-6">
                  <div className="banner-content ">
                    <h1 className="display-2 text-uppercase   ">Our product are The best</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase bg-dark-transparent">Shop Product</a>
                 
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder ">
                    <img src={ bannerImage } alt="banner" />
                  </div>
            
                </div>
              </div>
            </div>
          </div>
      
        
        </Slider>


    </section>

<section id="company-services" className="padding-large pt-5" >
<div className="container">
    <div className="row">
        <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">
                        Free delivery
                    </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                         Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                <FontAwesomeIcon icon={faMedal} />
                </div>
                <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">
                        Quality Gurantee
                    </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                         Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                <FontAwesomeIcon icon={faTag} />
                </div>
                <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">
                        Daily Offers
                    </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                         Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                <FontAwesomeIcon icon={faShield} />
                </div>
                <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">
                        100%Secure payment
                    </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                         Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                </div>
            </div>
        </div>

    </div>
</div>


</section>

{/*  Mobile Product section */}

<section id='mobile-products' className='product-store position-relative
padding-large no-padding'>
  <div className='container'>
    <div className='row'>
      <div className='display-header d-flex justify-content-between pb-3'>
        <h2 className='display-7 text-dark text-uppercase'>Mobile Products</h2>
        {/* <div className='btn-right'>
          <a href='#' className='btn btn-medium btn-normal text-uppercase'>Go to shop</a>
        </div> */}
      </div>
        <Slider {...settings2}>
          <div className='swiper-slide'>
            <div className='container'>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid'/>
                </div>
                <a href='#' className='button'> Add to cart</a>
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
            </div>
          </div>

          <div className='swiper-slide'>
            <div className='container'>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item'  className='img-fluid' />
                  <a href='#' className='button'> Add to cart</a>
                </div>
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
            </div>
          </div>

          <div className='swiper-slide'>
            <div className='container'>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item' className='img-fluid' />
                  <a href='#' className='button'> Add to cart</a>
                </div>
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
            </div>
          </div>

          <div className='swiper-slide'>
            <div className='container'>
              <div className='product-card position-relative'>
                <div className='image-holder'>
                  <img  src={ iphone11 } alt='product-item' className='img-fluid' />
                  <a href='#' className='button'> Add to cart</a>
                </div>
                <div className='card-detail d-flex justify-content-between
                align-items-baseline pt-3'>
                  <h3 className='card-title text-uppercase'>
                    <a href='#'>Iphone 10</a>
                  </h3>
                  <span className='item-price text-primary'>$970</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
    </div>
  </div>



</section>

{/* Watshes seection */}

<section className='product-store padding-large position-relative pt-5'>
  <div className='container'>
    <div className='row'>
      <div className='display-header d-flex justify-content-between pb-4'>
        <h2 className='display-7 text-dark text-uppercase mt-5'>Smart Watches</h2>
        {/* <div className='btn-right'>
          <a href='#' className='btn btn-mrdium btn-normal text-uppercase'>Go to Shop</a>
        </div> */}
      </div>
      <Slider {...settings2}>
        <div className='swiper-wrapper'>
          <div className='container'>
            <div className='product-card position-relative'>
              <div className='image-holder'>
                <img  src={ watch } alt='product-item' className='img-fluid'/>
                <a href='#' className='button'> Add to cart</a>
              </div>
              <div className='card-detail d-flex justify-content-between
              align-items-baseline pt-3'></div>
            </div>
          </div>
        </div>
        <div className='swiper-wrapper'>
          <div className='container'>
            <div className='product-card position-relative'>
              <div className='image-holder'>
                <img  src={ watch } alt='product-item' className='img-fluid'/>
                <a href='#' className='button'> Add to cart</a>
              </div>
            </div>
          </div>
        </div>

        <div className='swiper-wrapper'>
          <div className='container'>
            <div className='product-card position-relative'>
              <div className='image-holder'>
                <img  src={ watch } alt='product-item' className='img-fluid'/>
                <a href='#' className='button'> Add to cart</a>
              </div>
            </div>
          </div>
        </div>

        <div className='swiper-wrapper'>
          <div className='container'>
            <div className='product-card position-relative'>
              <div className='image-holder'>
                <img  src={ watch } alt='product-item' className='img-fluid'/>
                <a href='#' className='button'> Add to cart</a>
              </div>
            </div>
          </div>
        </div>

        <div className='swiper-wrapper'>
          <div className='container'>
            <div className='product-card position-relative'>
              <div className='image-holder'>
                <img  src={ watch } alt='product-item' className='img-fluid'/>
                <a href='#' className='button'> Add to cart</a>
              </div>
            </div>
          </div>
        </div>

      </Slider>

    </div>
  </div>
</section>

{/* yearly sale */}
  
<section id="yearly-sale" className="bg-light-blue
        overflow-hidden mt-5 padding-xlarge pt-5">
           <div className="row d-flex flex-wrap
           align-items-center">
            <div className="col-md-6 col-sm-12">
                <div className="text-content offset-4 padding-medium">
                    <h3>10% off</h3>
                    <h2 className="display pb-5 text-uppercase
                    text-dark">New year sale</h2>
                    {/* <a href="#" className="btn2 btn btn-primary">Shop</a> */}
                </div>
                    <img src={ saleImage } className='img-fluid' />
            </div>
            <div className="col-md-6 col-sm-12"></div>
           </div>
        </section>

        {/* Blog section */}

        <section className=" blog-section padding-large pt-5">
            <div className="container">
                <div className="row">
                    <div className="display-header
                    d-flex justify-content-between pb-3">
                        <h2 className="display-7 text-dark
                        text-uppercase">Latest Posts</h2>
                        <div className="btn-right">
                            <a href="#" className="btn btn-medium btn-normal
                            text-uppercase">Read Blog</a>
                        </div>
                    </div>
                    <div className="post-grid d-flex flex-wrap 
                    justify-content-between">
                        <div className="col-lg-4 col-sm-12 pt-4">
                            <div className="card border-none me-3 ">
                                <div className="card-image">
                                    <img src={Image12} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-uppercase">
                                <div className="card-meta text-muted">
                                    <span className="meta-date">January 8, 2024</span>
                                    <span className="meta-category">- Gadgets</span>
                                </div>
                                <h3 className="card-title">
                                    <a href="#"> Get some cool gadgets in 2024</a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pt-4">
                            <div className="card border-none me-3">
                                <div className="card-image">
                                    <img src={Image13} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-uppercase">
                                <div className="card-meta texr-muted">
                                    <span className="meta-date">January 9, 2024</span>
                                    <span className="meta-categorey">Technology</span>
                                </div>
                                <h3 className="card-title">
                                    <a href="#"> Technology Hack You Wont Get</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 pt-4">
                            <div className="card border-none me-3">
                                <div className="card-image">
                                    <img src={Image14} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-uppercase">
                                <div className="card-meta texr-muted">
                                    <span className="meta-date">January 9, 2024</span>
                                    <span className="meta-categorey">Technology</span>
                                </div>
                                <h3 className="card-title">
                                    <a href="#"> Technology Hack You Wont Get</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* Testimonals section */}

        
        <section id="testimonials" className="position-relative pt-5">
            <div className="container">
                <div className="row">
                    <div className="review-content position-relative">
                        <Slider {...settings}>
                            <div className="swiper-slide text-center
                            d-flex justify-content-center">
                                <div className="review-item
                                col-md-10">
                                    <blockquote>
                                        "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi."
                                    </blockquote>
                                    <div className="rating"></div>
                                    <div className="author-detail">
                                        <div className="name text-dark
                                        text-uppercase pt-2">
                                            John Doe
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide text-center
                            d-flex justify-content-center">
                                <div className="review-item
                                col-md-10">
                                    <blockquote>
    .                                   "A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content."
                                    </blockquote>
                                    <div className="rating"></div>
                                    <div className="author-detail">
                                        <div className="name text-dark
                                        text-uppercase pt-2">
                                            Chris Will
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </section>

        {/* Subscriber form */}

        
        <section id="subscribe" className="container-grid
        padding-large position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="subscribe-content bg-dark
                    d-flex flex-wrap justify-content-center
                    align-items-center padding-medium">
                        <div className="col-md-6 col-sm-12">
                            <div className="display-header pe-3">
                                <h2 className="display-7
                                text-uppercase text-light">
                                    Subscribe To Us Now
                                </h2>
                                <p className="text-light">Get latest news, updates and deals directly mailed to
                                    your inbox
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <form className="subscribtion-form validate">
                                <div className="input-group flex-wrap">
                                    <input className="form-control btn-rounded-none"
                                    type="email" name="EMAIL" placeholder="Your email address here"
                                    required="" />
                                    <button className="sub-btn  btn-medium btn-primary text-uppercase 
                                    btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        {/* instagram section */}
        <section id="ínstagram" className="padding-large overflow-hidden
        no-padding-top ">
            <div className="container">
                <div className="row">
                    <div className="display-header text-uppercase
                    text-dark text-center pb-3">
                        <h2 className="display-7 mt-5"> Shop Our Insta</h2>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image1} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>
                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image2} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>

                        </figure>
                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image3} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>

                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image4} alt="instagram" 
                                className="insta-image "/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>

                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image5} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>
                    </div>
                </div>
            </div>

        </section>

        {/* extra links */}

        <div id="footer-bottom" className='pt-5'>
            <div className="container">
                <div className="row d-flex flex-wrap
                justify-content-between">
                    <div className="col-md-4 col-sm-6">
                        <div className="Shipping d-flex">
                            <p>We ship with</p>
                            <div className="card-wrap ps-2">
                                <img src={Image6} alt="visa" />
                                <img  src={Image7} alt="mastercard" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="payment-method d-flex">
                            <p>Payment options:</p>
                            <div className="card-wrap ps-2">
                                <img src={Image8} alt="visa"/>
                                <img src={Image9}  alt="mastercard"/>
                                <img src={Image10} alt="paypal"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-sm-6">
                        <div className="copyright">
                            <p>Copyright 2024 Ministore. Design by LiteCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

