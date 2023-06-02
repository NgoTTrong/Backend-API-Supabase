const {getAllData,insertData,deleteData,getDataById} = require('../connections/supabase')

module.exports = {
     getAllProducts: async (req,res)=>{
          try{
               let result = await getAllData("products")
               res.status(result.status).json(result.data)
          } catch(e) {
               console.log(e)    
          }
     },
     getProductById: async (req,res)=>{
          try{
               let result = await getDataById("products",req.params.id)
               res.status(result.status).json(result.data[0])
          } catch(e) {
               console.log(e)    
          }
     },
     insertProduct: async (req,res)=>{
          try{
               let result = await insertData("products",req.body.productInfo)
               res.status(result.status).json(result)
          } catch(e) {
               console.log(e)    
          }
     },
     deleteProduct: async (req,res)=>{
          try{
               let result = await deleteData("products",req.body.productId)
               res.status(result.status).json(result)
          } catch(e) {
               console.log(e)    
          } 
     }
}