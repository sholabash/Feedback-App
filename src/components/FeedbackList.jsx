import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeebackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete}) {

    const {feedback} = useContext(FeebackContext)

    if(!feedback || feedback.lenght === 0){
        return <p>No Feedback</p>}
  
  return (

    <div className='feedback-list'>
    <AnimatePresence>
    {feedback.map((feedbacks) => (
        <motion.div
        key={feedbacks.id}
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
        <FeedbackItem 
        key={feedbacks.id}
         feedbacks={feedbacks}
         handleDelete={handleDelete}

        />
        </motion.div>
    ))}
    </AnimatePresence>
        
    </div>

    // <div className='feedback-list'>
    // {feedback.map((feedbacks) => (
    //     <FeedbackItem 
    //     key={feedbacks.id}
    //      feedbacks={feedbacks}
    //      handleDelete={handleDelete}
    //     />
    // ))}
        
    // </div>
  )
}

// FeedbackList.defaultProps ={
//     feedback: PropTypes.arrayOf( 
//     PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired
//     })
//     ),
// }
export default FeedbackList