'use client';
import React from 'react';
import Image from 'next/image';
import CardHack from './CardHack';

export interface teamType {
	image: string;
	title: string;
	role: string;
	contact?: number;
}

const teamList: teamType[] = [
	{
		image: 'Suwash_shrestha.jpg',
		title: 'Suwash Shreshtha',
		role: 'Hackathon Incharge',
		contact: 9841234567,
	},
	{
		image: 'suwarna.jpg',
		title: 'Suwarna Pyakurel',
		role: 'Hackathon Co-Incharge',
		contact: 9841234567,
	},
	{
		image: 'kendra_pokhrel.jpg',
		title: 'Kendra Pokhrel',
		role: 'Organizing Team',
	},
	{
		image: 'Abhishek_Niraula.jpg',
		title: 'Abhishek Niraula',
		role: 'Organizing Team',
	},
	{
		image: 'Niraj_bista.jpg',
		title: 'Niraj Bista',
		role: 'Organizing Team',
	},
	{
		image: 'Yogendra.jpeg',
		title: 'Yogendra Karn',
		role: 'Organizing Team',
	},
];

export default function Team() {
	return (
		<>
			<div className="flex flex-col intems-center justify-center bg-offPurple py-12 px-4">
				<h1 className="px-6 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Meet the Team behind X-Hack
				</h1>
				<p className="text-sm py-3 px-4 sm:px-28 lg:w-[65%] mx-auto  text-center text-textBlue">
					Get to know the passionate minds behind X-Hack 3.0—dedicated
					innovators, organizers, and mentors driving this incredible hackathon
					forward.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-max mx-auto">
					<CardHack teams={teamList} />
				</div>
			</div>
		</>
	);
}
