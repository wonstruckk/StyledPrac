import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

//darkTheme일때 하위 textColor,backgroundColor에 접근가능함. theme.객체를통해서.
//동일한 요소이름을 가지고 있어야 모드변경시에 이름바꿀필요가 없기때문에 똑같아야 한다. ******
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
