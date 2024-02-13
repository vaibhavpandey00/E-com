import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProduct />
    </>
  )
}
export default Product;