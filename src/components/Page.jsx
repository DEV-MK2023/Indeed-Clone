import React from 'react'
import { MoreVertical } from "lucide-react";
import { FaCircleQuestion } from "react-icons/fa6";

const JobCard = ({ title, company, location, details }) => (
    <div className="relative border rounded-xl shadow-md p-4 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        {details.length > 0 && (
            <ul className="list-disc list-inside text-sm text-gray-700">
                {details.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        )}
        <button className="text-blue-600 text-sm mt-2">More...</button>
    </div>
);

const Page = () => {
    return (
        <div>
            <div className="max-w-xl mx-auto mt-10 space-y-4 font-sans">
                <div className="flex items-center gap-3">
                    <img src="/Car.jpeg" alt="Car Logo" className='w-12 h-12 rounded-lg shadow-lg' />
                    <div>
                        <h1 className="text-lg font-semibold">PakWheels</h1>
                        <p className="text-sm text-gray-600">jobs in Lahore</p>
                    </div>
                </div>

                <p className="text-sm text-blue-600 font-bold pl-5">
                    Post your resume <span className='text-gray-700'>and find your next job on Indeed!</span>
                    <div className="w-full h-[2px] bg-gray-200 my-1"></div>
                </p>

                <p className='text-sm text-gray-500 pl-5'>jobs in Lahore</p>

                <div className="flex justify-between items-center text-sm text-gray-600 pl-5 ">
                    <p>
                        Sort by: <span className="text-black font-medium">relevance</span> <span className='text-blue-500'>- date</span>
                    </p>
                    <div className='flex gap-2 mr-5'>
                        <div>

                            <p>25+ jobs </p>
                        </div>
                        <div className='m-1'>
                            <span><FaCircleQuestion /></span>
                        </div>
                    </div>
                </div>

                <JobCard
                    title="Hyundai Tucson"
                    company="Hyandai"
                    location="Lahore"
                    details={[
                        "Modern SUV with premium features, smooth ride, and excellent fuel economy.",
                    ]}
                />

                <JobCard
                    title="Suzuki Alto"
                    company="Suzuki"
                    location="Islamabad"
                    details={[
                        "Economical hatchback perfect for daily city commuting.",
                    ]}
                />

                <JobCard
                    title="Kia Sportage"
                    company="KIA"
                    location="Lahore"
                    details={[
                        "Compact SUV with spacious interior, ideal for families and long drives."
                    ]}
                />

                <JobCard
                    title="Corolla"
                    company="Toyota"
                    location="Lahore"
                    details={[
                        "A reliable and fuel-efficient sedan with comfortable seating and modern tech.",
                    ]}
                />

                <JobCard
                    title="Honda Civic"
                    company="Honda"
                    location="Lahore"
                    details={[
                        " A sleek sedan with sporty design and advanced safety features.",
                    ]}
                />
            </div>
        </div>
    )
}

export default Page;