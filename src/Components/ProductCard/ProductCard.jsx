import React from "react"
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types'

// Styles
import styles from "./ProductCard.module.scss"

export const getID = (urlToStrip) => {
  return urlToStrip.substr(34).slice(0, -1)
}

export default function ProductCard({ name, id, url }) {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/pokemon/${productID}`)
  }

  // const productID = url.substr(34).slice(0, -1)

  const productID = getID(url)

  return (
    <div className={styles.productContainer} data-testid="productCard">
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${productID}.png`} className={styles.productImage} alt={name} />
      <h3>{name}</h3>
      <button data-testid="productButton" onClick={handleClick}>
        {" "}
        View Details
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}
