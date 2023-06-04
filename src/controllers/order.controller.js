const {getAllData,insertData,deleteData,getDataById} = require("../connections/supabase")

module.exports = {
     getAllOrders: async (req,res)=>{
          try{
               let result = await getAllData("orders")
               res.status(result.status).json(result.data)
          } catch(e) {
               console.log(e)    
          }
     },
     getOrderById: async (req,res)=>{
          try{
               let result = await getDataById("orders",req.params.id)
               res.status(result.status).json(result.data[0])
          } catch(e) {
               console.log(e)    
          }
     },
     insertOrder: async (req,res)=>{
          try{
               let product = await getDataById("products",req.body.orderInfo.productid)
               if (product.status != 200){
                    return
               }
               let result = await insertData("orders",req.body.orderInfo)
               console.log(result)
               res.status(result.status).json(result)
          } catch(e) {
               console.log(e)    
          }
     },
     deleteOrder: async (req,res)=>{
          try{
               let result = await deleteData("orders",req.body.orderId)
               res.status(result.status).json(result)
          } catch(e) {
               console.log(e)    
          } 
     }
}