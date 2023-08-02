import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
import { CircularProgress } from "@mui/material";
import Loader from "./component/homepage/loader/loader";
import Associates from "./component/associates/associates";
import Listing from "./component/listing/listing";
import Navbar from "./component/layout/navbar/navbar";
import Contact from "./component/contact/contact";
import Profile from "./component/profile/profile";
import AgentDetails from "./component/associates/agentDetails/agentDetails";
import Valuation from "./component/valuation/valuation";
import Notfound from "./component/notfound/notfound";
import Blog from './component/blog/blog'

const Homepage = React.lazy(() => import("./component/homepage/homepage"));
const Layout = React.lazy(() => import("./component/layout/layout"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-[#323232] bg-opacity-70 "} position={"fixed"}>
                <Homepage />
              </Layout>
            </React.Suspense>
          }
        />

        <Route
          path="/listing"
          element={
            <React.Suspense fallback={<Loader />}>
              <Navbar color={"bg-black"} position={"fixed"} />
              <Listing />
            </React.Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black"} position={"fixed"}>
                <Contact />
              </Layout>
            </React.Suspense>
          }
        />

        <Route
          path="/profile"
          element={
            <React.Suspense>
              <Navbar color={"bg-black"} position={"fixed"} />
              <Profile />
            </React.Suspense>
          }
        />
        <Route
          path="/associate"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black"} position={"fixed"}>
                <Associates />
              </Layout>
            </React.Suspense>
          }
        />

        <Route
          path="/agentDetails"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black"} position={"fixed"}>
                <AgentDetails />
              </Layout>
            </React.Suspense>
          }
        />

        <Route
          path="/valuation"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black"} position={"fixed"}>
                <Valuation />
              </Layout>
            </React.Suspense>
          }
        />

        <Route
          path="/blog"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black"}>
                <Blog />
              </Layout>
            </React.Suspense>
          }
        />

        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loader />}>
              <Notfound />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
