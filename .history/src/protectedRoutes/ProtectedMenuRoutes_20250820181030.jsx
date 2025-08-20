import React from 'react'
import useCurrentUser from '../features/login/useCurrentUser'

export default function ProtectedMenuRoutes() {
   const {data} = useCurrentUser()
   
}
