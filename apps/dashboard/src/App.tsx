import { Login } from "./pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Login />
    </GoogleOAuthProvider>
  );
}

export default App;
