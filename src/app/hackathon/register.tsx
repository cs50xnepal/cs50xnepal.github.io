'use client';
import React from 'react';
import Image from 'next/image';
import RegisterIm from '@/app/hackathon/assets/Register.svg';
import { Link } from '@nextui-org/react';

export default function Register() {
	return (
		<>
			<div className="py-8 flex flex-col sm:flex-row justify-center align-center bg-offWhite">
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
						Spots are limited, so don’t wait!.
					</p>
					<div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex">
						<Link
							title=""
							className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold bg-gray-900 transition-all duration-200 border-2 text-red-600 border-gray-900 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-transparent focus:bg-transparent hover:text-red-600 focus:text-red-600 hover:border-gray-400 focus:border-gray-400"
							role="button">
							❗ Registration Has Ended
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
