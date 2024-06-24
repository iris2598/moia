import "./App.css";
import { useLocation, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { lazy, Suspense } from "react";
import { Loading } from "./components/layout/Loading";
import Interactive from "./components/pages/Interactive";
import Adoption from "./components/pages/Adoption";
import Appointment from "./components/pages/Appointment";
import Login from "./components/pages/Login";
// import Introduction from "./components/pages/Introduction";

const Introduction = lazy(() => import("./components/pages/Introduction"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/moia" element={<Interactive />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='*' element={<NotFound />} />
                  <Route path='/' element={<Navigate to='/auth' />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/auth' element={<Auth />} />
                  <Route path='/onboarding/:step' element={<Onboarding />} />
                  <Route path='/join' element={<Join />} /> */}
          </Routes>
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
