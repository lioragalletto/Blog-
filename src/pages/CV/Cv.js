
import React from 'react'
import Header from '../CV/Header/Header';
import Navbar from '../../components/NavBar/NavBar'
import Footer from '../CV/Footer/Footer'
import SectionPresentation from '../CV/SectionPresentation/SectionPresentation'
import Main from '../CV/Main/Main'

const Cv = () => {
    
    const [name, setName] = React.useState("Liora Galletto");

    const HandleName = (cb) => {
       setName(cb)
    }

  return (
    <div className="">
      <header>
        <Header name={name} />
        <Navbar />
      </header>

      <SectionPresentation  />
      <Main
         HandleName={HandleName}
       />

      <Footer name={name} />
    </div>
  )
}

export default Cv