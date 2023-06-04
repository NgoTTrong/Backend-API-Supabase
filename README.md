# Backend-API-Supabase

- Provice API to manipulate to Supabase
- Routes system:

  +"/product": get method to get all products
  
  +"/product/:id":get method to get product by id
  
  +"/product/insert":post method to insert a product
  
  +"/product/delete": post method to delete a product
  
  +"/order": get method to get all orders
  
  + etc...

## API
- Insern a product: add to body of post request a json data have format like:

{

     "productInfo": {
          "name": {product_name},
          "description":  {product_description},
          "baseprice": {product_base_price},
          "discountprice": {product_discount_price}
     }
     
}

- Delete a product: add to body of post request a json data have format like:

{

     "productId": {product_id}
     
}

- Insern an order: add to body of post request a json data have format like:

{

     "orderInfo": {
          "productid": {product_id},
          "buyername":  {customer_name},
          "phonenumber": {phone_number},
          "email": {email},
          "address": {customer_address},
          "quantity": {quantity},
          "totalpaid":{total_paid}
     }
     
}

Note: replace data into {___} field


## Deployment
- The web application is deployed at Render: (https://render.com/)

## To run the server
- Step 1: Login to Supabase.com
- Step 2: Create an new project
- Step 3: Go to SQL editor tab in Supabase, copy the script from /src/sql/script.sql to SQL editor of Supabase, and run to create required table
- Step 4: In terminal of cloned repository, type : npm install
- Step 5: type: npm run start  , and enjoy the show

## Documentation

[Render](https://render.com/docs)

[Supabase](https://supabase.com/docs)

## Support

For support, email trongngo08082002@gmail.com
