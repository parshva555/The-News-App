// import logo from './logo.svg';
import "./App.css";

import News from "./components/News";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NewsItem from './components/NewsItem';

const App = () => {
  // c='Parshva';
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="general"
                  apiKey={apiKey} 
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="business"
                  apiKey={apiKey} 
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                  apiKey={apiKey} 
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="health"
                  apiKey={apiKey} 
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="science"
                  apiKey={apiKey} 
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                  apiKey={apiKey} 
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  setProgress={setProgress}
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                  apiKey={apiKey} 
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;