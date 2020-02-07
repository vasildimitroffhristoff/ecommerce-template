import PreviewCollection from '../../components/CollectionPreview'
import React from 'react'
import SHOP_DATA from './shopData'

class Shop extends React.Component {
  state = { collections: SHOP_DATA }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(
          ({ id, ...otherColletionProps }) => (
            <PreviewCollection
              key={id}
              {...otherColletionProps}
            />
          )
        )}
      </div>
    )
  }
}

export default Shop
