import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import PlantListPage from "pages/PlantListPage";
import SessionContext from "context/SessionContext";
import { useState } from "react";
import {
  getTokenSessionStorage,
  removeTokenSessionStorage,
  setTokenSessionStorage,
} from "services/user";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    getTokenSessionStorage()
  );
  return (
    <SessionContext.Provider
      value={{
        sessionToken: sessionToken,
        signIn: (token) => {
          setSessionToken(token);
          setTokenSessionStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          removeTokenSessionStorage();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/plants" element={<PlantListPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};
export default App;
