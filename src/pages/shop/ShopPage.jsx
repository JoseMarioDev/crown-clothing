import React from 'react';
import { shopData } from '../../shopData';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
