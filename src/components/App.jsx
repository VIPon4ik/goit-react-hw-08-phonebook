import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "pages/Login/Login";
import Registration from "pages/Registration";
import Contacts from "pages/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectToken } from "../redux/selectors";
import { signInByToken } from "../redux/operations";
import { token as authToken } from "../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => { 
    if (token) {
      authToken.setToken(token);
      dispatch(signInByToken(token));
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="logout" element={<p>Log Out</p>} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="editContact/:id" element={<p>Edit contact</p>} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};
