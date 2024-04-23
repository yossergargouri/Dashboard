import  { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import AdmsignIn from './pages/Authentication/Admsignin';
import Chart from './pages/Chart';
import Upload from './pages/Form/Upload';
import Contact from './pages/Form/Contact';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Admsettings from './pages/Admsettings';
import Details from './pages/Details';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Analyse from './pages/Analyse';
import Netshift from './pages/Dashboard/Netshift';
import NetshiftAdm from './pages/Dashboard/NetshiftAdm';
import Admprofile from './pages/Admprofile';
import Usersprofile from './components/Chat/Usersprofile';
import Updateuser from './pages/Updateuser';
import AuthProtected from './pages/Authentication/authprotected';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

 
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
          <>
            <Route
              index
              element={
                <>
                  <PageTitle title="Netshift Advisor" />
                  <AuthProtected>
                  <Netshift />
                  </AuthProtected>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <PageTitle title="Profile" />
                  <Profile />
                </>
              }
            />
            <Route
              path="/Admprofile"
              element={
                <>
                  <PageTitle title="AdmProfile" />
                  <Admprofile />
                </>
              }
            />
            <Route
              path="/Usersprofile"
              element={
                <>
                  <PageTitle title="UsersProfile" />
                  <Usersprofile />
                </>
              }
            />
            <Route
              path="/NetshiftAdm"
              element={
                <>
                  <PageTitle title="NetshiftAdm" />
                  <NetshiftAdm/>
                </>
              }
            />
            <Route
              path="/Analyse"
              element={
                <>
                  <PageTitle title="Analyse" />
                  <Analyse/>
                </>
              }
            />
            <Route
              path="/Upload"
              element={
                <>
                  <PageTitle title="Upload " />
                  <Upload />
                </>
              }
            />
            <Route
              path="/Contact"
              element={
                <>
                  <PageTitle title="Contact " />
                  <Contact/>
                </>
              }
            />
            <Route
              path="/Details"
              element={
                <>
                  <PageTitle title="Details" />
                  <Details />
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <PageTitle title="Settings" />
                  <Settings />
                </>
              }
            />
            <Route
              path="/Updateuser"
              element={
                <>
                  <PageTitle title="Updateuser" />
                  <Updateuser />
                </>
              }
            />
            <Route
              path="/Admsettings"
              element={
                <>
                  <PageTitle title="Admsettings" />
                  <Admsettings />
                </>
              }
            />
            <Route
              path="/chart"
              element={
                <>
                  <PageTitle title="Basic Chart" />
                  <Chart />
                </>
              }
            />
            <Route
              path="/ui/alerts"
              element={
                <>
                  <PageTitle title="Alerts " />
                  <Alerts />
                </>
              }
            />
            <Route
              path="/ui/buttons"
              element={
                <>
                  <PageTitle title="Buttons " />
                  <Buttons />
                </>
              }
            />
         
           
          </>
  
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/auth/Admsignin"
          element={
            <>
              <PageTitle title="Signin " />
              <AdmsignIn />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
