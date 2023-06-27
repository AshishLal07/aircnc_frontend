/* eslint-disable react/prop-types */
const Perks = ({selected, onChange}) => {
	function handleBtnCheck(e) {
		const {checked, name} = e.target;
		// console.log(checked, name);
		if (checked) {
			onChange([...selected, name]);
		} else {
			onChange([...selected.filter((perk) => perk !== name)]);
		}
	}

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('Wifi')}
					name="Wifi"
					onChange={handleBtnCheck}
				></input>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
					/>
				</svg>

				<span>Wifi</span>
			</label>
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('Lock on bedroom doors')}
					name="Lock on bedroom doors"
					onChange={handleBtnCheck}
				></input>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					/>
				</svg>

				<span>Lock on bedroom doors</span>
			</label>
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('Kitchen')}
					name="Kitchen"
					onChange={handleBtnCheck}
				></input>

				<svg
					className="h-6 w-6"
					viewBox="0 0 1024 1024"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<path
							fill="#000000"
							d="M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
						></path>
					</g>
				</svg>

				<span>Kitchen</span>
			</label>
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('Smoke Alarm')}
					name="Smoke Alarm"
					onChange={handleBtnCheck}
				></input>
				<svg
					className="h-6 w-6 text-black"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{' '}
					<path stroke="none" d="M0 0h24v24H0z" />{' '}
					<circle cx="12" cy="12" r="3" />{' '}
					<line x1="12" y1="21" x2="12" y2="21.01" />{' '}
					<line x1="3" y1="9" x2="3" y2="9.01" />{' '}
					<line x1="21" y1="9" x2="21" y2="9.01" />{' '}
					<path d="M8 20.1a9 9 0 0 1 -5 -7.1" />{' '}
					<path d="M16 20.1a9 9 0 0 0 5 -7.1" />{' '}
					<path d="M6.2 5a9 9 0 0 1 11.4 0" />
				</svg>

				<span>Smoke Alarm</span>
			</label>
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('AC')}
					name="AC"
					onChange={handleBtnCheck}
				></input>
				<svg
					className="h-6 w-6 text-black"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{' '}
					<path stroke="none" d="M0 0h24v24H0z" />{' '}
					<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />{' '}
					<path
						d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
						transform="rotate(60 12 12)"
					/>{' '}
					<path
						d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
						transform="rotate(120 12 12)"
					/>{' '}
					<path
						d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
						transform="rotate(180 12 12)"
					/>{' '}
					<path
						d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
						transform="rotate(240 12 12)"
					/>{' '}
					<path
						d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
						transform="rotate(300 12 12)"
					/>{' '}
				</svg>

				<span>AC</span>
			</label>
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('Power Backup')}
					name="Power Backup"
					onChange={handleBtnCheck}
				></input>
				<svg
					className="h-6 w-6 text-black"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{' '}
					<path stroke="none" d="M0 0h24v24H0z" />{' '}
					<path d="M7 6a7.75 7.75 0 1 0 10 0" />{' '}
					<line x1="12" y1="4" x2="12" y2="12" />
				</svg>

				<span>Power Backup</span>
			</label>
			<label className="border p-4 flex gap-2 items-center cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes('Parking spot')}
					name="Parking spot"
					onChange={handleBtnCheck}
				></input>
				<svg
					className="h-6 w-6 text-black"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{' '}
					<path stroke="none" d="M0 0h24v24H0z" />{' '}
					<circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />{' '}
					<path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
				</svg>

				<span>Parking spot</span>
			</label>
		</div>
	);
};

export default Perks;
