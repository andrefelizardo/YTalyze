import { createRootRoute, Outlet } from "@tanstack/react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const Route = createRootRoute({
  component: () => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Outlet />
    </GoogleOAuthProvider>
  ),
});
