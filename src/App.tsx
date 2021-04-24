import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Header from "./Common/Components/Header";
import Navbar from "./Common/Components/Navbar";
import { theme } from "./Common/Css/GlobalStyles.css";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Navbar />
        Going to build an ecommerce Site
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
