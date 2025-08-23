import React from 'react'

export default function TransitionDetails({data}) {
    
    if (!data || data.length === 0) return
    console.log(data[0]);
    return (
    <div>TransitionDetails</div>
  )
}
