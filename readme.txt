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

GET: localhost:5001/api/products

GET: localhost:5001/api/products/category/:category_id

GET: localhost:5001/api/products/:productId

PUT: localhost:5001/api/products/:productId

DELETE: localhost:5001/api/products/:productId

===============================================================

User:
======

POST: http://localhost:5001/api/users/register
{
  "username": "Raj",
  "email": "ssraj74@gmail.com",
  "password": "12345",
  "address": "11-ML, NY",
  "phone": "404 344 1111"
}

POST: http://localhost:5001/api/users/login
{
  "email": "ssraj74@gmail.com",
  "password": "12345"
}

Note: User will get a token when they login, that can be sent when they want to view user profile, order products, update/delete products

GET: http://localhost:5001/api/users/
NOTE: Bearer Token needs to be sent along with request inorder to view the User info

