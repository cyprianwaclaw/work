<template>
test
 <pre>
    <!-- {{ table_name }} -->
    {{ testData }}
</pre>
<form @submit="send">
    <input
    v-model="test"
    />
<button type="submit">Wyślij</button>    
</form>
<!-- <button @click="updateTable">
Click1
 </button>  -->`
</template>
<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import {useSupabase} from '@/stores/useSupabase'
import { storeToRefs } from 'pinia';

const supabase1 = useSupabase()
const test = ref()

await supabase1.dataTable()
async function send (){
    await supabase1.updateTable(test.value)
}
const {table_name1} = storeToRefs(supabase1)
let testData = table_name1.value

</script>
<style scoped>

</style>