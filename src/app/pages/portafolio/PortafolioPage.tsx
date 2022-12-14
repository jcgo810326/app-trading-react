/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
// import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {useAuthStore} from '../../hooks/useAuthStore'
// import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../_metronic/layout/core'

const PortafolioPage: React.FC = () => {
  const {user} = useAuthStore()

  return (
    <>
      <div className='card mb-10'>
        <div className='card-body d-flex align-items-center justify-content-between py-8'>
          <div className='ms-6'>
            <h1 className='p-0 m-0'>Mi billetera</h1>
          </div>
          <div>
            <button className='btn btn-primary'>
              <Link to='/deposito' className='text-white'>
                Añadir fondos
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='my-20 text-center'>
        <img
          className='mx-auto h-150px h-lg-200px  theme-light-show'
          src={toAbsoluteUrl('/media/icons/duotune/general/gen032.svg')}
          alt=''
        />
        <h1>Su portafolio esta vacio</h1>
        <span>
          Comience a explorar las oportunidades de inversion copiando a otras personas en mercados o
          CopyPortafolios
        </span>
      </div>

      <div className='card card-custom'>
        <div className='d-flex flex-wrap flex-stack  p-2'>
          <div className='d-flex flex-column flex-grow-1'>
            <div className='d-flex flex-wrap flex justify-between'>
              <div className='col-11 col-sm-11 col-xl'>
                <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6 mb-3 mt-3 text-center'>
                  {/* <div className='d-flex align-items-center '> */}
                  <div className='fs-2 fw-bolder'>${user?.balance}</div>
                  {/* </div> */}

                  <div className='fw-bold fs-6 text-gray-400'>Efectivo Disponible</div>
                </div>
              </div>

              <div className=' my-auto me-6'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
              </div>
              <div className='col-11 col-sm-11 col-xl'>
                <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6  mb-3 mt-3 text-center'>
                  <div className='fs-2 fw-bolder'>$0.00</div>

                  <div className='fw-bold fs-6 text-gray-400'>Total Invertido</div>
                </div>
              </div>

              <div className='my-auto me-6'>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
              </div>

              <div className='col-11 col-sm-11 col-xl'>
                <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6  mb-3 mt-3 text-center'>
                  <div className='fs-2 fw-bolder'>$0.00</div>

                  <div className='fw-bold fs-6 text-gray-400'>Ganancia/Perdida</div>
                </div>
              </div>

              <div className=' my-auto me-6'>
                <KTSVG path='/media/icons/duotune/arrows/arr001.svg' className='svg-icon-3' />
              </div>

              <div className='col-12 col-sm-12 col-xl text-center'>
                <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6 mb-3 mt-3'>
                  <div className='fs-2 fw-bolder'>$0.00</div>

                  <div className='fw-bold fs-6 text-gray-400'>Valor del portafolio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortafolioPage
