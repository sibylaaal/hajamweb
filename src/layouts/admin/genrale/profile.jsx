export default function Profile() {
    return (
        <>
            <div className="w-full mx-auto mt-6">
                <div className="text-center text-3xl text-gray-800 font-bold py-2">My Account</div>
  <div className="flex justify-center items-center">
                                        <img
                                            id="preview_img"
                                            className="h-16 w-16 object-cover rounded-full"
                                            src="https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
                                            alt="Current profile photo"
                                        />
                                    </div>
                <div className="relative flex flex-col w-full rounded-lg">
                    <div className="bg-white px-6 pt-6">
                        <div className="text-center flex justify-between">
                            <form>
                                <div className="flex items-center space-x-6">
                                  
                                    <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input
                                            type="file"
                                            onChange="loadFile(event)"
                                            className="block w-full text-sm text-
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-[#1FAE72]
                                                hover:file:bg-violet-100
                                            "
                                        />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-gray-500 text-sm mt-3 mb-6">User Information</h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-username">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="lucky.jesse"
                                            id="grid-username"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-email">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="jesse@example.com"
                                            id="grid-email"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-firstname">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="Lucky"
                                            id="grid-firstname"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-lastname">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="Jesse"
                                            id="grid-lastname"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                            <h6 className="text-gray-500 text-sm mt-3 mb-6">Contact Information</h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-address">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                            id="grid-address"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-city">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="New York"
                                            id="grid-city"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-country">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="United States"
                                            id="grid-country"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-postal-code">
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue="Postal Code"
                                            id="grid-postal-code"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                            <h6 className="text-gray-500 text-sm mt-3 mb-6">About Me</h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block text-gray-700 text-xs mb-2" htmlFor="grid-about">
                                            About me
                                        </label>
                                        <textarea
                                            className="border px-3 py-3 placeholder-blueGray-300 text-gray-700 bg-white rounded-lg text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            rows={4}
                                            defaultValue="A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Free and Open Source."
                                            id="grid-about"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
