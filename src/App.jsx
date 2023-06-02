import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Navbar,
  Sidebar,
  Listing,
  Revenue,
  SaleProgress,
  EmployeeData,
} from "./components";
import { dashboard, navbar, revenue, saleProgress } from "./data/dummy";

import profile from "./asset/avatar.jpg";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative ">
          {/* LEFT SIDE */}

          {activeMenu ? (
            /* SIDEBAR CODE IS HERE */
            <div className="w-72 fixed  ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 ">sidebar w-0</div>
          )}
          {/* RIGHT SIDE  */}
          <div
            className={
              activeMenu
                ? " bg-main-bg min-h-screen md:ml-72 w-full"
                : "bg-main-bg  w-full min-h-screen flex-2"
            }
          >
            {/* NAVBAR CODE IS HERE */}
            <div className="fixed md:static bg-main-bg  navbar w-full">
              <Navbar navbar={navbar} profile={profile} />
            </div>
            {/* PAGES CODE IS HERE */}

            <div>
              <Routes>
                {/* dashboard */}

                <Route
                  path="/"
                  element={
                    <Dashboard
                      dashboard={dashboard}
                      revenue={revenue}
                      saleProgress={saleProgress}
                      Listing={Listing}
                      Revenue={Revenue}
                      SaleProgress={SaleProgress}
                    />
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <Dashboard
                      dashboard={dashboard}
                      revenue={revenue}
                      saleProgress={saleProgress}
                      Listing={Listing}
                      Revenue={Revenue}
                      SaleProgress={SaleProgress}
                    />
                  }
                />

                {/* Pages */}

                {/* <Route path="/orders" element={<Orders />} /> */}
                <Route path="/employees" element={<EmployeeData />} />
                <Route path="/Orders" element="Orders" />
                <Route path="/customers" element="customers" />

                {/* Apps */}

                <Route path="/stats" element="stats" />
                <Route path="/finances" element="finances" />
                <Route path="/" element="marketing" />
                <Route path="/" element="integrations" />
                <Route path="/reports" element="reports" />
                <Route path="/settings" element="settings" />

                {/* Insights */}

                <Route path="/inbox" element="inbox" />
                <Route path="/notifications" element="notifications" />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
