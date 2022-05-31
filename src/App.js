import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <h1>You Landed On Wrong Page Go Back To Website</h1>
            </>
          }
        />
        {/* I have added this route so if user entered any wrong route then only header will be visible and link to go on the main page */}

        {/* this is the new way of adding routes in react-dom-v 6, one iportant thing to understand if you want to wrap multiple things then use either div or <>..</> so that you can render multiple yhings in same route path */}

        {/* <Route path="/checkout">
          <Header />
          <h1>This is the checkout page</h1>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
