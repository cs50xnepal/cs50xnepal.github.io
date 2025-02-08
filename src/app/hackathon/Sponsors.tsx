import React from 'react';
import Image from 'next/image';

interface Sponsors {
	image: string;
	type: string;
}

const sponsors: Sponsors[] = [
	{
		image: 'title.svg',
		type: 'Title Sponsor',
	},
	{
		image: 'Diamod Sponsor.svg',
		type: 'Diamond Sponsor',
	},
	{
		image: 'Bronze Sponsor.svg',
		type: 'Bronze Sponsor',
	},
	{
		image: 'Bronze Sponsor (2).svg',
		type: 'Bronze Sponsor',
	},
	{
		image: 'Data Hackathon Partner.svg',
		type: 'Data Hackathon Partner',
	},
	{
		image: 'Digital Learning Partner.svg',
		type: 'Digital Learning Partner',
	},
	{
		image: 'Internet Partner.svg',
		type: 'Internet Partner',
	},
	{
		image: 'Printing Partner.svg',
		type: 'Printing Partner',
	},
	{
		image: 'Hardware Partner.svg',
		type: 'Hardware Partner',
	},
	{
		image: 'Communication Partner.svg',
		type: 'Communication Partner',
	},
	{
		image: 'Emerging Startup Partner.svg',
		type: 'Emerging Startup Partner',
	},
	{
		image: 'General Sponsor.svg',
		type: 'General Sponsor',
	},
	{
		image: 'General Sponsor (2).svg',
		type: 'General Sponsor',
	},
	{
		image: 'General Sponsor (3).svg',
		type: 'General Sponsor',
	},
	{
		image: 'General Sponsor (4).svg',
		type: 'General Sponsor',
	},
	{
		image: 'General Sponsor (5).svg',
		type: 'General Sponsor',
	},
	{
		image: 'Supporting Partner.svg',
		type: 'Supporting Partner',
	},
	{
		image: 'Supporting  Partner.svg',
		type: 'Supporting Partner',
	},
	{
		image: 'Supporting  Partner (2).svg',
		type: 'Supporting Partner',
	},
	{
		image: 'Supporting  Partner (3).svg',
		type: 'Supporting Partner',
	},
	{
		image: 'Supporting  Partner (4).svg',
		type: 'Supporting Partner',
	},
	{
		image: 'AWS Cloud Club.svg',
		type: 'Supporting Partner',
	},
];

export default function Sponsors() {
	return (
		<div className="py-12 sm:pe-8 flex flex-col justify-center text-center items-center bg-offPurple">
			<h1 className="text-6xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
				Our Supporters
			</h1>
			<p className="text-sm py-3 px-6 sm:px-28 lg:w-[80%] mx-auto  text-center text-textBlue ">
				We are grateful to our sponsors for their support in making this
				hackathon possible.
			</p>
			<div className="py-8 flex justify-center flex-col items-center gap-8">
				{sponsors.map((sponsor, index) =>
					sponsor.type === 'Title Sponsor' ||
					sponsor.type === 'Diamond Sponsor' ? (
						<React.Fragment key={index}>
							<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
								{sponsor.type}
							</h1>
							<div className="flex justify-center items-center bg-white shadow-lg px-12 py-8 rounded-lg max-w-max">
								<Image
									src={`/images/hackathon/${sponsor.image}`}
									alt={sponsor.type}
									width={300}
									height={100}
									className="transition-transform hover:scale-125 duration-500  rounded-lg"
								/>
							</div>
						</React.Fragment>
					) : null
				)}
			</div>
			<div className="py-8 flex justify-center flex-col items-center gap-8">
				<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Bronze Supporter
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{sponsors.map(
						(sponsor, index) =>
							sponsor.type === 'Bronze Sponsor' && (
								<div
									key={index}
									className="flex justify-center items-center bg-white shadow-lg px-12 py-8 rounded-lg max-w-max">
									<Image
										src={`/images/hackathon/${sponsor.image}`}
										alt={sponsor.type}
										width={300}
										height={100}
										className="transition-transform hover:scale-125 duration-500  rounded-lg"
									/>
								</div>
							)
					)}
				</div>
			</div>
			<div className="py-8 flex justify-center flex-col items-center gap-8">
				{sponsors.map((sponsor, index) =>
					sponsor.type === 'Data Hackathon Partner' ||
					sponsor.type === 'Digital Learning Partner' ||
					sponsor.type === 'Internet Partner' ||
					sponsor.type === 'Printing Partner' ||
					sponsor.type === 'Hardware Partner' ||
					sponsor.type === 'Communication Partner' ||
					sponsor.type === 'Emerging Startup Partner' ? (
						<React.Fragment key={index}>
							<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
								{sponsor.type}
							</h1>
							<div className="flex justify-center items-center bg-white shadow-lg px-12 py-8 rounded-lg max-w-max">
								<Image
									src={`/images/hackathon/${sponsor.image}`}
									alt={sponsor.type}
									width={300}
									height={100}
									className="transition-transform hover:scale-125 duration-500  rounded-lg"
								/>
							</div>
						</React.Fragment>
					) : null
				)}
			</div>
			<div className="py-8 flex justify-center flex-col items-center gap-8 px-2">
				<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					General Sponsor
				</h1>
				<div className="flex flex-wrap gap-4 justify-center items-center">
					{sponsors.map(
						(sponsor, index) =>
							sponsor.type === 'General Sponsor' && (
								<div
									key={index}
									className="flex justify-center h-56 items-center bg-white shadow-lg px-12 py-8 rounded-lg max-w-max">
									<Image
										src={`/images/hackathon/${sponsor.image}`}
										alt={sponsor.type}
										width={300}
										height={100}
										className="transition-transform hover:scale-125 duration-500  rounded-lg"
									/>
								</div>
							)
					)}
				</div>
			</div>
			<div className="py-8 flex justify-center flex-col items-center gap-8 px-2">
				<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Supporting Partner
				</h1>
				<div className="flex flex-wrap gap-4 justify-center items-center">
					{sponsors.map(
						(sponsor, index) =>
							sponsor.type === 'Supporting Partner' && (
								<div
									key={index}
									className="flex justify-center h-56 items-center bg-white shadow-lg px-12 py-8 rounded-lg max-w-max">
									<Image
										src={`/images/hackathon/${sponsor.image}`}
										alt={sponsor.type}
										width={300}
										height={100}
										className="transition-transform hover:scale-125 duration-500  rounded-lg"
									/>
								</div>
							)
					)}
				</div>
			</div>
		</div>
	);
}
