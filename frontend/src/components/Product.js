import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './Product.module.css'

function Product({ product }) {
    return (
        <Card className={styles.productCard}>
            <a href={`/product/${product._id}`}>
                <Card.Img
                    src={product.image}
                    className={styles.productImage}
                />
            </a>
        </Card>
    )
}

export default Product