Category:
=========
POST: localhost:5001/api/categories
{
  "name": "Shoes"
}

GET: localhost:5001/api/categories

GET: localhost:5001/api/categories/:id

PUT: localhost:5001/api/categories/:id
{
  "name": "Women Dresses"
}

DELETE: localhost:5001/api/categories/:id
===============================================================

Products:
=========

POST: localhost:5001/api/products
{
  "title": "Composite Toe Waterproof Shoe For Men",
  "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "price": 53.00,
  "stock": 198,
  "category_id": "641294cae5eec07910ebf304"
}

