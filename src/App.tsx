import "./App.css";
import { Header } from "./components/Header";

import { BrowserRouter } from "react-router-dom";
import { Routing } from "./components/Routing";

/**
 * * [ROUTER PROPS]
 * * basename: string
 * * getUserConfirmation: func -> Function to use to confirm navigation (default: windows.confirm)
 * * forceRefresh: bool -> If true the router will use full page refreshes on page navigation
 * * keyLength: number -> The length of location.key. (default: 6)
 */

/* <BrowserRouter basename="/calendar">
    <Link to="/today"/> // renders <a href="/calendar/today">
    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
   </BrowserRouter> */

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
