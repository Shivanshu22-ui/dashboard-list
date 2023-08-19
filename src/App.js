import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Authentication */}
          <Route path="/login" Component={Login} />
          <Route path="*" Component={DefaultLayout} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
