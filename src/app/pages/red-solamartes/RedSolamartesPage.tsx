/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
// import React, {useState} from 'react'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
// import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../_metronic/layout/core'

import {Card4} from '../../../_metronic/partials/content/cards/Card4'

const RedSolamartesPage: React.FC = () => {
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
            <h1 className='p-0 m-0'>Red Solamartes</h1>
            <div className='d-flex my-2'></div>
          </div>
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Project Reqs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='CRM App Docs..'
            description='3 days ago'
          />
        </div>
      </div>
    </>
  )
}

export default RedSolamartesPage
