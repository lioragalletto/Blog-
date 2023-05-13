
import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import Compteur from "../../components/Compteur/Compteur"

const UseEffectVide = () => {

    const code = `  
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = 'le compteur est a $ {counter}' // les backticks on ete remplace par des singlequote pour laffichage
    }, [counter]);

    const Increment = () => {
        setCounter(counter +1)
    }

    return (
            <button className='btn btn-success' onClick={()=> Increment()}  >Increment +</button>
    )
    `

    return (
        <>
            <NavbarOffCanva />
            <div className="container">
                <h1>Presentation du useEffect[dependance]</h1>
                  <p>Chaque fois que counter changera de valeur, useEffect s'activera et le title de l'onglet changera de valeur</p>
                <div className="bg-dark text-light p-5 rounded-4">
                    <pre>{code}</pre>
                </div>
            </div>
            <Compteur />

        </>
    )
}

export default UseEffectVide