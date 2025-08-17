export async function  () {
    try {
        
let { data: menu, error } = await supabase
  .from('menu')
  .select('*')

    } catch(err) {}
}