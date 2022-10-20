import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header.component";
import ForgetPassword from "./pages/forgetpassword/ForgetPassword.page";
import Home from "./pages/home/Home.page";
import Offer from "./pages/offers/Offer.page";
import Profile from "./pages/profile/Profile.page";
import SignIn from "./pages/signin/SignIn.page";
import SignUp from "./pages/signup/SignUp.page";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute.component";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>

				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/offers' element={<Offer />} />
				<Route path='/forget-password' element={<ForgetPassword />} />
			</Routes>
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
}

export default App;
