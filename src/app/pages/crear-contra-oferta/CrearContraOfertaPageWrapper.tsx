import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import CrearContraOfertaPage from './CrearContraOfertaPage'

const CrearContraOfertaPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Crear contra oferta</PageTitle>
      <CrearContraOfertaPage />
    </>
  )
}

export default CrearContraOfertaPageWrapper
