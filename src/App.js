import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
import { CircularProgress } from "@mui/material";
import Loader from "./component/homepage/loader/loader";
import Associates from "./component/associates/associates";
import Listing from "./component/listing/listing";
import Details from "./component/details/details";
import Navbar from "./component/layout/navbar/navbar";
import Contact from "./component/contact/contact";

// import Homepage from './component/homepage/homepage';

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
          exact
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
          path="/listing"
          element={
            <React.Suspense fallback={<Loader />}>
              <Navbar color={"bg-black"} position={"fixed"} />
              <Listing />
            </React.Suspense>
          }
        />

        <Route
          path="/details"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black "} position={"fixed"}>
                <Details />
              </Layout>
            </React.Suspense>
          }
        />

        <Route 
          path="/contact"
          element={
            <React.Suspense fallback={<Loader />}>
              <Layout color={"bg-black"} position={'fixed'}>
                <Contact />
              </Layout>
            </React.Suspense>
          }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
