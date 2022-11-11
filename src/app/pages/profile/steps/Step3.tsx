/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../../_metronic/layout/core'

const Step3: React.FC = () => {
  const [tab, setTab] = useState('Sidebar')
  const [config, setConfig] = useState<ILayout>(getLayoutFromLocalStorage())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
      window.location.reload()
    } catch (error) {
      setConfig(getLayoutFromLocalStorage())
      setConfigLoading(false)
    }
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayoutFromLocalStorage())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>
      <div className='card card-custom'>
        <form className='form'>
          <div className='card-body'>
            <div className='tab-content'>
              <div className={clsx('tab-pane', {active: tab === 'Toolbar'})}>
                <div className='separator separator-dashed my-6'></div>
                <div className='mb-6'>
                  <h4 className='fw-bold text-dark'>Valoraciones</h4>
                  <div className='fw-semibold text-muted fs-7 d-block lh-1'>(acciones, ETF)</div>
                </div>

                <div
                  data-kt-buttons='true'
                  data-kt-buttons-target='.form-check-image:not(.disabled),.form-check-input:not([disabled])'
                  data-kt-initialized='1'
                >
                  <label
                    className={clsx('form-check-image form-check-success mb-10', {
                      active: config.app?.toolbar?.layout === 'classic',
                    })}
                  >
                    <div className='form-check-wrapper card card-custom w-2'>1-10</div>
                    <div className='form-check form-check-custom form-check-success form-check-sm form-check-solid'>
                      <input
                        className='form-check-input'
                        type='radio'
                        // checked="checked"
                        value='classic'
                        name='model.app.toolbar.layout'
                        checked={config.app?.toolbar?.layout === 'classic'}
                        onChange={() => {
                          const con = {...config}
                          if (con.app && con.app.toolbar) {
                            con.app.toolbar.layout = 'classic'
                            setConfig({...con})
                          }
                        }}
                        // [(ngModel)]="model.app.toolbar.layout"
                      />
                      <div className='form-check-label text-gray-800'></div>
                    </div>
                  </label>

                  <label
                    className={clsx('form-check-image form-check-success mb-10', {
                      active: config.app?.toolbar?.layout === 'saas',
                    })}
                  >
                    <div className='form-check-wrapper'>
                      <div className='card card-custom'>11-20</div>
                    </div>
                    <div className='form-check form-check-custom form-check-success form-check-sm form-check-solid'>
                      <input
                        className='form-check-input'
                        type='radio'
                        value='saas'
                        name='model.app.toolbar.layout'
                        checked={config.app?.toolbar?.layout === 'saas'}
                        onChange={() => {
                          const con = {...config}
                          if (con.app && con.app.toolbar) {
                            con.app.toolbar.layout = 'saas'
                            setConfig({...con})
                          }
                        }}
                        // [(ngModel)]="model.app.toolbar.layout"
                      />
                      <div className='form-check-label text-gray-800'></div>
                    </div>
                  </label>

                  <label
                    className={clsx('form-check-image form-check-success mb-10', {
                      active: config.app?.toolbar?.layout === 'accounting',
                    })}
                  >
                    <div className='form-check-wrapper'>Mas de 20 veces</div>
                    <div className='form-check form-check-custom form-check-success form-check-sm form-check-solid'>
                      <input
                        className='form-check-input'
                        type='radio'
                        value='accounting'
                        name='model.app.toolbar.layout'
                        checked={config.app?.toolbar?.layout === 'accounting'}
                        onChange={() => {
                          const con = {...config}
                          if (con.app && con.app.toolbar) {
                            con.app.toolbar.layout = 'accounting'
                            setConfig({...con})
                          }
                        }}
                        // [(ngModel)]="model.app.toolbar.layout"
                      />
                      <div className='form-check-label text-gray-800'></div>
                    </div>
                  </label>

                  <label
                    className={clsx('form-check-image form-check-success mb-10', {
                      active: config.app?.toolbar?.layout === 'extended',
                    })} // [ngClass]="{'active': model.app.toolbar.layout === 'extended'}"
                  >
                    <div className='form-check-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/misc/layout/toolbar-extended.png')}
                        className='mw-100'
                        alt=''
                      />
                    </div>
                    <div className='form-check form-check-custom form-check-success form-check-sm form-check-solid'>
                      <input
                        className='form-check-input'
                        type='radio'
                        value='extended'
                        name='model.app.toolbar.layout'
                        checked={config.app?.toolbar?.layout === 'extended'}
                        onChange={() => {
                          const con = {...config}
                          if (con.app && con.app.toolbar) {
                            con.app.toolbar.layout = 'extended'
                            setConfig({...con})
                          }
                        }}
                        // [(ngModel)]="model.app.toolbar.layout"
                      />
                      <div className='form-check-label text-gray-800'>Extended</div>
                    </div>
                  </label>

                  <label
                    className={clsx('form-check-image form-check-success mb-10', {
                      active: config.app?.toolbar?.layout === 'reports',
                    })}
                  >
                    {/* begin::Image */}
                    <div className='form-check-wrapper'>
                      <img
                        src={toAbsoluteUrl('/media/misc/layout/toolbar-reports.png')}
                        className='mw-100'
                        alt=''
                      />
                    </div>
                    {/* end::Image */}
                    {/* begin::Check */}
                    <div className='form-check form-check-custom form-check-success form-check-sm form-check-solid'>
                      <input
                        className='form-check-input'
                        type='radio'
                        value='reports'
                        name='model.app.toolbar.layout'
                        checked={config.app?.toolbar?.layout === 'reports'}
                        onChange={() => {
                          const con = {...config}
                          if (con.app && con.app.toolbar) {
                            con.app.toolbar.layout = 'reports'
                            setConfig({...con})
                          }
                        }}
                        // [(ngModel)]="model.app.toolbar.layout"
                      />
                      {/* begin::Label */}
                      <div className='form-check-label text-gray-800'>Reports</div>
                      {/* end::Label */}
                    </div>
                    {/* end::Check */}
                  </label>
                  {/* end::Option */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Step3
