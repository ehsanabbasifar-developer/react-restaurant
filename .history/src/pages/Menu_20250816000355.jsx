import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import MenuItems from '../features/menu/MenuItems'

export default function Menu() {
   
  return (
    <main className='bg-gray-100'>
        <AppLayout>
            <MenuItems/>
        </AppLayout>
    </main>
  )
}
