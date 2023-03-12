import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import './Result.css'

const Result = () => {
  return (
    <motion.div 
        animate={{ y:[100,0] }}
        transition={{ type: "spring", duration: 4 }}
          whileInView={{
            
            opacity:[0,1],
            transition: { duration: 2 },
          }}
        className='app_result'
    >

        <div className='app_brandName'>
           <h1>Parinaam</h1>
        </div>

         <p className='app_subHeading'>by <span>RollingNotes</span></p>

        <div className='app_button'>
             <p>Plan your Future With Us</p>
             <p>Get all your results at one place</p>
            <Link to='/state'><button className='app_resultBtn'>Get Result</button></Link> 
        </div>
       
    </motion.div>
  )
}

export default Result;