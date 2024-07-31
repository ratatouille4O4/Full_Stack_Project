import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`YOUR_BACKEND_URL/products/${match.params.id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product', error));
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
