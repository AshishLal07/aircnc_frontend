import {useEffect, useState} from 'react';
import AccountNav from './container/AccountNav';
import axios from 'axios';
import PlaceImg from './container/PlaceImg';
import {Link} from 'react-router-dom';
import BookingDates from './container/BookingDates';

const BookingPage = () => {
	const token = localStorage.getItem('token');
	const [bookings, setBookings] = useState([]);
	useEffect(() => {
		axios
			.get('/bookings', {
				headers: {Authorization: `Bearer ${token}`},
			})
			.then((res) => {
				setBookings(res.data);
				// console.log(res.data);
			});
	}, [token]);

	return (
		<div>
			<AccountNav />

			{bookings.length > 0 &&
				bookings.map((booked, index) => (
					<Link
						to={`/account/booking/${booked._id}`}
						className="flex gap-4 bg-gray-300 rounded-2xl overflow-hidden mb-2
                    "
						key={index}
					>
						<div className="w-52 h-52">
							<PlaceImg place={booked.place}></PlaceImg>
						</div>
						<div className="p-2">
							<h2 className="text-2xl underline">{booked.place.title}</h2>
							<BookingDates
								booked={booked}
								className={' text-gray-500'}
							></BookingDates>
							<p className="text-xl">
								|<span className=""> Total Price: ${booked.price}</span>
							</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default BookingPage;
