import {Link} from 'react-router-dom';

import AccountNav from './container/AccountNav';
import {useEffect, useState} from 'react';
import axios from 'axios';

const PlacePage = () => {
	const [placesList, setPlacesList] = useState([]);
	const token = localStorage.getItem('token');
	useEffect(() => {
		axios
			.get(`/placesList`, {
				headers: {Authorization: `Bearer ${token}`},
			})
			.then((res) => {
				setPlacesList(res.data);
			});
	}, [token]);

	return (
		<>
			<AccountNav />

			<div className="text-center">
				<Link
					className="bg-primary text-white py-2 px-6 rounded-full"
					to={'/account/places/new'}
				>
					{' '}
					<span className="text-2xl px-1">+</span> Add New Place
				</Link>
				<br></br>
				List of all added places
			</div>
			<div className="mt-4 ">
				{placesList.length > 0 &&
					placesList.map((place, index) => (
						<Link
							key={index}
							to={'/account/places/' + place._id}
							className="flex gap-4 bg-gray-100  drop-shadow-md rounded-2xl p-4 mb-2"
						>
							<div className="flex w-32 h-32 drop-shadow-xl shrink-0">
								{place.photos.length > 0 && (
									<img
										className="object-cover grow "
										src={
											'https://aircncbackend.onrender.com/uploads/' +
											place.photos[0]
										}
									/>
								)}
							</div>
							<div className="grow">
								<h1 className="text-xl">{place.title}</h1>
								<p className="text-gray-700 ">{place.description}</p>
							</div>
						</Link>
					))}
			</div>
		</>
	);
};

export default PlacePage;
