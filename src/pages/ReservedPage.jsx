import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AddressPage from './container/AddressPage';
import PlaceGallery from './container/PlaceGallery';
import BookingDates from './container/BookingDates';

const ReservedPage = () => {
	const {id} = useParams();
	const token = localStorage.getItem('token');

	const [booking, setBooking] = useState(null);

	useEffect(() => {
		axios
			.get('/bookings', {
				headers: {Authorization: `Bearer ${token}`},
			})
			.then((res) => {
				console.log(res);
				const foundBooking = res.data.find(({_id}) => _id === id);

				if (foundBooking) {
					setBooking(foundBooking);
				}
				// console.log(booking);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!booking) {
		return '';
	}

	return (
		<div className="mt-6 lg:w-3/4 lg:h-screen lg:m-auto lg:mt-4">
			<h2 className="text-3xl">{booking.place.title}</h2>
			<AddressPage>{booking.place.address}</AddressPage>
			<PlaceGallery house={booking.place}></PlaceGallery>
			<div className="bg-gray-300 mt-4 p-4 rounded-2xl flex justify-between">
				<div>
					<p className="text-xl">Your Booking Information</p>
					<BookingDates booked={booking}></BookingDates>
				</div>
				<div className="m-auto">
					<p>Total Price:</p>
					<p className="text-xl"> ${booking.price} </p>
				</div>
			</div>
		</div>
	);
};

export default ReservedPage;
