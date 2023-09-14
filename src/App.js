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
import Blog from "./component/blog/blog";
import BuyerLogin from "./component/login/buyer";
import SellerLogin from "./component/login/seller";
import AgentLogin from "./component/login/agent";
import OtherLogin from "./component/login/other";
import SubscriptionPlan from "./component/subscription/subscription";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
const Homepage = React.lazy(() => import("./component/homepage/homepage"));
const Layout = React.lazy(() => import("./component/layout/layout"));

const stripePromise = loadStripe(
  "pk_test_51NYpvdSAZNGXCUBfO5XxuKv9f5zrPEyWJZVvNCnikn8rUhRvzltRXi0IJJq12qprDc1g6iAvNoEvUVcwxqaAFqhX009NscTgJF"
);

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
            <>
              <Navbar color={"bg-black"} position={"fixed"} />
              <Listing />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout color={"bg-black"} position={"fixed"}>
              <Contact />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Navbar color={"bg-black"} position={"fixed"} />
              <Profile />
            </>
          }
        />
        <Route
          path="/associate"
          element={
            <Layout color={"bg-black"} position={"fixed"}>
              <Associates />
            </Layout>
          }
        />

        <Route
          path="/agentDetails"
          element={
            <Layout color={"bg-black"} position={"fixed"}>
              <AgentDetails />
            </Layout>
          }
        />

        <Route
          path="/valuation"
          element={
            <Layout color={"bg-black"} position={"fixed"}>
              <Valuation />
            </Layout>
          }
        />

        <Route
          path="/blog"
          element={
            <Layout color={"bg-black"}>
              <Blog />
            </Layout>
          }
        />

        {/* login router */}

        <Route
          path="buyerLogin"
          element={
            <Layout color={"bg-black"} position={"fixed"}>
              <BuyerLogin />
            </Layout>
          }
        />

        <Route
          path="sellerLogin"
          element={
            <>
              <Navbar color={"bg-black"} position={"fixed"} />
              <SellerLogin />
            </>
          }
        />

        <Route
          path="agentLogin"
          element={
            <>
              <Navbar color={"bg-black"} position={"fixed"} />
              <AgentLogin />
            </>
          }
        />

        <Route
          path="subscription"
          element={
            <>
              <Layout color={"bg-black"} position={"fixed"}>
                <Elements stripe={stripePromise}>
                  <ElementsConsumer>
                    {({ elements, stripe }) => (
                      <SubscriptionPlan elements={elements} stripe={stripe} />
                    )}
                  </ElementsConsumer>
                </Elements>
              </Layout>
            </>
          }
        />

        <Route
          path="otherLogin"
          element={
            <>
              <Navbar color={"bg-black"} position={"fixed"} />
              <OtherLogin />
            </>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
