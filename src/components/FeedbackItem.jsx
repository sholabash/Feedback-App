import React, {useState} from 'react'
import Cards from './shared/Cards'
import { useContext } from 'react'
import PropTypes  from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import FeebackContext from '../context/FeedbackContext'


function FeedbackItem({feedbacks}) {
  const {deleteFeedback} = useContext(FeebackContext)

  return (
    <Cards>
        <div className='num-display'>{feedbacks.rating}</div>
        <button className='close'>
          <FaTimes onClick={() => deleteFeedback(feedbacks.id)} color='purple' />
        </button>
        <div className='text-display'>{feedbacks.text}
        </div>
      </Cards>
  )
}

FeedbackItem.defaultProps = {
  feebacks: PropTypes.object.isRequired,
}

export default FeedbackItem