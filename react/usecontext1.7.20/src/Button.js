import React, {useContext} from "react";
import AppContext from './context'

const Button = () => {

    const appContext = useContext(AppContext)

  return <button style={appContext.currentTheme}>Go to site</button>;
};

export default Button;
