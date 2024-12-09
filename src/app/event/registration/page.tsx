import React from 'react'

export default function Page() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex justify-center items-center py-10">
            <div className="flex justify-center items-center w-3/4">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdHdKSA9dcNaaI_vszVKoqs67MwqYqcZNzIHlK_yjmE8iAmzA/closedform"
                    width="100%"
                    height="1000"
                    className="border-2 border-gray-300 rounded-lg"
                    loading='lazy'
                />
            </div>
        </div>
    )
}
