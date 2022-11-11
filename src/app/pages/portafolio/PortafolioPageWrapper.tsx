import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import PortafolioPage from './PortafolioPage'

const PortafolioPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Portafolio</PageTitle>
      <PortafolioPage />
    </>
  )
}

export default PortafolioPageWrapper
