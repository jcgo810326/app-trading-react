import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuthStore} from '../../../hooks/useAuthStore'

const buttonStyle = {
  layout: 'horizontal', // horizontal | vertical
  color: 'black', // gold | blue | silver | black
  shape: 'rect', // pill | rect
  label: 'paypal', // pay | buynow | paypal
  tagline: false,
}

export const PaypalPayButton = ({amount}) => {
  const [disabledButton, setDisabledButton] = useState(true)
  const {user, checkAuthToken} = useAuthStore()
  const navigate = useNavigate()

  const handleApprovedPayment = async (details) => {
    if (details.status === 'COMPLETED') {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.id,
          amount: details.purchase_units[0].amount.value,
          paypalId: details.id,
          paypalInfo: details,
        }),
      })

      const data = await res.json()

      if (data) {
        checkAuthToken()
        navigate('/')
      }
    }
  }

  useEffect(() => {
    if (amount > 0) {
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [amount])

  return (
    <div className='w-100 position-relative z-index-1'>
      <PayPalScriptProvider
        options={{
          'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
          components: 'buttons',
          currency: 'USD', // CAMBIAR CON LA MONEDA DEL USUARIO (PETICION AL BACKEND)
        }}
      >
        <PayPalButtons
          style={buttonStyle}
          disabled={disabledButton}
          forceReRender={[disabledButton, amount]}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD', // CAMBIAR CON LA MONEDA DEL USUARIO (PETICION AL BACKEND)
                    value: amount,
                  },
                },
              ],
            })
          }}
          onCancel={(data, actions) => {
            console.log('onCancel', data, actions)
          }}
          onError={(err) => {
            console.log('onError', err)
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              handleApprovedPayment(details)
            })
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}
