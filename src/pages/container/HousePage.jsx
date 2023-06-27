import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Booking from './Booking';
import PlaceGallery from './PlaceGallery';
import AddressPage from './AddressPage';

const HousePage = () => {
	const {id} = useParams();
	const [house, setHouse] = useState([]);

	useEffect(() => {
		if (!id) {
			return;
		}
		axios.get('/houseDetail/' + id).then((res) => setHouse(res.data));
	}, [id]);

	return (
		<div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8 ">
			<h1 className="text-3xl">{house.title}</h1>
			<AddressPage> {house.address}</AddressPage>
			<PlaceGallery house={house} />
			<div className="mt-8 mb-4 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
				<div>
					<div className="my-4">
						<h2 className="text-2xl font-semibold">Description</h2>
						{house.description}
					</div>
					<p>Check-In: {house.checkIn}</p>
					<p>Check-Out: {house.checkOut}</p>
					<p>Maximum no of Guest: {house.maxGuest}</p>
				</div>
				<Booking house={house} />
			</div>
			<div className="bg-white -mx-8 px-8 py-8 border-t">
				<h2 className="text-2xl font-semibold">Extra Info</h2>
				<div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
					{house.extraInfo}
				</div>
			</div>
		</div>
	);
};

export default HousePage;
