import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Content/Profile/Profile";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Photo from "./components/Content/Photo/Photo";
import Settings from "./components/Content/Settings/Settings";
import UsersContainer from "./components/Content/Users/UsersContainer";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <NavBar/>
        <div className="app_content">

          {/* ===== Profile Page ===== */}
          <Route
            path='/profile'
            render={() =>
              <Profile/>
            }/>

          {/* ===== Messages Page ===== */}
          <Route
            path='/messages'
            render={() =>
              <MessagesContainer/>
            }/>

          {/* ===== Photo Page ===== */}
          <Route
            path='/photo'
            component={Photo}
          />

          {/* ===== News Page ===== */}
          <Route
            path='/news'
            component={News}
          />

          {/* ===== Settings Page ===== */}
          <Route
            path='/settings'
            component={Settings}
          />

          {/* ===== Users Page ===== */}
          <Route
            path='/users'
            render={() =>
              <UsersContainer/>
            }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
