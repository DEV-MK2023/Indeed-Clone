// src/components/JobCard.jsx

import { motion } from "framer-motion";
import {
  FaRegBookmark,
  FaLink,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
} from "react-icons/fa";


export default function JobCard({
  job,
  onDetailsClick,
  onSaveJob,
  onShareJob,
  loggedInUser
}) {


  const handleApply = () => {

    if (!loggedInUser) {
      alert("⚠️ Please login/register to apply for jobs!");
      window.location.href = "/login";
      return;
    }

  };


  const handleSave = () => {

    if (!loggedInUser) {
      alert("⚠️ Please login/register to save jobs!");
      window.location.href = "/login";
      return;
    }

    onSaveJob && onSaveJob(job);

  };


  const handleShare = () => {

    if(onShareJob){
      onShareJob(job);
    }
    else{
      navigator.clipboard.writeText(
        `${window.location.origin}/job-details-page/${job.id}`
      );

      alert("Job link copied!");
    }

  };


  return (

    <motion.div

      initial={{
        opacity:0,
        y:15
      }}

      animate={{
        opacity:1,
        y:0
      }}

      whileHover={{
        y:-3
      }}

      transition={{
        duration:0.3
      }}


      className="
      bg-white
      rounded-xl
      border
      border-gray-200
      p-4
      mb-4
      shadow-sm
      hover:shadow-md
      transition
      "

    >


      {/* Header */}

      <div className="flex justify-between">


        <div>


          {
            job?.isNew &&

            <span
              className="
              text-xs
              bg-blue-100
              text-blue-700
              px-2
              py-1
              rounded-full
              "
            >
              New
            </span>

          }


          <h2
            className="
            text-lg
            font-bold
            text-gray-900
            mt-2
            "
          >
            {job?.title}
          </h2>


          <p
            className="
            text-blue-600
            text-sm
            font-semibold
            "
          >
            {job?.company}
          </p>


        </div>



        <button

          onClick={handleSave}

          className="
          p-2
          rounded-lg
          border
          hover:bg-blue-50
          "

        >

          <FaRegBookmark
            className="text-blue-600"
          />

        </button>


      </div>



      {/* Quick Info */}


      <div
        className="
        flex
        flex-wrap
        gap-2
        mt-3
        "
      >


        <span
          className="
          flex
          items-center
          gap-1
          bg-gray-100
          rounded-md
          px-2
          py-1
          text-xs
          "
        >

          <FaMapMarkerAlt className="text-blue-600"/>

          {job?.city}

        </span>



        <span
          className="
          flex
          items-center
          gap-1
          bg-gray-100
          rounded-md
          px-2
          py-1
          text-xs
          "
        >

          <FaMoneyBillWave className="text-green-600"/>

          {job?.salary}

        </span>



        <span
          className="
          flex
          items-center
          gap-1
          bg-gray-100
          rounded-md
          px-2
          py-1
          text-xs
          "
        >

          <FaBriefcase className="text-purple-600"/>

          {job?.type}

        </span>


      </div>




      {/* Description */}

      <p
        className="
        text-gray-600
        text-sm
        mt-3
        line-clamp-2
        "
      >

        {job?.description}

      </p>




      {/* Skills */}

      <div
        className="
        flex
        flex-wrap
        gap-2
        mt-3
        "
      >

        {
          job?.requirements?.slice(0,3)
          .map((req,index)=>(

            <span
              key={index}

              className="
              text-xs
              bg-blue-50
              text-blue-700
              px-2
              py-1
              rounded-full
              "
            >

              {req}

            </span>

          ))
        }


      </div>




      {/* Buttons */}


      <div
        className="
        flex
        gap-2
        mt-4
        "
      >


        <button

          onClick={handleApply}

          className="
          bg-blue-600
          text-white
          text-sm
          font-semibold
          px-4
          py-2
          rounded-lg
          hover:bg-blue-700
          "

        >

          Apply

        </button>



        <button

          onClick={()=>onDetailsClick(job)}

          className="
          border
          border-blue-200
          text-blue-700
          text-sm
          font-semibold
          px-4
          py-2
          rounded-lg
          hover:bg-blue-50
          "

        >

          Details

        </button>



        <button

          onClick={handleShare}

          className="
          ml-auto
          p-2
          border
          rounded-lg
          hover:bg-gray-100
          "

        >

          <FaLink className="text-gray-600"/>

        </button>


      </div>


    </motion.div>

  );

}