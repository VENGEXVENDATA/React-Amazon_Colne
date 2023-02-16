import React from 'react'
import './Home.css'
import Product from './Product.js'
function Home() {
  return (
    <div className='home'>
      <div className="home_container">
      <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71N3Vmy5V4L._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
        <Product
        id="12321343"
          title="Rose Heart Necklaces Gifts for Women, S925 Sterling Silver Rose Heart Initial Letter Pendant Necklaces Jewelry Anniversary Valentines Day Gifts for Her Mothers Day Christmas Birthday Gifts for Women Girls"
          price={59.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61QPu8pdKsL._AC_UL480_FMwebp_QL65_.jpg"
        />
         

        </div>
        <div className="home_row">
        <Product
        id="12321342"
          title="AnotherChill Women's Casual Lounge Slip Long Dress Sexy Sleeveless Backless Bodycon Maxi Dresses 2023 Summer Slim Elegant"
          price={26.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51MA6yrhY4L._MCnd_AC_UL480_FMwebp_QL65_.jpg"
        />
         <Product
          id="12321341"
          title="PlayStation PS5 Console : God of War Ragnarök Bundle"
          price={559}
          rating={5}
          image="https://m.media-amazon.com/images/I/61SUJDrCTLL._AC_UY327_FMwebp_QL65_.jpg"
          />
        <Product
        id="12321344"
          title="L'Oreal Paris Infallible Fresh Wear Foundation in a Powder, Up to 24 Hour Wear, 120 Vanilla"
          price={12.97}
          rating={4}
          image="https://m.media-amazon.com/images/I/811J-Izj1GL._AC_UL480_FMwebp_QL65_.jpg"
        />
        </div>
        <div className="home_row">
        <Product
        id="12321345"
          title="MASERATI SUCCESSO 44 mm Chronograph Men's Watch"
          price={133.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61WFgv-OAzL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
        id="12321346"
          title="Jordan Youth Air Jordan 11 GS 378038 116 Cherry 2022 - Size 6.5Y"
          price={242.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/41SDCbzEN6L._AC_UL480_FMwebp_QL65_.jpg"
        />
          
        </div>

      </div>
    </div>
  )
}

export default Home
