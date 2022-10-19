import { Route, Routes } from "react-router";
import Header from "./components/header/Header.component";
import ForgetPassword from "./pages/forgetpassword/ForgetPassword.page";
import Home from "./pages/home/Home.page";
import Offer from "./pages/offers/Offer.page";
import Profile from "./pages/profile/Profile.page";
import SignIn from "./pages/signin/SignIn.page";
import SignUp from "./pages/signup/SignUp.page";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/offers' element={<Offer />} />
				<Route path='/forget-password' element={<ForgetPassword />} />
			</Routes>
		</>
	);
}

export default App;
