import {useState} from 'react'
import {PaypalPayButton} from './components'

const DepositoPage: React.FC = () => {
  const [depositAmount, setDepositAmount] = useState(0)

  return (
    <div className='card w-50 p-6 mx-auto shadow-sm'>
      <div className='d-flex flex-column gap-2'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span
              className='input-group-text'
              id='basic-addon1'
              style={{borderRadius: '6px 0 0 6px'}}
            >
              $
            </span>
          </div>
          <input
            type='number'
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value as any)}
            className='form-control'
            placeholder='Cantidad'
            aria-label='Username'
            aria-describedby='basic-addon1'
          />
        </div>
        <div className='d-flex gap-2'>
          <button onClick={() => setDepositAmount(50)} className='w-100 btn btn-outline text-muted'>
            50$
          </button>
          <button
            onClick={() => setDepositAmount(100)}
            className='w-100 btn btn-outline text-muted'
          >
            100$
          </button>
          <button
            onClick={() => setDepositAmount(250)}
            className='w-100 btn btn-outline text-muted'
          >
            250$
          </button>
        </div>
        <PaypalPayButton amount={depositAmount} />
      </div>
    </div>
  )
}

export default DepositoPage
