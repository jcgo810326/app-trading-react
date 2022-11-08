import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {BuilderPage} from './PortafolioPage'

const PortafolioPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Portafolio</PageTitle>
      <BuilderPage />
    </>
  )
}

export default PortafolioPageWrapper
