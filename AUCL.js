import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Custom Auth0 Login</h2>

      {!isAuthenticated ? (
        <>
          <p>Click below to log in:</p>
          <button onClick={() => loginWithRedirect()} style={buttonStyle}>
            Log In
          </button>
        </>
      ) : (
        <>
          <h3>Welcome, {user.name}!</h3>
          <img src={user.picture} alt="Profile" width="100" style={{ borderRadius: "50%" }} />
          <p>Email: {user.email}</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={logoutButton}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
};

const logoutButton = {
  ...buttonStyle,
  backgroundColor: "red",
};

export default Login;
