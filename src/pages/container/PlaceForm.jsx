import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import PhotoUploader from './PhotoUploader';
import Perks from './Perks';
import AccountNav from './AccountNav';

const PlaceForm = () => {
	const {id} = useParams();

	const [title, setTitle] = useState('');
	const [address, setAddress] = useState('');
	const [addedPhoto, setAddedPhoto] = useState([]);
	const [description, setDescription] = useState('');
	const [perks, setPerks] = useState([]);
	const [extraInfo, setExtraInfo] = useState('');
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [maxGuest, setMaxGuest] = useState(1);
	const [price, setPrice] = useState('');
	const [redirect, setRedirect] = useState(100);
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (!id) {
			return;
		}
		axios.get(`/place/${id}`).then((res) => {
			const {data} = res;
			// console.log(data);
			setTitle(data.title);
			setAddress(data.address);
			setAddedPhoto(data.photos);
			setDescription(data.description);
			setPerks(data.perks);
			setExtraInfo(data.extraInfo);
			setCheckIn(data.checkIn);
			setCheckOut(data.checkOut);
			setMaxGuest(data.maxGuest);
			setPrice(data.price);
		});
	}, [id]);

	const Navigate = useNavigate();

	const inputHeader = (text) => {
		return <h2 className="text-xl mt-4">{text}</h2>;
	};
	const inputDescr = (text) => {
		return <p className="text-sm text-gray-500">{text}</p>;
	};
	const preInput = (header, descr) => {
		return (
			<>
				{inputHeader(header)} {inputDescr(descr)}
			</>
		);
	};

	async function addNewPlace(e) {
		e.preventDefault();
		const data = {
			title,
			address,
			addedPhoto,
			description,
			perks,
			extraInfo,
			checkIn,
			checkOut,
			maxGuest,
			price,
		};
		if (id) {
			await axios.put(
				'/updatePlace',
				{id, ...data},
				{
					headers: {Authorization: `Bearer ${token}`},
				}
			);
		} else {
			await axios.post('/newPlace', data, {
				headers: {Authorization: `Bearer ${token}`},
			});
		}

		setTitle('');
		setAddedPhoto([]);
		setAddress('');
		setDescription('');
		setPerks([]);
		setExtraInfo('');
		setCheckIn('');
		setCheckOut('');
		setMaxGuest(1);
		setPrice('');

		setRedirect('/account/places');
	}
	useEffect(() => {
		Navigate(redirect);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [redirect]);

	return (
		<div>
			<AccountNav />
			<form onSubmit={addNewPlace}>
				{preInput(
					'Title',
					'Title for your place, should be short and catchy to attract customer'
				)}
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="title, for example: My lovely Apt"
				/>

				{preInput('Address', 'Address of the apartment')}
				<input
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					placeholder="address"
				/>

				{preInput('Photos', 'The more the better')}

				<PhotoUploader addedPhotos={addedPhoto} onChange={setAddedPhoto} />
				{preInput('Description', 'describe, beauty of the place')}
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>

				{preInput('Perks', 'Select Perks of apartment')}
				<Perks selected={perks} onChange={setPerks} />

				{preInput(
					'Check In & Out',
					'add In and Out time, give some time between cleaning for the guests'
				)}
				<div className="grid gap-2 grid-cols-2 md:grid-cols-4">
					<div className="">
						<h3 className="mt-2 -mb-1"> CheckIn</h3>
						<input
							type="number"
							value={checkIn}
							placeholder="15"
							onChange={(e) => setCheckIn(e.target.value)}
						></input>
					</div>
					<div>
						<h3 className="mt-2 -mb-1">CheckOut</h3>
						<input
							type="number"
							value={checkOut}
							placeholder="12"
							onChange={(e) => setCheckOut(e.target.value)}
						></input>
					</div>
					<div>
						<h3 className="mt-2 -mb-1">MaxGuests</h3>
						<input
							type="number"
							value={maxGuest}
							onChange={(e) => setMaxGuest(e.target.value)}
						></input>
					</div>
					<div>
						<h3 className="mt-2 -mb-1">Price per night</h3>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						></input>
					</div>
				</div>

				{preInput('Extra info', 'Rules and regulations')}
				<textarea
					value={extraInfo}
					onChange={(e) => setExtraInfo(e.target.value)}
				></textarea>

				<button className="primary my-4">Save</button>
			</form>
		</div>
	);
};

export default PlaceForm;
