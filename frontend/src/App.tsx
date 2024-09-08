import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import * as React from "react";

function App() {
  return (
    // <ThemeProvider theme={theme}>

    <React.StrictMode>
      <div className="App">
        <AppRoutes />
      </div>
      {/* </ToggleColorMode> */}
    </React.StrictMode>
    // </ThemeProvider>
  );
}

export default App;
