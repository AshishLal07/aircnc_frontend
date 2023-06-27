import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

Link;
const Register = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const Navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		const newUser = await axios.post('/register', {
			name,
			email,
			password,
		});
		if (newUser) {
			// console.log(newUser);
			Navigate('/login');
		}
	}

	return (
		<>
			<div className="mt-4 grow flex items-center justify-around ">
				<div className="mb-64">
					<h1 className="text-center text-4xl mb-4">Register</h1>
					<form className="max-w-md m-auto" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Enter your name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></input>
						<input
							type="email"
							placeholder="your@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="primary">Register</button>
						<div className="pt-2 text-center text-gray-500">
							Already a member?{' '}
							<Link className="text-black underline" to={'/login'}>
								{' '}
								Login here
							</Link>{' '}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
