import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import RedSolamartesPage from './RedSolamartesPage'

const RedSolamartesPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Red Solamartes</PageTitle>
      <RedSolamartesPage />
    </>
  )
}

export default RedSolamartesPageWrapper
