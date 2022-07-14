import { Context, createContext, useState } from "react"
import exports from "webpack"
import { v4 as  uuidv4} from "uuid";

const FeebackContext = createContext()


export const FeedbackProvider = ({children}) =>{

    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'this item is from cotext',
        rating: 10
 },
 ])

 const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback])

  }


 const deleteFeeback = (id) =>{
    if(window.confirm("Are you sure you want to delete")){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
   
  }

    return <FeebackContext.Provider value={{
            feedback,
            deleteFeeback,
            addFeedback,
        }}>

    </FeebackContext.Provider>
}
 export default FeebackContext