import axios from 'axios';
import {useContext, useState} from 'react';
import {differenceInCalendarDays} from 'date-fns';
import {useNavigate} from 'react-router-dom';
import {userContext} from '../../UserContext';

/* eslint-disable react/prop-types */
const Booking = ({house}) => {
	const {user} = useContext(userContext);
	const Navigate = useNavigate();
	// console.log(user);

	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [guest, setGuest] = useState(1);
	const [name, setName] = useState(user.name);
	const [mobNo, setMobNo] = useState('');
	const [redirect, setRedirect] = useState('');
	// const [email, setEmail] = useState('abc@email.com');

	let numberOfNights = 0;
	if (checkIn && checkOut) {
		numberOfNights = differenceInCalendarDays(
			new Date(checkOut),
			new Date(checkIn)
		);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const price = numberOfNights * house.price;
		if (Object.keys(user).length > 0) {
			// console.log(user);
			const data = {
				place: house._id,
				user: user.id,
				price,
				checkIn,
				checkOut,
				guest,
				name,
				mobNo,
			};

			axios.post('/reserve', data).then((res) => {
				// console.log(res.data.data._id);
				const bookingId = res.data.data._id;
				setRedirect(`/account/booking/${bookingId}`);
			});
		} else {
			setRedirect('/login');
		}
	};

	if (redirect) {
		return Navigate(redirect);
	}

	return (
		<div>
			<div className="bg-white shadow p-4 rounded-2xl">
				<div className="text-2xl py-2">Price: ${house.price} /night </div>

				<div className="mt-4 border border-gray-400 rounded-t-2xl">
					<div className="flex border-b border-gray-400 ">
						<div className="py-2 px-4 border-r border-gray-400 ">
							<label className="text-xs font-semibold  tracking-tight">
								CHECK-IN{' '}
							</label>
							<input
								onChange={(e) => setCheckIn(e.target.value)}
								value={checkIn}
								type="date"
							></input>
						</div>
						<div className="py-2 px-4 ">
							<label className="text-xs font-semibold tracking-tight">
								CHECK-OUT
							</label>
							<input
								onChange={(e) => setCheckOut(e.target.value)}
								value={checkOut}
								type="date"
							></input>
						</div>
					</div>
					<div className="py-2 px-4">
						<label className=" text-xs font-semibold  tracking-tight ">
							{' '}
							Guest
						</label>
						<input
							className="border-none"
							onChange={(e) => setGuest(e.target.value)}
							type="number"
							value={guest}
						/>
					</div>
					{numberOfNights > 0 && (
						<>
							<div className="py-2 px-4">
								<label className=" text-xs font-semibold  tracking-tight ">
									{' '}
									Name
								</label>
								<input
									className="border-none"
									onChange={(e) => setName(e.target.value)}
									type="text"
									value={name}
								/>
							</div>
							<div className="py-2 px-4">
								<label className=" text-xs font-semibold  tracking-tight ">
									{' '}
									Mobile Number
								</label>
								<input
									className="border-none"
									onChange={(e) => setMobNo(e.target.value)}
									type="number"
									value={mobNo}
								/>
							</div>
						</>
					)}
				</div>
				<button
					onClick={(e) => handleSubmit(e)}
					value={guest}
					className="primary my-4"
				>
					Reserve
				</button>
				{numberOfNights > 0 && (
					<div className="border-t font-light border-gray-400 p-2 flex justify-between">
						<span>For {numberOfNights} nights total would be</span>
						<span className="ml-">${numberOfNights * house.price}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Booking;
