import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeTable from './Timetable/Timetable';
import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';
import Register from '../src/components/register/Register';
import LandingPage from './pages/landingPage/LandingPage';
import Recipe from './RecipeDashboard/Recipe';
import ArhiveDashboard from './ArhiveDashboard/ArhiveDashboard';
import ResetPassword from './pages/resetPassword/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
import UserProfile from './components/UserProfile';
import RecipeTimetable from '../src/pages/RecipeTimetable';
import ForgetPassword from './components/ForgetPasword/ForgetPassword';
import Login from './pages/loginpage/Login';
import VerifyEmail from './pages/verifypage/VerifyEmail';
import UserPopulatedTable from './components/userPopulatedtable/UserPopulatedTable';
import MealPopulatedTable from './components/mealPopulated/MealPopulatedTable';

import RecipeConfirmDetails from './RecipeConfirmDetails/RecipeConfirmDetails';
import CreateRecipe from './components/CreateRecipe/CreateRecipe/createRecipe';
import RecipeSuccess from './components/RecipeSuccess/RecipeSuccess';
import RecipeWarning from './components/RecipeWarning/RecipeWarning';
import EmailConfirm from './EmailConfirmation/EmailConfirm';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/timetable"
            element={(<TimeTable />) as React.ReactElement}
          />
          <Route
            path="/create"
            element={(<CreateTable />) as React.ReactElement}
          />
          <Route
            path="/Continue"
            element={(<ConfirmDetails />) as React.ReactElement}
          />
          <Route index={true} element={<LandingPage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<VerifyEmail/>}/>
          <Route path="/recipetimetable" element={(<RecipeTimetable />) as React.ReactElement}/>
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="update-password" element={<UpdatePassword />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="usertable" element={<UserPopulatedTable/>} />
          <Route path="mealtable" element={<MealPopulatedTable/>}/>
          <Route path="user-profile" element={ <UserProfile />} />
          <Route path='recipe' element={<Recipe />} />
          <Route path='recipe-confirm' element={<RecipeConfirmDetails />} />
          <Route path='create-recipe' element={< CreateRecipe />} />
          <Route path='successful' element= {<RecipeSuccess/>} />
          <Route path='warning' element = {<RecipeWarning/>} />
          <Route path='Archive' element= {<ArhiveDashboard/>} />
          <Route path='EmailConfirm' element= {<EmailConfirm/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
