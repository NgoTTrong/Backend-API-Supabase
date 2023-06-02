const {createClient} = require('@supabase/supabase-js')

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

module.exports = {
     getAllData: async function getAllData(table){
          return await supabase.from(table).select()
     },
     getDataById:  async function getDataById(table,id){
          return await supabase.from(table).select().eq("id",id)
     },
     insertData : async function insertData(table, data){
          console.log(data)
          return await supabase.from(table).insert(data)
     },
     deleteData : async function deleteData(table, id){
          return await supabase.from(table).delete().eq('id', id)
     }
}
