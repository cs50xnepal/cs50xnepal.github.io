import React from 'react';
import { useEffect, useState } from 'react';

export default function Timer() {
	const [over, setOver] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date('2025-01-24T10:00:00');
		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);
			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(h);
			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);
			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
				setOver(true);
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<>
			{over ? (
				<div className="">
					<h1 className="">Hackathon is Ongoing</h1>
				</div>
			) : (
				<div className="flex items-center text-textBlue bg-offWhite rounded-lg mt-8 px-8 flex-col py-8">
					<h1 className=" pb-8 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
						{' '}
						Countdown to Hackathon{' '}
					</h1>
					<div className="flex flex-col sm:flex-row">
						<div className="flex flex-col px-8 py-4">
							<span className="time text-6xl font-bold ">{days}</span>
							<span className="label  uppercase  tracking-widest">Days</span>
						</div>
						<div className="flex flex-col px-8 py-4">
							<span className="time text-6xl font-bold">{hours}</span>
							<span className="label  uppercase  tracking-widest">Hours</span>
						</div>
						<div className="flex flex-col px-8 py-4">
							<span className="time text-6xl font-bold">{minutes}</span>
							<span className="label  uppercase  tracking-widest">Minutes</span>
						</div>
						<div className="flex flex-col px-8 py-4">
							<span className="time text-6xl font-bold">{seconds}</span>
							<span className="label  uppercase  tracking-widest">Seconds</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
