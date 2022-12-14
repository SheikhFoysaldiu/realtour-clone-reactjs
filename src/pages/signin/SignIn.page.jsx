import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../../components/oauth/OAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignIn = () => {
	const [showPassword, setshowPassword] = useState(false);
	const [formData, setformData] = useState({
		email: "",
		password: "",
	});
	const { email, password } = formData;
	const navigate = useNavigate();
	function handleChange(e) {
		setformData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const auth = getAuth();
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (userCredential.user) {
				navigate("/");
			}
		} catch (error) {
			toast.error("Bad user credential");
		}
	}

	return (
		<section>
			<h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
			<div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
				<div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
					<img
						className='w-full rounded-2xl'
						src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
						alt='key'
					/>
				</div>
				<div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
					<form onSubmit={handleSubmit}>
						<input
							className='mb-6 w-full px-4 py-2 text-xl
                            text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
							type='email'
							id='email'
							placeholder='Email Address'
							value={email}
							onChange={handleChange}
						/>
						<div className='relative mb-6'>
							<input
								className=' w-full px-4 py-2 text-xl
                            text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
								type={showPassword ? "text" : "password"}
								id='password'
								placeholder='Password'
								value={password}
								onChange={handleChange}
							/>
							{showPassword ? (
								<AiFillEyeInvisible
									className='absolute right-3 top-3 text-xl cursor-pointer'
									onClick={() => setshowPassword((state) => !state)}
								/>
							) : (
								<AiFillEye
									onClick={() => setshowPassword((state) => !state)}
									className='absolute right-3 top-3 text-xl cursor-pointer'
								/>
							)}
						</div>
						<div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
							<p className='mb-6'>
								Don't have an account?
								<Link
									className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
									to='/sign-up'
								>
									Register
								</Link>
							</p>
							<p>
								<Link
									className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
									to='/forget-password'
								>
									Forget Password?
								</Link>
							</p>
						</div>
						<button
							type='submit'
							className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
						>
							Sign In
						</button>
						<div className='flex items-center my-4 before:border-t  before:flex-1  before-border-gray-300  after:border-t  after:flex-1  before-border-gray-300'>
							<p className='text-center font-semibold mx-4'>OR</p>
						</div>
						<Oauth />
					</form>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
