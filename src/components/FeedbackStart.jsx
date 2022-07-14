import React from 'react'
import { useContext } from 'react'
import FeebackContext from '../context/FeedbackContext'



function FeedbackStart({}) {
  const {feedback} = useContext(FeebackContext)

    let average = feedback.reduce((acc,cur)=>
    {
        return acc + cur.rating
    }, 0) / feedback.length
    
average = average.toFixed(1)

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


// FeedbackStart.propTypes ={
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStart