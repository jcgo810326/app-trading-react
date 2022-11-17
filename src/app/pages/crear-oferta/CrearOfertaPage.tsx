import React, {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Modal} from 'react-bootstrap'

interface IOrder {
  codigoRed: string
  usuario: string
  codigoNodo: string
  precioVenta: number
  precioOfrecido: number
  pagoEquivalente: number
  energiaRequerida: number
  convertidorStokWh: number
  convertidorKWHtoS: number
}

const initialValues: IOrder = {
  codigoRed: '',
  usuario: '',
  codigoNodo: '',
  precioVenta: 20,
  precioOfrecido: 0,
  pagoEquivalente: 0,
  energiaRequerida: 0,
  convertidorStokWh: 0,
  convertidorKWHtoS: 0,
}

const CrearOfertaPage: React.FC = () => {
  const [data, setData] = useState<IOrder>(initialValues)
  const precioVenta = initialValues.precioVenta
  const [precioOfrecido, setPrecioOfrecido] = useState<number>(0)
  const [energiaRequerida, setEnergiaRequerida] = useState<number>(0)
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

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
      precioOfrecido: precioOfrecido,
      energiaRequerida: energiaRequerida,
      pagoEquivalente: precioOfrecido * energiaRequerida,
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
          <h3 className='fw-bolder m-0'>Crear oferta</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Codigo de Red Solamartes
              </label>

              <div className='col-lg-8'>
                <div className='col-lg-12 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Codigo de Red'
                    {...formik.getFieldProps('codigoRed')}
                  />
                  {formik.touched.codigoRed && formik.errors.codigoRed && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.codigoRed}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Usuario Comprador - Energia Electrica disponible</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('usuario')}
                >
                  <option value=''>Seleccione Usuario</option>
                  <option value='AF'>Usuario 1</option>
                  <option value='AX'>Usuario 2</option>
                  <option value='AL'>Usuario 3</option>
                  <option value='DZ'>Usuario 4</option>
                </select>
                {formik.touched.usuario && formik.errors.usuario && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.usuario}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                Codigo de Nodo Prosumidor
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Codigo de Nodo Prosumidor'
                  {...formik.getFieldProps('codigoNodo')}
                />
                {formik.touched.codigoNodo && formik.errors.codigoNodo && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.codigoNodo}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>Precio promedio de venta (S/ por kWh)</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Precio promedio de venta (S/ por kWh)'
                  {...formik.getFieldProps('precioVenta')}
                  disabled
                  //Obtener valor para calcular el precio promedio
                />
                {formik.touched.precioVenta && formik.errors.precioVenta && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.precioVenta}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Precio ofrecido por kWh (S/ por kWh)</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Precio ofrecido por kWh (S/ por kWh)'
                  {...formik.getFieldProps('precioOfrecido')}
                  onChange={(e) => {
                    formik.handleChange(e)
                    setPrecioOfrecido(Number(e.target.value))
                  }}
                />
                {precioOfrecido > 0 && precioVenta > 0 && precioOfrecido !== precioVenta && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      Hay una diferencia de precios de S/
                      {precioOfrecido - precioVenta > 0
                        ? precioOfrecido - precioVenta
                        : (precioOfrecido - precioVenta) * -1}
                    </div>
                  </div>
                )}
                {formik.touched.precioOfrecido && formik.errors.precioOfrecido && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.precioOfrecido}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Energia Requerida en kWh</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Energia Requerida en kWh'
                  {...formik.getFieldProps('energiaRequerida')}
                  onChange={(e) => {
                    formik.handleChange(e)
                    setEnergiaRequerida(Number(e.target.value))
                  }}
                />
                {formik.touched.energiaRequerida && formik.errors.energiaRequerida && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.energiaRequerida}</div>
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
                  value={precioOfrecido * energiaRequerida}
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
                      Codigo de Red Solamartes
                    </label>

                    <div className='col-lg-8'>
                      <div className='col-lg-12 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-flow'
                          disabled
                          {...formik.getFieldProps('codigoRed')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span>Usuario Vendedor</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <select
                        className='form-select form-select-flow form-select-lg fw-bold'
                        {...formik.getFieldProps('usuario')}
                        disabled
                      >
                        <option value=''>Seleccione Usuario</option>
                        <option value='AF'>Usuario 1</option>
                        <option value='AX'>Usuario 2</option>
                        <option value='AL'>Usuario 3</option>
                        <option value='DZ'>Usuario 4</option>
                      </select>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      Codigo de Nodo Prosumidor
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-flow'
                        {...formik.getFieldProps('codigoNodo')}
                        disabled
                      />
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span>Precio promedio de venta (S/ por kWh)</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='number'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Precio promedio de venta (S/ por kWh)'
                        disabled
                        {...formik.getFieldProps('precioVenta')}
                      />
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required'>Precio ofrecido por kWh (S/ por kWh)</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='number'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Precio ofrecido por kWh (S/ por kWh)'
                        {...formik.getFieldProps('precioOfrecido')}
                        onChange={(e) => {
                          formik.handleChange(e)
                          setPrecioOfrecido(Number(e.target.value))
                        }}
                      />
                      {precioOfrecido > 0 && precioVenta > 0 && precioOfrecido !== precioVenta && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            Hay una diferencia de precios de S/
                            {precioOfrecido - precioVenta > 0
                              ? precioOfrecido - precioVenta
                              : (precioOfrecido - precioVenta) * -1}
                          </div>
                        </div>
                      )}
                      {formik.touched.precioOfrecido && formik.errors.precioOfrecido && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.precioOfrecido}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required'>Energia Requerida en kWh</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='number'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Energia Requerida en kWh'
                        {...formik.getFieldProps('energiaRequerida')}
                        onChange={(e) => {
                          formik.handleChange(e)
                          setEnergiaRequerida(Number(e.target.value))
                        }}
                      />
                      {formik.touched.energiaRequerida && formik.errors.energiaRequerida && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.energiaRequerida}</div>
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
                        value={precioOfrecido * energiaRequerida}
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
                  {showCreateAppModal && 'Cancelar oferta'}
                </button>
                <button type='button' className='btn btn-primary' onClick={() => creandoOrden()}>
                  Crear oferta
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
              <h2>¿Estas seguro que quieres cancelar la oferta?</h2>
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
              {!loading && 'Ver Orden'}
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
  codigoRed: Yup.string().required('Codigo de Red es requerido'),
  usuario: Yup.string().required('Usuario es requerido'),
  codigoNodo: Yup.string().required('Codigo de Nodo es requerido'),
  precioVenta: Yup.number().required('Precio de Venta es requerido'),
  precioOfrecido: Yup.number().required('Precio ofrecido es requerido'),
  pagoEquivalente: Yup.number().required('Pago Equivalente es requerido'),
  energiaRequerida: Yup.number().required('Energia Requerida es requerido'),
  convertidorStokWh: Yup.number().required('Convertidor Sto Kwh es requerido'),
  convertidorKWHtoS: Yup.number().required('Convertidor Kwh To Sto es requerido'),
})

export default CrearOfertaPage
