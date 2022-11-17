import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import CrearOfertaPage from './CrearOfertaPage'

const CrearOfertaPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Crear oferta</PageTitle>
      <CrearOfertaPage />
    </>
  )
}

export default CrearOfertaPageWrapper
