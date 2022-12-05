import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import { store } from './redux/store';

import App from "./App";

import "./index.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
    <Toaster
      position="top-center"
      reverseOrder={true}
    />
  </>
);
