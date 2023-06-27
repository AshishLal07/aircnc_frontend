import axios from 'axios';
import {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {userContext} from '../UserContext.jsx';

const LoginPage = () => {
	const [login, setLogin] = useState({email: '', password: ''});
	// const [validUser, setValid] = useState(false);
	const Navigate = useNavigate();
	const {setUser, setToken} = useContext(userContext);

	const setValue = (e) => {
		setLogin({...login, [e.target.name]: e.target.value});
	};

	const hasJWT = (user, token) => {
		localStorage.setItem('token', token);
		localStorage.setItem('userId', user._id);
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const validUser = await axios.post('/login', {
				...login,
			});

			if (validUser) {
				// console.log(validUser.data);
				hasJWT(validUser.data.validUser, validUser.data.token);
				setUser(validUser.data.validUser);
				setToken(validUser.data.token);
				Navigate('/');
			}
		} catch (err) {
			console.log(err);
			alert('if Not a user SignUp to be member');
		}
	};
	return (
		<div className="mt-4 grow flex items-center justify-around ">
			<div className="mb-64">
				<h1 className="text-center text-4xl mb-4">Login</h1>
				<form className="max-w-md m-auto" onSubmit={handleSubmit}>
					<input
						name="email"
						type="email"
						placeholder="your@email.com"
						value={login.email}
						onChange={setValue}
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={login.password}
						onChange={setValue}
					/>
					<button className="primary">Login</button>
					<div className="pt-2 text-center text-gray-500">
						Don&apos;t have account yet?{' '}
						<Link className="text-black underline" to={'/register'}>
							{' '}
							Register Now
						</Link>{' '}
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
