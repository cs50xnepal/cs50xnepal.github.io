import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HackathonIM from './assets/hackathon.png';
import XHack from './assets/X Hack - white.svg';
import Timer from './timer';

export default function HackathonBanner() {
	return (
		<>
			<div
				className="w-full flex flex-row justify-center items-center relative"
				style={{
					backgroundImage: `url(${HackathonIM.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}>
				<div className="absolute inset-0 bg-black bg-opacity-65 backdrop-blur-sm"></div>
				<div className="relative z-10 text-white text-2xl py-4">
					<div className="justify-center flex flex-col items-center gap-6">
						<div className="flex items-center justify-center">
							<Image src={XHack} width={200} height={200} alt="X Hack Logo" />
						</div>

						<Timer />

						<p className="text-sm py-2 px-6 sm:px-28 lg:w-[75%] mx-auto text-center text-gray-200 font-medium">
							💡 The CS50 AI Hackathon was an incredible journey of innovation,
							collaboration, and problem-solving! A huge{' '}
							<span className="text-primaryRed font-bold text-lg">
								THANK YOU
							</span>{' '}
							to all participants, mentors, sponsors, and organizers who made
							this event possible. Your passion for AI and creativity truly
							shined! ✨
						</p>

						<Link
							href="https://excess.ioepc.edu.np/gallery"
							className="bg-gray-900 text-offWhite px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all">
							Hackathon Gallery 🤟
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
