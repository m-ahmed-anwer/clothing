import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navbar from "./components/navbar/navbar";
import SignIn from "./routes/sign-in/sign-in.component";
import { UserContext } from "./context/context.component";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route
          path="sign-up"
          element={currentUser ? <Navigate to="/" /> : <SignIn />}
        />
      </Route>
    </Routes>
  );
};

export default App;
