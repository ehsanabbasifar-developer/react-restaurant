import React from 'react'

export default function Button({message , onclick}) {
  return (
    <button type='button' onclick = {onclick ? onclick : und}>{message}</button>
  )
}
