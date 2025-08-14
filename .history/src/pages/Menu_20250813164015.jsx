import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { getMenu } from '../api/apiTest'

export default function Menu() {
    useEffect(() => {
        getMenu()
    })
  return (
    <main>
        <AppLayout></AppLayout>
    </main>
  )
}
