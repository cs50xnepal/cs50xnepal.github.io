'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function RegistrationHeader() {
	const path = usePathname();

	if (path === '/event/registration') {
		return null;
	}

	return (
		<div className="bg-violet-700 text-white py-10 flex justify-center items-center">
			<div className="relative">
				<h2 className="text-2xl font-bold animate-blink flex">
					🔥Registration Now Open! Join CS50xNepal AI Event
				</h2>
				{/* <p className="mt-2 text-center text-lg">
                    Don't miss out! Join the CS50xNepal AI event and enhance your AI skills.
                </p> */}
				<div className="mt-4 flex justify-center">
					<Link
						href="/event/registration"
						className="px-6 py-3 rounded-full bg-red-500 text-white font-semibold 
                            hover:bg-red-600 transition-all">
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}
