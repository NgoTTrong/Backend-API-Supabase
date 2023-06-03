const {getAllData,insertData,deleteData,getDataById,uploadImage,deleteImageFolder,updateUrl} = require('../connections/supabase')

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
               const file = req.file;
               let result = await insertData("products",JSON.parse(req.body.productInfo))
               console.log(result);
               try{
                    let upImg = await uploadImage(result.data[0].id,file)
                    if (upImg === "Oke"){
                         await updateUrl("products",result.data[0].id)
                    }
               }
                catch(e) {
                    console.log(e)
               }
               res.status(result.status).json(result)
          } catch(e) {
               console.log(e)    
          }
     },
     deleteProduct: async (req,res)=>{
          try{
               let result = await deleteData("products",req.body.productId)
               try{
                    console.log(await deleteImageFolder("products",result.data[0].name+result.data[0].id))
               } catch(e) {
                    console.log(e)
               }
               res.status(result.status).json(result)
          } catch(e) {
               console.log(e)   
          }
     }
}