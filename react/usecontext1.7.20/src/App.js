import React, { useState } from "react";
import Card from "./Card";
import Header from './Header'
import AppContext, {themes, CustomAppProvider} from "./context"
import ThemeToggler from './ThemeToggler'

const App = () => {
  
  return (
    <div>
       {/* <ThemeToggler onToggle={() => {setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light)}}/>

      <button onClick={() => {setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
        }}
      >Toggle theme</button> */}

      {/* we can pass values down to the wrapped components using the AppContext.Provider wrapper */}
    

      {/* we can also create our own custom app provider that will hold logic in it,
      ask mike at a high level what we're doing here*/}
      <CustomAppProvider>
        <Header />
        <Card />
      </CustomAppProvider>
    </div>
  );
};



export default App;
