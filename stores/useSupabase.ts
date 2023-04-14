import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://htmrvvcjlwoutdzvvohv.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bXJ2dmNqbHdvdXRkenZ2b2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5NTI3ODksImV4cCI6MTk5NjUyODc4OX0.52j8Hcv6HD5A7LLiQIMVZSCU6VThjTNP6rrb6u2s5tw'
const supabase = createClient(supabaseUrl, supabaseKey)

export const useSupabase = defineStore('supabase', {
    state: () => ({
        table_name1: {} as any
    }),
    actions:{
        async updateTable(ourName: string){
              const res = await supabase
              .from('table_name')
              .insert([
                { name: ourName },
              ])
              },
    async dataTable(){
        try{
            const res = await supabase
            .from('table_name')
            .select('*')
            this.table_name1 = res.data
        } catch (err) {
            console.error("Error retrieving data from db", err);
          }
    }
},
  })