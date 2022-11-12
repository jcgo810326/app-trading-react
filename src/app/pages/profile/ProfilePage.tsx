import React, {FC, useState} from 'react'
import {Step1} from './steps/Step1'
import Step2 from './steps/Step2'
// import Step3 from './steps/Step3'
// import {Step4} from './steps/Step4'
// import {Step5} from './steps/Step5'

import {KTSVG} from '../../../_metronic/helpers'

const ProfilePage: FC = () => {
  const [paso, setPaso] = useState(1)

  return (
    <div className='card'>
      <div className='card-body'>
        <div
          // ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>PASO {paso}</h3>
            </div>
          </div>

          <div className='mx-auto mw-600px w-100 pt-15 pb-10'>
            {paso === 1 && <Step1 />}
            {paso === 2 && <Step2 />}
            {/* {paso === 3 && <Step3 />} */}
            {/* {paso === 4 && <Step3 />} */}
            {/* {paso === 5 && <Step3 />} */}

            {/* <Step1 /> */}
          </div>
          {/* <Step1 /> */}

          <div className='d-flex flex-stack pt-15'>
            <div className='mr-2'>
              <button
                onClick={() => setPaso(paso - 1)}
                type='button'
                className='btn btn-lg btn-light-primary me-3'
                disabled={paso === 1}
              >
                <KTSVG path='/media/icons/duotune/arrows/arr063.svg' className='svg-icon-4 me-1' />
                Atras
              </button>
            </div>

            <div>
              <button
                type='button'
                onClick={() => {
                  if (paso === 5) {
                    console.log('no se puede')
                    return
                  }
                  setPaso(paso + 1)
                }}
                className='btn btn-lg btn-primary me-3'
              >
                <span>
                  {paso === 5 ? 'Finalizar' : 'Siguiente'}
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr064.svg'
                    className='svg-icon-3 ms-2 me-0'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
