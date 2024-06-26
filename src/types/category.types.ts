/* 
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
*/

import Product from "./product.types"


/* interface Category {
    id: string,
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export default Category */

interface Category {
    id: string,
    name: string,
    displayName: string,
    imageUrl: string
    products: Product[]
}

export default Category