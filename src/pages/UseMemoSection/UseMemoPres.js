import React from 'react'

const UseMemo = () => {
  const [count, setCount] = React.useState(0);
  const [otherValue, setOtherValue] = React.useState(0);

  const ExpensivFonction = () => {
    console.log("un calcul complique")
    let result =  0
    for (let index = 0; index < 1000000; index++) {
      result += 1
      
    }
    return result + count
  }
  return (
    <div>
      <p>Count : {count} </p>
      <p>otherValue : {otherValue} </p>
      <p>Result (fonction ) : {ExpensivFonction()}</p>
      <button onClick={()=> setCount( prevState => {
        console.log(prevState)
        return prevState+1
      } )}>Increment</button>
      <button onClick={()=> setOtherValue( v => v+1 )}>Increment</button>
    </div>
  )
}

export default UseMemo
