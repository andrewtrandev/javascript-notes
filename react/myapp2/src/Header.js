import React from "react";

// const h1Style = {
//     backgroundColor:"blue"
// }

// we can style in index.html and assign classes

// we can also style by setting a constant

// can also have a separate css file that you import 

const Header = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "white" }}>Andy's Site</h1>
      My greeting is: wasup

      <h1 className="my-header">Tessst</h1>
    </div>
  );
};

export default Header;
