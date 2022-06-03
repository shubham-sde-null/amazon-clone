import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User Is>>>>", authUser);
      if (authUser) {
        //user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      {/* here we are using header in every page so we are using outside of routes */}
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
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
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        {/* I have added this route so if user entered any wrong route then only header will be visible and link to go on the main page */}

        {/* this is the new way of adding routes in react-dom-v 6, one iportant thing to understand if you want to wrap multiple things then use either div or <>..</> so that you can render multiple yhings in same route path */}

        {/* <Route path="/checkout">
          <Header />
          <h1>This is the checkout page</h1>
        </Route> */}
        {/* I am not adding header at the gloabl instead i m adding it inside particular path because I don't want to show my header during login page */}
      </Routes>
    </div>
  );
}

export default App;
