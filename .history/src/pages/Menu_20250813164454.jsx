import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { getMenu } from '../api/apiTest'
import MenuItems from '../features/menu/MenuItems'

export default function Menu() {
   
  return (
    <main>
        <AppLayout>
            <MenuItems/>
        </AppLayout>
    </main>
  )
}
