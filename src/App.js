
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStart from "./components/FeedbackStart"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage";
import AboutIconList from "./components/AboutIconList";
import {FeedbackProvider} from "./context/FeedbackContext"


function App() {


      return (
      
      <FeedbackProvider>
        <Router>
          <Header />
      
        <div className="container">
        <Routes>
        <Route exact path='/' element={
          <>
             <FeedbackForm />
        <FeedbackStart />
        <FeedbackList />
          </>
        }></Route>
       
          <Route path='/about' element={<AboutPage />} />

    
        
          </Routes>
          
          <AboutIconList />
     
        </div>

        </Router>
        </FeedbackProvider>
    )
    
}
export default App;