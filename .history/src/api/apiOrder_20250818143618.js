export async function insertOrder () {
    
    const { data, error } = await supabase
  .from('orders')
  .insert([
    {
      transition_id: '12345', // مقدار دلخواه شما
      status: 'pending'        // مقدار دلخواه شما
    }
  ])
  .select();

if (error) {
  console.error('Error inserting order:', error);
} else {
  console.log('Inserted order:', data);
}

}