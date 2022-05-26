import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Rating } from '@mui/material'
import React from 'react';
import NextLink from "next/link"
import { urlForThumbnail } from '../utils/image';

const ProductItem = ({product, addToCartHandler}) => {
  return (
     <Card>
         <NextLink href={`/product/${product.slug.current}`} passHref>
              <CardActionArea>
                   <CardMedia
                    component='img'
                     image={urlForThumbnail(product.image)} 
                     title={product.name}
                     >
                   </CardMedia>
                   <CardContent>
                         <Typography>{product.name}</Typography>
                           <Rating value={product.rating} readOnly></Rating>
                   </CardContent>
              </CardActionArea>
         </NextLink>
         <CardActions >
               <Typography>₦ {product.price}</Typography>
               <Button 
                 size="small"
                variant="contained"
                 color="secondary"
                 onClick={()=> addToCartHandler(product)}
                 > 
                 Add to Cart
                 </Button>
         </CardActions>
     </Card>
  )
}

export default ProductItem