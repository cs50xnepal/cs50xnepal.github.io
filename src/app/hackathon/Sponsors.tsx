import React from 'react';
import Image from 'next/image';

interface Sponsors {
	image: string;
	type: string;
}

const sponsors: Sponsors[] = [
	{
		image: 'Nepse.png',
		type: 'Title Sponsor',
	},
	{
		image: 'tribhuvan_uni.png',
		type: 'Prime Supporter',
	},
	{
		image: 'FSU.png',
		type: 'Prime Supporter',
	},
	{
		image: 'Birat.png',
		type: 'Diamond Sponsor',
	},
	{
		image: 'Datacamp.png',
		type: 'AI Impact Partner',
	},
	{
		image: 'MsLearn.png',
		type: 'Community Partner',
	},
	{
		image: 'libre.png',
		type: 'Community Partner',
	},
	{
		image: 'Vianet.png',
		type: 'Internet Partner',
	},
	{
		image: 'Frenzs.png',
		type: 'Printing Partner',
	},
	{
		image: 'Mahendra Morang.png',
		type: 'Bronze Sponsor',
	},
	{
		image: 'AaraTech.png',
		type: '3D Design and Hardware Partner',
	},
	{
		image: 'scrimba.png',
		type: 'Supporter',
	},
	{
		image: 'SFL.png',
		type: 'Supporter',
	},
	{
		image: 'AV_Electronics.png',
		type: 'Supporter',
	},
	{
		image: 'Utthan.png',
		type: 'Supporter',
	},
	{
		image: 'numa.png',
		type: 'Supporter',
	},
];

export default function Sponsors() {
	return (
		<div className="py-12 sm:pe-8 flex flex-col justify-center bg-offPurple">
			<h1 className="text-6xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
				Our Supporters
			</h1>
			<p className="text-sm py-3 px-6 sm:px-28 lg:w-[80%] mx-auto  text-center text-textBlue ">
				We are grateful to our sponsors for their support in making this
				hackathon possible.
			</p>
			<div className="py-8 flex justify-center flex-col items-center gap-8">
				{sponsors.map((sponsor, index) =>
					sponsor.type === 'Title Sponsor' ? (
						<React.Fragment key={index}>
							<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
								{sponsor.type}
							</h1>
							<div className="flex justify-center items-center bg-offWhite shadow-lg px-12 py-8 rounded-lg max-w-max">
								<Image
									src={`/images/hackathon/${sponsor.image}`}
									alt={sponsor.type}
									width={200}
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
					Prime Supporter
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{sponsors.map(
						(sponsor, index) =>
							sponsor.type === 'Prime Supporter' && (
								<div
									key={index}
									className="flex justify-center items-center bg-offWhite shadow-lg px-12 py-8 rounded-lg max-w-max">
									<Image
										src={`/images/hackathon/${sponsor.image}`}
										alt={sponsor.type}
										width={200}
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
					sponsor.type === 'Diamond Sponsor' ||
					sponsor.type === 'AI Impact Partner' ||
					sponsor.type === 'Internet Partner' ||
					sponsor.type === 'Printing Partner' ||
					sponsor.type === 'Bronze Sponsor' ||
					sponsor.type === '3D Design and Hardware Partner' ? (
						<React.Fragment key={index}>
							<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
								{sponsor.type}
							</h1>
							<div className="flex justify-center items-center bg-offWhite shadow-lg px-12 py-8 rounded-lg max-w-max">
								<Image
									src={`/images/hackathon/${sponsor.image}`}
									alt={sponsor.type}
									width={200}
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
					Community Partner
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{sponsors.map(
						(sponsor, index) =>
							sponsor.type === 'Community Partner' && (
								<div
									key={index}
									className="flex justify-center items-center bg-offWhite shadow-lg px-12 py-8 rounded-lg max-w-max">
									<Image
										src={`/images/hackathon/${sponsor.image}`}
										alt={sponsor.type}
										width={200}
										height={100}
										className="transition-transform hover:scale-125 duration-500  rounded-lg"
									/>
								</div>
							)
					)}
				</div>
			</div>
			<div className="py-8 flex justify-center flex-col items-center gap-8">
				<h1 className="text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Supporter
				</h1>
				<div className="flex flex-wrap gap-4 justify-center items-center">
					{sponsors.map(
						(sponsor, index) =>
							sponsor.type === 'Supporter' && (
								<div
									key={index}
									className="flex justify-center h-56 items-center bg-offWhite shadow-lg px-12 py-8 rounded-lg max-w-max">
									<Image
										src={`/images/hackathon/${sponsor.image}`}
										alt={sponsor.type}
										width={200}
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
