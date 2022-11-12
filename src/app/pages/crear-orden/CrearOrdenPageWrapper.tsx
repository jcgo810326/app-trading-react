import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import CrearOrdenPage from './CrearOrdenPage'

const CrearOrdenPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Portafolio</PageTitle>
      <CrearOrdenPage />
    </>
  )
}

export default CrearOrdenPageWrapper
