import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function RegistrationPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasClosed = localStorage.getItem('registrationPopupClosed');
        if (!hasClosed) {
            setIsOpen(true);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('registrationPopupClosed', 'true'); 
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div
                    className="relative w-11/12 max-w-md p-8 rounded-xl shadow-2xl bg-violet-800 text-white"
                >
                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-200"
                    >
                        &times;
                    </button>

                    {/* Content */}
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold mb-4">
                            Registration Open!
                        </h2>
                        <p className="text-lg font-light mb-6">
                            Embark on an extraordinary six-week journey into the 
                            <strong>World of Artificial Intelligence</strong> with CS50xNepal!
                        </p>

                        <div className="text-left bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                            <p className="font-medium">📅 <strong>Start Date:</strong> 22 December 2024</p>
                            <p className="font-medium">🗓️ <strong>Duration:</strong> Six weeks</p>
                            <p className="font-medium">📍 <strong>Venue:</strong> Purwanchal Campus, Dharan</p>
                        </div>
                        <Link
                            href="/event/registration"
                            className="px-6 py-3 rounded-full bg-white text-violet-600 font-semibold 
                            hover:bg-red-500 hover:text-white transition-all"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
}
