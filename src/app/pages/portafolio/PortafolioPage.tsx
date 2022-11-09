/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
// import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
// import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../_metronic/layout/core'

const PortafolioPage: React.FC = () => {
  // const [tab, setTab] = useState('Sidebar')
  // const [config, setConfig] = useState<ILayout>(getLayoutFromLocalStorage())
  // const [configLoading, setConfigLoading] = useState<boolean>(false)
  // const [resetLoading, setResetLoading] = useState<boolean>(false)

  // const updateConfig = () => {
  //   setConfigLoading(true)
  //   try {
  //     LayoutSetup.setConfig(config)
  //     window.location.reload()
  //   } catch (error) {
  //     setConfig(getLayoutFromLocalStorage())
  //     setConfigLoading(false)
  //   }
  // }

  // const reset = () => {
  //   setResetLoading(true)
  //   setTimeout(() => {
  //     setConfig(getLayoutFromLocalStorage())
  //     setResetLoading(false)
  //   }, 1000)
  // }

  return (
    <>
      <div className='card mb-10'>
        <div className='card-body d-flex align-items-center py-8'>
          <div className='ms-6'>
            <h1 className='p-0 m-0'>Mi billetera</h1>
            <div className='d-flex my-2'></div>
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
              <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6 mb-3 mt-3'>
                <div className='d-flex align-items-center '>
                  <div className='fs-2 fw-bolder'>$0.00</div>
                </div>

                <div className='fw-bold fs-6 text-gray-400'>Efectivo Disponible</div>
              </div>

              <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6 mb-3 mt-3'>
                <div className='d-flex align-items-center '>
                  <div className='fs-2 fw-bolder'>$0.00</div>
                </div>

                <div className='fw-bold fs-6 text-gray-400'>Total Invertido</div>
              </div>
              <div className='border border-gray-300  rounded min-w-125px py-3 px-4 me-6 mb-3 mt-3'>
                <div className='d-flex align-items-center '>
                  <div className='fs-2 fw-bolder'>$0.00</div>
                </div>

                <div className='fw-bold fs-6 text-gray-400'>Ganancia/Perdida</div>
              </div>
              <div className='border border-gray-300 rounded min-w-125px py-3 px-4 me-6 mb-3 mt-3'>
                <div className='d-flex align-items-center '>
                  <div className='fs-2 fw-bolder'>$0.00</div>
                </div>

                <div className='fw-bold fs-6 text-gray-400'>Valor del portafolio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {PortafolioPage as BuilderPage}
