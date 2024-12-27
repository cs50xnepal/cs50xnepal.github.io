'use client';
import React from 'react';
import Image from 'next/image';
import { div } from 'framer-motion/client';
import FAQIm from '@/app/hackathon/assets/FAQ.svg';
import { FaAddressCard } from 'react-icons/fa';
import { Link } from '@nextui-org/react';

export default function FAQ() {
	return (
		<>
			<div className="py-12 sm:pe-8 flex flex-col sm:flex-row justify-center align-start bg-offPurple">
				<div className="flex flex-col justify-center items-center pe-10 py-4 sm:py-0 lg:w-2/4">
					<h1 className="px-6 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
						Have a Question?
					</h1>
					<p className="text-sm py-3 px-6 sm:px-16 mx-auto  text-center text-textBlue ">
						We have put together the answers you have been looking for. If there
						is an answer you cannot find, please let us know on .
					</p>
					<div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex">
						<Link
							href="/#faqs"
							title=""
							className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
							role="button">
							<FaAddressCard /> <span className="px-1">Read FAQs</span>
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<Image src={FAQIm} alt="Register Image" width={400} height={400} />
				</div>
			</div>
		</>
	);
}
