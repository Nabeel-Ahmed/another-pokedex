import React from 'react'

// Styles
import styles from './ProductCard.module.scss'

export default function ProductCard({ name, id, url }) {
    const productID = url.substr(34).slice(0, -1)
    return (
        <div className={styles.productContainer} data-testid="productCard"> 
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${productID}.png`} className={styles.productImage} alt={name} />
            <h3>
                {name}
            </h3>

        </div>
    )
}
