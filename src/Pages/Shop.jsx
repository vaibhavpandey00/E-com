import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Offers } from '../Components/Offers/Offers';
import { Collection } from '../Components/Collection/Collection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <>
    <Hero/>
    <Offers/>
    <Collection/>
    <NewsLetter/>
    </>
  )
}
export default Shop;