import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-5 lg:px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-bold text-2xl">
                Medium
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <Avatar size={"big"} name="Sanket" />

            <button type="button" className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Sign Out</button>
        </div>
    </div>
}