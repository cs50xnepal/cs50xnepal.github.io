import React from 'react';
import Image from 'next/image';
import RegisterIm from '@/app/hackathon/assets/Register.svg';

export default function Register() {
	return (
		<>
			<div className="py-8 flex flex-col sm:flex-row justify-center align-center bg-gray-50">
				<div className="flex justify-center items-center px-4 sm:px-8">
					<Image
						src={RegisterIm}
						alt="Register Image"
						width={300}
						height={200}
					/>
				</div>
				<div className="flex flex-col justify-center items-center px-4 sm:px-8 py-4 sm:py-0">
					<h1 className="px-6 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
						SIGN UP NOW FOR THE HACKATHON!!
					</h1>
					<p className="text-sm py-3 px-6 sm:px-28 lg:w-[80%] mx-auto  text-center text-textBlue ">
						Spots are limited, so don’t wait! Participation is completely free.
					</p>
					<div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex">
						<a
							href="#"
							title=""
							className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
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
							Sign Up for Hackathon
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
