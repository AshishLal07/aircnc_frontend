import {Route, Routes} from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import Register from './pages/Register.jsx';
import {UserContextProvider} from './UserContext.jsx';
import axios from 'axios';
import ProfilePage from './pages/ProfilePage.jsx';
import PlacePage from './pages/PlacePage.jsx';
import PlaceForm from './pages/container/PlaceForm.jsx';
import HousePage from './pages/container/HousePage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ReservedPage from './pages/ReservedPage.jsx';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://aircncbackend.onrender.com';
//  'http://localhost:3100/';
// 'https://aircncbackend.onrender.com/';

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<IndexPage />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/account/" element={<ProfilePage />}></Route>
					<Route path="/account/places" element={<PlacePage />}></Route>
					<Route path="/account/places/new" element={<PlaceForm />}></Route>
					<Route path="/account/places/:id" element={<PlaceForm />}></Route>
					<Route path="/place/:id" element={<HousePage />}></Route>

					<Route path="/account/booking/" element={<BookingPage />}></Route>
					<Route path="/account/booking/:id" element={<ReservedPage />}></Route>

					{/* <Route path="/account/booking" element={<ProfilePage />}></Route>
					<Route path="/account/places" element={<ProfilePage />}></Route> */}
				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
