import React from 'react';
import Link from 'next/link';

export default function Page() {
	return (
		<>
			<div>
				<div>
					<h1 className="px-6 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950 py-2 my-10">
						Hackathon Registration Portal
					</h1>
				</div>
				<div className="bg-offWhite text-textBlue min-h-screen flex flex-col justify-center items-center py-10">
					{' '}
					<div className="text-center sm:w-[75%] mb-8 px-6">
						<h2 className="text-2xl font-bold text-yellow-300 mb-4">
							⚡ Join the Ultimate Innovation Challenge! ⚡
						</h2>
						<p className="text-sm text-textBlue font-medium">
							🚀 Welcome to the Hackathon Registration Portal! This is your
							opportunity to bring your boldest ideas to life. Whether
							you&apos;re a code wizard 🧙‍♂️, a design guru 🎨, or just someone
							with big dreams, there&apos;s a spot for you here. Let&apos;s
							build the future together! 🌟
						</p>
						<p className="text-sm text-textBlue mt-4">
							💡{' '}
							<span className="font-semibold text-yellow-300 text-2xl">
								Why Join?
							</span>
							<br /> Collaborate with the brightest minds, solve real-world
							problems, and showcase your skills to industry leaders. Plus,
							you&apos;ll make some awesome memories along the way! 🌍✨
						</p>
					</div>
					{/* Embed Form */}
					<div className="flex justify-center items-center w-3/4">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSdHdKSA9dcNaaI_vszVKoqs67MwqYqcZNzIHlK_yjmE8iAmzA/closedform"
							width="100%"
							height="1000"
							className="border-2 border-gray-300 rounded-lg"
							loading="lazy"
						/>
					</div>
					{/* Footer Text */}
					<div className="text-center mt-10 px-6">
						<p className="text-sm text-textBlue font-medium">
							🌟 Don’t wait! Spots are filling up fast. Gather your team,
							register now, and get ready for an unforgettable experience. We
							can't wait to see you there! 🙌
						</p>
					</div>
					{/* Commented Section */}
					{/* <div className="text-center mb-6">
						<p className="text-2xl font-semibold text-white">
							🚨{' '}
							<span className="text-yellow-300">
								Registration has now closed!
							</span>{' '}
							🚨
						</p>
						<p className="text-lg text-white mt-4">
							This year, the registration has ended. 🌟 But don’t worry! Keep
							checking the EXCESS website at{' '}
							<Link
								href="https://excess.ioepc.edu.np"
								className="underline text-cs50Yellow"
								target="_blank"
								rel="noopener noreferrer">
								excess.ioepc.edu.np
							</Link>{' '}
							for exciting upcoming events. 🔗✨
						</p>
						<p className="text-lg text-white mt-4">
							Stay connected with the amazing <strong>CS50 AI</strong>{' '}
							community! 💡 Follow us on Facebook for updates and more fun:
						</p>
						<Link
							href="https://www.facebook.com/profile.php?id=61554706883546"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-cs50Yellow hover:bg-cs50Yellow text-black px-8 py-4 rounded-lg mt-4 inline-block text-lg font-semibold">
							📘 Keep up with CS50AI
						</Link>
					</div> */}
				</div>
			</div>
		</>
	);
}
