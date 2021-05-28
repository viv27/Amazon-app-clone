import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
           <img className="home__image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220-.png"/>
           <div className="home__row">
               <Product
                    id="1"
                    title="Apple iPhone 11 (64GB) - Black"
                    img="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX679_.jpg"
                    price="63999.00"
                    rating={4}
               />
                <Product
                    id="2"
                    title="The Alchemist Paperback – 17 October 2005"
                    img="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
                    price="199.00"
                    rating={4}
                />
           </div>
           <div className="home__row">
                <Product
                    id="3"
                    title="Only Time Will Tell (The Clifton Chronicles series Book 1)"
                    img="https://m.media-amazon.com/images/I/51xfVP5lJaL.jpg"
                    price="155.00"
                    rating={4}
               />
               <Product
                    id="4"
                    title="IFB 8kg Fully-Automatic Front Loading Washing Machine (Senator WXS, Silver, Inbuilt Heater, Aqua Energie water softener)"
                    img="https://m.media-amazon.com/images/I/81QKqCoVEsL._AC_UY436_FMwebp_QL65_.jpg"
                    price="35490.00"
                    rating={4}
               />
               <Product
                    id="5"
                    title="Harpic Powerplus Disinfectant Toilet Cleaner, Original, 1 L (Pack of 2)"
                    img="https://m.media-amazon.com/images/I/61CpXZQBleL._AC_UL640_FMwebp_QL65_.jpg"
                    price="285.60"
                    rating={5}
               />                
           </div>
        </div>
    )
}

export default Home



