import {useLocation} from 'react-router'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const EstacionPage: React.FC = () => {
  const {pathname} = useLocation()
  const numeroEstacion = pathname.split('/')[2]

  return (
    <>
      <div className='card mb-10'>
        <div className='card-body d-flex align-items-center py-8'>
          <div className='ms-6'>
            <h1 className='p-0 m-0'>Red Solamartes</h1>
            <div className='d-flex my-2'></div>
          </div>
        </div>
      </div>

      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <div className='card card-xl-stretch mb-xl-8 pb-10'>
            {/* header */}
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title  '>
                <span className='card-label fw-bolder text-center fs-3 mb-1'>
                  Estación {numeroEstacion}
                </span>
                {/* <span className='text-muted mt-1 fw-bold fs-7'>Estación de la red</span> */}
              </h3>
            </div>

            <img className='mx-auto w-75' src={toAbsoluteUrl('/media/product/casa.jpg')} alt='' />
          </div>
        </div>

        <div className='col-xl-6 h-100'>
          <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Detalles de la estacion</h3>
              </div>
            </div>

            <div className='card-body p-9'>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Titular</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>Max Smith</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Direccion </label>

                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>Lima</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EstacionPage
