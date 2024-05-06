import React from "react";
import { Link } from "@ioncore/theme/Link";
import logo from "../../assets/logo.svg";
import BaseApi from "../../Api/BaseApi";
import "./Home.scss";
import SocketApi from "../../Api/SocketApi";

function HomePage() {
  const user = BaseApi.getUser();

  React.useEffect(() => {
    const [send, unsub] = SocketApi.subscribe("__echo", (data) => {
      console.log(data);
    });

    send("Test Data Echo!");
    return unsub;
  }, []);

  return (
    <div className="desktop-container">
      <header className="taskbar">
        <img src={logo} className="app-logo" alt="logo" />
        <Link href="/login">{user ? `Hello, ${user.username}` : "Login"}</Link>
        {user && user.isAdmin && (
          <Link href="/admin">Admin Dashboard</Link>
        )}
      </header>
      <main className="desktop">
        <div className="icon" onClick={() => console.log("Open App")}>
          <img src={logo} alt="App Icon" />
          <span>Application</span>
        </div>
      </main>
      <footer className="system-tray">
        <span>Connected</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </footer>
    </div>
  );
}

export default HomePage;
