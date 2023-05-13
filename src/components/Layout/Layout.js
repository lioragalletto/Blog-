import React from 'react'

import Navbar from '../NavBar/NavBar'
import Footer from '../../pages/CV/Footer/Footer'

   



const Layout =({children,footer}) => {

 

  

  return (
    <>
     
     <Navbar/>
     {children} 
     {footer === true  &&
     <Footer />
    }

    
   
    </>
  )
}

export default Layout