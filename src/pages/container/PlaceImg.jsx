/* eslint-disable react/prop-types */
const PlaceImg = ({place, index = 0, className = null}) => {
	if (!place?.photos?.length) {
		return '';
	}
	if (!className) {
		className = 'object-cover h-full w-full ';
	}
	return (
		<img
			className={className}
			src={'https://aircncbackend.onrender.com/uploads/' + place.photos[index]}
		></img>
	);
};

export default PlaceImg;
