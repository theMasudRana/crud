import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <Popover className="relative bg-white border-b-2 border-gray-100">
            <div className="container mx-auto">
                <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                    </div>
                    <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </Link>
                    <Link to="/new-contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Add New
                    </Link>
                    <Link to="about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About
                    </Link>
                    <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                        <Link to="signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Signin
                        </Link>
                        <Link to="signup" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </Popover>
    )
}
