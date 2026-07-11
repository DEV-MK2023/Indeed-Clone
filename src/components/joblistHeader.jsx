import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";


export default function ResumeJobTypeCard() {
  return (
    <div className="w-full px-4 flex flex-col gap-5 ">
      <span className="text-sm font-bold"><a className="text-blue-800" href="">Post Your Resume</a> and find your next job on Indeed</span>
      <hr className="border-gray-300 border-y-1" />
      <span className="text-xs text-gray-500">Jobs in Lahore</span>
      <div className="flex gap-11 md:gap-60 pb-2">
        <span className="text-sm">Sort By: <span  className="font-bold">relevance <a className="text-blue-600 font-normal" href="">- date</a></span></span>
        <span className="flex gap-3 text-xs text-gray-700">5,000+ jobs<FaQuestionCircle className="text-gray-600 text-lg" /></span>
      </div>
    </div>
  );
}
