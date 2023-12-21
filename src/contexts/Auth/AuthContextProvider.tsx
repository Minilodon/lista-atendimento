import { User } from "firebase/auth";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";

interface AuthContextValue {
	currentUser: User | null;
}

export const AuthContext = createContext<AuthContextValue>(
	{} as AuthContextValue,
);

type AuthContextProviderProps = {
	children: ReactNode;
};

export default function AuthContextProvider(props: AuthContextProviderProps) {
	const { children } = props;
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value: AuthContextValue = React.useMemo(
		() => ({
			currentUser,
		}),
		[currentUser],
	);

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
