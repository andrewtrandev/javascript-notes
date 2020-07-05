import React, {useState} from 'react'
import Counter, {FuncCounter} from './Counter'
import One from './One'

//creating a global context
//wrap the elements that you want to provide values to with the AppContext.Provider

export const AppContext = React.createContext()


const App = () => {

  const [myState, setMyState] = useState("MY STATE")

  const globalContext = {
      name: "Mike",
      myState: myState
  }



    return (
      <div>
        {/* <Counter />
        <FuncCounter /> */}

        <AppContext.Provider value={globalContext}>
          <One myState = {myState}/>
        </AppContext.Provider>
      </div>
  )
}

export default App 