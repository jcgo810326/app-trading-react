import React, {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Modal} from 'react-bootstrap'

interface IOrder {
  precioRequerido: number
  energiaOfrecida: number
  pagoEquivalente: number
  convertidorStokWh: number
  convertidorKWHtoS: number
}

const initialValues: IOrder = {
  precioRequerido: 0,
  energiaOfrecida: 0,
  pagoEquivalente: 0,
  convertidorStokWh: 0,
  convertidorKWHtoS: 0,
}

const CrearContraOfertaPage: React.FC = () => {
  const [data, setData] = useState<IOrder>(initialValues)
  // const precioRequerido = initialValues.precioRequerido
  const [energiaOfrecida, setEnergiaOfrecida] = useState<number>(0)
  // const [energiaRequerida, setEnergiaRequerida] = useState<number>(0)
  const [precioRequerido, setPrecioRequerido] = useState<number>(0)
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const precioOfrecidousuario = 10
  const energiaRequeridausuario = 10

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IOrder>({
    initialValues,
    validationSchema: orderSchema,
    onSubmit: (values) => {
      setLoading(true)
      if (!showCreateAppModal) {
        setTimeout(() => {
          const updatedData = Object.assign(data, values)
          setData(updatedData)
          setLoading(false)
          setShowCreateAppModal(true)
        }, 200)

        return
      }
    },
  })

  const creandoOrden = () => {
    const newData = {
      ...data,
      energiaOfrecida: energiaOfrecida,
      // energiaRequerida: energiaRequerida,
      pagoEquivalente: energiaOfrecida * precioRequerido,
    }
    console.log(newData)
  }

  return (
    <div className='card mb-5 mb-xl-10 w-xs-100 w-lg-75 mx-auto'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Crear contra oferta</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>Precio requerido por kWh (S/ por kWh)</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Precio requerido por kWH (S/ por kWh)'
                  {...formik.getFieldProps('precioRequerido')}
                  onChange={(e) => {
                    formik.handleChange(e)
                    setPrecioRequerido(Number(e.target.value))
                  }}
                />
                {precioRequerido > 0 && precioOfrecidousuario !== precioRequerido && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      Hay una diferencia de precios de S/
                      {precioOfrecidousuario - precioRequerido > 0
                        ? precioOfrecidousuario - precioRequerido
                        : (precioOfrecidousuario - precioRequerido) * -1}{' '}
                      por kWh respecto a lo ofrecido por el comprador ({precioOfrecidousuario} S/
                      por kWh)
                    </div>
                  </div>
                )}
                {formik.touched.precioRequerido && formik.errors.precioRequerido && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.precioRequerido}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Energia ofrecida en kWh</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Energia ofrecida en kWh'
                  {...formik.getFieldProps('energiaOfrecida')}
                  onChange={(e) => {
                    formik.handleChange(e)
                    setEnergiaOfrecida(Number(e.target.value))
                  }}
                />
                {energiaOfrecida > 0 && energiaOfrecida !== energiaRequeridausuario && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      Hay una diferencia de energia de{' '}
                      {energiaOfrecida - energiaRequeridausuario > 0
                        ? energiaOfrecida - energiaRequeridausuario
                        : (energiaOfrecida - energiaRequeridausuario) * -1}{' '}
                      kWh con respecto a lo requerido por el comprador ({energiaRequeridausuario}{' '}
                      kWh)
                    </div>
                  </div>
                )}
                {formik.touched.energiaOfrecida && formik.errors.energiaOfrecida && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.energiaOfrecida}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Pago equivalente en S/</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  disabled
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Pago equivalente en S/'
                  value={energiaOfrecida * precioRequerido}
                  // {...formik.getFieldProps('pagoEquivalente')}
                />
                {formik.touched.pagoEquivalente && formik.errors.pagoEquivalente && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.pagoEquivalente}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Convertidor Bidireccional
              </label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Convertidor de S/ a kWh'
                      {...formik.getFieldProps('convertidorStokWh')}
                    />
                    {formik.touched.convertidorStokWh && formik.errors.convertidorStokWh && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.convertidorStokWh}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Convertidor de kWh a S/'
                      {...formik.getFieldProps('convertidorKWHtoS')}
                    />
                    {formik.touched.convertidorKWHtoS && formik.errors.convertidorKWHtoS && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.convertidorKWHtoS}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            id='kt_modal_create_app'
            tabIndex={-1}
            aria-hidden='true'
            dialogClassName='modal-dialog modal-dialog-centered mw-900px'
            show={showCreateAppModal}
            onHide={() => setShowCreateAppModal(false)}
            backdrop={true}
          >
            <div className='modal-header'>
              <h2>Visualizar Oferta</h2>
            </div>

            <div className='modal-body py-lg-10 px-lg-10'>
              {/*begin::Stepper */}
              <div
                className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
                id='kt_modal_create_app_stepper'
              >
                <div className='card-body border-top p-9'>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span>Precio requerido por kWh (S/ por kWh)</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='number'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Precio requerido por kWH (S/ por kWh)'
                        {...formik.getFieldProps('precioRequerido')}
                        onChange={(e) => {
                          formik.handleChange(e)
                          setPrecioRequerido(Number(e.target.value))
                        }}
                      />
                      {precioRequerido > 0 && precioOfrecidousuario !== precioRequerido && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            Hay una diferencia de precios de S/
                            {precioOfrecidousuario - precioRequerido > 0
                              ? precioOfrecidousuario - precioRequerido
                              : (precioOfrecidousuario - precioRequerido) * -1}{' '}
                            por kWh respecto a lo ofrecido por el comprador ({precioOfrecidousuario}{' '}
                            S/ por kWh)
                          </div>
                        </div>
                      )}
                      {formik.touched.precioRequerido && formik.errors.precioRequerido && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.precioRequerido}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required'>Energia ofrecida en kWh</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='number'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Energia ofrecida en kWh'
                        {...formik.getFieldProps('energiaOfrecida')}
                        onChange={(e) => {
                          formik.handleChange(e)
                          setEnergiaOfrecida(Number(e.target.value))
                        }}
                      />
                      {energiaOfrecida > 0 && energiaOfrecida !== energiaRequeridausuario && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            Hay una diferencia de energia de{' '}
                            {energiaOfrecida - energiaRequeridausuario > 0
                              ? energiaOfrecida - energiaRequeridausuario
                              : (energiaOfrecida - energiaRequeridausuario) * -1}{' '}
                            kWh con respecto a lo requerido por el comprador (
                            {energiaRequeridausuario} kWh)
                          </div>
                        </div>
                      )}
                      {formik.touched.energiaOfrecida && formik.errors.energiaOfrecida && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.energiaOfrecida}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span>Pago equivalente en S/</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        disabled
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Pago equivalente en S/'
                        value={energiaOfrecida * precioRequerido}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer d-flex justify-content-end py-6 px-9'>
                <button
                  type='button'
                  className='btn btn-primary me-5'
                  disabled={loading}
                  onClick={() => setShowModal(true)}
                >
                  {showCreateAppModal && 'Cancelar contra oferta'}
                </button>
                <button type='button' className='btn btn-primary' onClick={() => creandoOrden()}>
                  Crear contra oferta
                </button>
              </div>
            </div>
          </Modal>

          <Modal
            id='kt_modal_create_app'
            tabIndex={-1}
            aria-hidden='true'
            dialogClassName='modal-dialog modal-dialog-centered mw-400px'
            show={showModal}
            onHide={() => setShowModal(false)}
            backdrop={true}
          >
            <div className='modal-header shadow text-center'>
              <h2>¿Estas seguro que quieres cancelar la contra oferta?</h2>
            </div>
            <div className='card-footer  d-flex justify-content-center shadow  py-6 px-2'>
              <button
                type='button'
                className='btn btn-primary me-5'
                onClick={() => {
                  setShowModal(false)
                  setShowCreateAppModal(false)
                }}
              >
                Si
              </button>
              <button type='button' className='btn btn-primary' onClick={() => setShowModal(false)}>
                No
              </button>
            </div>
          </Modal>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={loading}
              // onClick={() => setShowCreateAppModal(true)}
            >
              {!loading && 'Ver contra oferta'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const orderSchema = Yup.object().shape({
  precioRequerido: Yup.number().required('Precio requerido por kWh es requerido'),
  energiaOfrecida: Yup.number().required('Energia ofrecida es requerido'),
  pagoEquivalente: Yup.number().required('Pago Equivalente es requerido'),
  convertidorStokWh: Yup.number().required('Convertidor Sto Kwh es requerido'),
  convertidorKWHtoS: Yup.number().required('Convertidor Kwh To Sto es requerido'),
})

export default CrearContraOfertaPage
