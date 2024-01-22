import React from 'react'
import authService from '../../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

const LogoutBtn  = () => {
  const dispatch = useDispatch()
  const logouthandler = ()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout());
    })
  }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-slate-700 hover:font-bold hover:text-white rounded-full'
    onClick={logouthandler}
    >Logout</button>
  )
  }

export default LogoutBtn;