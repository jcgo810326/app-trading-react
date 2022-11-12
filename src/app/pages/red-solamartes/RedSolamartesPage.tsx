/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
// import React, {useState} from 'react'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
// import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../_metronic/layout/core'

import {Card4} from '../../../_metronic/partials/content/cards/Card4'

const RedSolamartesPage: React.FC = () => {
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
            title='Estacion 01'
            link='/red-solamartes/01'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 02'
            link='/red-solamartes/02'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 03'
            link='/red-solamartes/03'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 04'
            link='/red-solamartes/04'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 05'
            link='/red-solamartes/05'
            // description='3 days ago'
          />
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 06'
            link='/red-solamartes/06'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 07'
            link='/red-solamartes/07'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 08'
            link='/red-solamartes/08'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 09'
            link='/red-solamartes/09'
            // description='3 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/icons/duotune/general/gen001.svg'
            title='Estacion 10'
            link='/red-solamartes/10'
            // description='3 days ago'
          />
        </div>
      </div>
    </>
  )
}

export default RedSolamartesPage
