import React, {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import EstacionPage from './EstacionPage'

const EstacionPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Red Solamartes</PageTitle>
      <EstacionPage />
    </>
  )
}

export default EstacionPageWrapper
