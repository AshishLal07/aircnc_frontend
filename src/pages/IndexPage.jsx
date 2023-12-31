import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const IndexPage = () => {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		axios.get('/allPlaces').then((res) => {
			setPlaces(res.data);
		});
	}, []);

	return (
		<div className=" mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{places.length > 0 &&
				places.map((place) => (
					<Link key={place._id} to={'/place/' + place._id}>
						<div className="bg-gray-500 rounded-2xl flex mb-2">
							{place.photos?.[0] && (
								<img
									className="rounded-2xl aspect-square object-cover"
									src={
										'https://aircncbackend.onrender.com/uploads/' +
										place.photos[0]
									}
								></img>
							)}
						</div>

						<h2 className="font-bold  ">{place.address}</h2>
						<h2 className="text-sm  text-gray-500">{place.title}</h2>
						<div className="mt-2">
							<span className="font-bold">${place.price}</span> night
						</div>
					</Link>
				))}
		</div>
	);
};

export default IndexPage;
