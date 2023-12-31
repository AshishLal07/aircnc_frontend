import {Outlet} from 'react-router-dom';
import Header from './header';

const Layout = () => {
	return (
		<div className="py-4 px-8 flex flex-col min-h-screen">
			<Header></Header>
			<Outlet></Outlet>
		</div>
	);
};

export default Layout;
