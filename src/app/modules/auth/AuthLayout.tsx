/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-lg-row h-100'>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-auto w-lg-auto p-10 order-2 order-lg-1 m-lg-auto '>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid card card--danger'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export {AuthLayout}
