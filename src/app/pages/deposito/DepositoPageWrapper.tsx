import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import DepositoPage from './DepositoPage'

const DepositoPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Deposito</PageTitle>
      <DepositoPage />
    </>
  )
}

export default DepositoPageWrapper
