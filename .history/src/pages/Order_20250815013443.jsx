import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Link } from 'react-router-dom'

export default function Order() {
  return (
    <AppLayout>
        <Link to={"/menu"}>back to menu </Link>
    </AppLayout>
  )
}
