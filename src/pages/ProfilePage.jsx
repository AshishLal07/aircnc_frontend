/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect, useState} from 'react';
import {userContext} from '../UserContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import AccountNav from './container/AccountNav';

const ProfilePage = () => {
	const {user, render, setUser} = useContext(userContext);
	const [redirect, setRedirect] = useState('');
	const Navigate = useNavigate();

	useEffect(() => {
		if (render && Object.keys(user).length <= 0) {
			Navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [render, user]);

	// console.log(subpage);

	async function logOut() {
		await axios.post('/logout');
		setRedirect('/');
		setUser({});
	}

	if (redirect) {
		Navigate(redirect);
	}

	return (
		<div>
			<AccountNav />

			<div className="max-w-lg m-auto text-center">
				<p>
					Logged in as {user.name} ({user.email})
				</p>
				<button onClick={logOut} className="primary mt-2 max-w-sm ">
					Log Out
				</button>
			</div>
		</div>
	);
};

export default ProfilePage;
