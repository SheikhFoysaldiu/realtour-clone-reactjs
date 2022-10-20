import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../../hooks/useAuthStatus.hook";
export function PrivateRoute() {
	const { loggedIn, checkStatus } = useAuthStatus();

	if (checkStatus) return <h3>Loading</h3>;
	return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
}
