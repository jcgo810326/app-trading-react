// import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'

export function MenuInner() {
  // const intl = useIntl()
  return (
    <>
      {/* <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' /> */}
      {/* <MenuItem title='Layout Builder' to='/builder' /> */}
      <MenuItem title='Portafolio' to='/portafolio' />
      {/* <MenuItem title='Perfil' to='/profile' /> */}
      <MenuItem title='Red Solamarte' to='/red-solamartes' />
      <MenuItem title='Crear Orden' to='/crear-orden' />
      <MenuItem title='Crear Oferta' to='/crear-oferta' />
      <MenuItem title='Crear Contra oferta' to='/crear-contra-oferta' />
    </>
  )
}
