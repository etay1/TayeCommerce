import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './Product.module.css'

function Product({ product }) {
    return (
        <Card className="styles.productCard">
            <a href={`/product/${product._id}`}>
                <Card.Img
                src={product.image}
                className={styles.productImage}/>
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} from reviews
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product