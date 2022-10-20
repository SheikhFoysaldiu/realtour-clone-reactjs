import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

export const useAuthStatus = () => {
	const [loggedIn, setloggedIn] = useState(false);
	const [checkStatus, setcheckStatus] = useState(true);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setloggedIn(true);
			}
			setcheckStatus(false);
		});
	}, []);
	return { loggedIn, checkStatus };
};
