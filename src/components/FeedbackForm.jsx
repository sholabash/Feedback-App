import React, {useState, useContext} from 'react'
import Cards from './shared/Cards'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeebackContext from '../context/FeedbackContext'


function FeedbackForm() {


    const [text, setText] = useState('')
    const [rating, setRating] = useState('')
    const [btnDisable, setbtnDisable] = useState(true);
    const [meassage, setMessage] = useState('');


    const {addFeedback} = useContext(FeebackContext)
    

    function handleTextChange(e) {
        if(text === ''){
            setbtnDisable(true)
            setMessage(null)

        }
        else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 chatacters')
            setbtnDisable(true)
        }else{
            setMessage(null)
            setbtnDisable(false)
        }


       setText(e.target.value)
    }
const handleSubmit = (e) => {
e.preventDefault()
if(text.trim().length > 10){
    const newFeedback ={
       text,
       rating 
    }
    addFeedback(newFeedback);

     setText(' ');
}
}
  return (
    <Cards>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service ? </h2>
            <RatingSelect 
            select={(rating) => {
                setRating(rating)

            }} />
            <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Write a Review' value={text} />
            <Button  type='submit' isDisabled={btnDisable} >Send</Button>

            </div>
            {meassage && <div className='message'>{meassage}</div>}
        </form>
    </Cards>
  )
}

export default FeedbackForm