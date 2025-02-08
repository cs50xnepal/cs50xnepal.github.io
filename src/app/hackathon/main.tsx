'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from '@nextui-org/react';
import Timer from './timer';
import XHack from '@/app/registerHackathon/assets/x - Hack red.svg';
import { FaAddressCard, FaFileAlt } from 'react-icons/fa';

export default function Hero() {
	return (
		<>
			<div className="overflow-x-hidden bg-gray-50">
				<section className="pt-12 bg-gray-50 sm:pt-16">
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="max-w-2xl mx-auto text-center">
							<h1 className="px-6 text-lg text-primaryRed font-bold">
								📅 11-13 Magh
							</h1>
							<div className="flex justify-center items-center">
								<Image src={XHack} alt="XHack Logo" width={600} height={600} />
							</div>
							<div>
								<p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
									<span className="relative inline-flex sm:inline">
										<span className="bg-gradient-to-r from-[#F3AF06] via-[#FF44EC] to-[#F3AF06] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
										<span className="relative"> X-Hack 3.0 </span>
									</span>
								</p>
							</div>

							<Timer />
							<div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
								<Link
									href="https://excess.ioepc.edu.np/gallery"
									title=""
									className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold bg-gray-900 transition-all duration-200 border-2 text-offWhite border-gray-900 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-transparent focus:bg-transparent hover:text-gray-900 focus:text-gray-900 hover:border-gray-400 focus:border-gray-400"
									role="button">
									<svg
										className="w-5 h-5 mr-2"
										viewBox="0 0 18 18"
										fill="none"
										stroke="currentColor"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Hackathon Gallery 🔥
								</Link>
								<Link
									href="https://tinyurl.com/CS50AIHackathonRuleBook"
									title=""
									className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
									role="button">
									<FaFileAlt /> View Rulebook
								</Link>
							</div>

							<p className="mt-8 text-base text-gray-500">
								Unleash your problem-solving abilities and explore the
								fascinating world of artificial intelligence! Collaborate,
								innovate, and create cutting-edge solutions in this thrilling
								hackathon inspired by Harvard’s CS50 course.
							</p>
						</div>
					</div>

					<div className="lg:max-w-6xl lg:mx-auto rounded-lg my-10 overflow-hidden">
						<Image
							className="transform scale-110 rounded-lg"
							src="/images/hackathon_main.png"
							alt="Hackathon Representative Image"
							width={1920}
							height={1080}
						/>
					</div>
				</section>
			</div>
		</>
	);
}
