
function Contact({ name, email, phone, company, website }) {
    return (
        <div className="border-b p-2 mb-4 flex justify-between items-center">
            <div className="content">
                <p>Name: <span className="text-sm font-normal text-indigo-500">{name}</span></p>
                <p>Email: <span className="text-sm font-normal text-indigo-500">{email}</span></p>
                <p>Phone: <span className="text-sm font-normal text-indigo-500">{phone}</span></p>
                <p>Company: <span className="text-sm font-normal text-indigo-500">{company}</span></p>
                <p>Website: <span className="text-sm font-normal text-indigo-500">{website}</span></p>
            </div>
            <div className="flex gap-4">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm rounded-lg px-4 py-0 h-10 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                    </svg>
                    Edit
                </button>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </div>
        </div >
    )
}

export default Contact