export async function menu () {
    try {
        
let { data: menu, error } = await supabase
  .from('menu')
  .select('*')

    } catch(err) {}
}