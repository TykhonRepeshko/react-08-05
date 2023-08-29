import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (count: number, price: number) => void
}
const ProductList = ({ addProductToCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    margin: '30px 0',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                ProductList
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        image,
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                image={image}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}
export default ProductList
