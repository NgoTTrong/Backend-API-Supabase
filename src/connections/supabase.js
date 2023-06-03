const {createClient} = require('@supabase/supabase-js');
const {StorageBucket} = require('@supabase/storage-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

module.exports = {
     getAllData: async function getAllData(table){
          return await supabase.from(table).select()
     },
     getDataById:  async function getDataById(table,id){
          return await supabase.from(table).select().eq("id",id)
     },
     insertData : async function insertData(table, data){
          return await supabase.from(table).insert(data).select()
     },
     deleteData : async function deleteData(table, id){
          return await supabase.from(table).delete().eq('id', id).select()
     },
     uploadImage : async function uploadImage(productId,file){
          let { error } = await supabase.storage
          .from('products')
          .upload(`${productId}/thumbnail.jpg`, file.buffer, { upsert: false})
          if (error){
               console.log(error)
               return " Not Oke"
          }
          return "Oke"
     },
     downloadImage: async function downloadImage(productID){
          console.log(`${productID}/thumbnail.jpg`)
          const { data, error } = await supabase.storage.from('products').download(`${productID}/thumbnail.jpg`)
          if (error){
               return "Not Oke"
          }
          return data
     },
     updateUrl: async function updateUrl(bucketName,productId){
          const { data } = supabase
                              .storage
                              .from(bucketName)
                              .getPublicUrl(`${productId}/thumbnail.jpg`)
          const { error } = await supabase
          .from(bucketName)
          .update({ thumbnailurl: data.publicUrl })
          .eq('id', productId)
          console.log(data.publicUrl)
     },
     deleteImageFolder: async function deleteImageFolder(bucket,folder){
          const { error } = await supabase.storage
			.from(bucket)
			.remove([`${folder}/thumbnail.jpg`]);
          if (error){
               return "Not oke"
          }
          return "Oke"
     }
}
