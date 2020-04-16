import React from "react";
import { Container, Typography } from "@material-ui/core";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      {/* <Navbar />
      <SideBar /> */}
      <Container fixed>
        <Introduction />
      </Container>
    </div>
  );
}

export default App;
