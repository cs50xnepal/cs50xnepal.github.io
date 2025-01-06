import React from 'react';
import Hero from './main';
import Track from './features';
import Register from './register';
import FAQ from './FAQ';
import Resources from './Resources';
import Team from './Team';
export default function Instructor() {
	return (
		<>
			<Hero />
			<Team />
			<div className="display-flex justify-center bg-gray-50 px-4 py-12">
				<h1 className="px-6 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					How Does it Work?
				</h1>
				<p className="text-sm py-3 px-6 sm:px-28 lg:w-[80%] mx-auto  text-center text-textBlue ">
					Prepare to dive into a high-speed, creativity-driven challenge where
					your AI knowledge is put to the test.
				</p>
				<Track />
			</div>
			<FAQ />
			<Resources />
			<Register />
		</>
	);
}
