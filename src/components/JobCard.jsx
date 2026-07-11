// src/components/JobCard.jsx

import { motion } from "framer-motion";
import { useState } from "react";
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

    if (onApply) {
      onApply(job);
    }

  };




  const handleSave = () => {

    if (!loggedInUser) {

      alert("Please login/register to save jobs!");

      window.location.href = "/login";

      return;

    }


    if (onSaveJob) {

      onSaveJob(job);

    }

  };





  const handleShare = () => {


    if (onShareJob) {

      onShareJob(job);

    }

    else {


      const jobUrl =
        `${window.location.origin}/job-details-page/${job.id}`;


      navigator.clipboard.writeText(jobUrl);


      alert("Job link copied!");

    }


  };





  return (


    <motion.div


      initial={{
        opacity: 0,
        y: 20
      }}


      animate={{
        opacity: 1,
        y: 0
      }}


      transition={{
        duration: 0.4
      }}


      whileHover={{
        y: -5
      }}


      className="
      bg-white
      rounded-2xl
      border
      border-gray-200
      p-6
      mb-5
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "


    >




      {/* Top Section */}


      <div className="
      flex
      justify-between
      items-start
      gap-4
      ">


        <div>


          {
            job?.isNew && (

              <span
                className="
                inline-block
                mb-3
                px-3
                py-1
                text-xs
                font-semibold
                rounded-full
                bg-blue-100
                text-blue-700
                "
              >

                New Job

              </span>

            )
          }



          <h2
            className="
            text-xl
            font-bold
            text-gray-900
            "
          >

            {job?.title}

          </h2>



          <p
            className="
            text-blue-600
            font-semibold
            mt-1
            "
          >

            {job?.company}

          </p>


        </div>



        <motion.button

          whileHover={{
            scale: 1.1
          }}

          onClick={handleSave}

          className="
          p-3
          rounded-xl
          border
          border-gray-200
          hover:bg-blue-50
          transition
          "

        >

          <FaRegBookmark
            className="
            text-blue-600
            "
          />

        </motion.button>



      </div>






      {/* Job Info */}


      <div
        className="
        flex
        flex-wrap
        gap-3
        mt-5
        "
      >



        <span
          className="
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          bg-gray-100
          text-gray-700
          text-sm
          "
        >

          <FaMapMarkerAlt className="text-blue-600" />

          {job?.city}, {job?.location}

        </span>





        <span
          className="
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          bg-gray-100
          text-gray-700
          text-sm
          "
        >

          <FaMoneyBillWave className="text-green-600" />

          {job?.salary}

        </span>





        <span
          className="
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          bg-gray-100
          text-gray-700
          text-sm
          "
        >

          <FaBriefcase className="text-purple-600" />

          {
            job?.type === "full-time"
              ? "Full Time"
              : "Part Time"
          }


        </span>



      </div>







      {/* Description */}


      <p
        className="
        text-gray-600
        text-sm
        leading-relaxed
        mt-5
        line-clamp-3
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
        mt-5
        "
      >

        {
          job?.requirements?.slice(0, 4).map(
            (req, index) => (

              <span

                key={index}

                className="
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                bg-blue-50
                text-blue-700
                "
              >

                {req}

              </span>


            )
          )
        }


      </div>








      {/* Actions */}


      <div
        className="
        flex
        flex-wrap
        gap-3
        mt-6
        "
      >



        <motion.button

          whileHover={{
            scale: 1.03
          }}

          whileTap={{
            scale: 0.97
          }}

          onClick={handleApply}

          className="
          px-5
          py-2.5
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          text-sm
          hover:bg-blue-700
          transition
          "

        >

          Apply Now

        </motion.button>





        <motion.button


          whileHover={{
            scale: 1.03
          }}


          onClick={() => onDetailsClick(job)}


          className="
          px-5
          py-2.5
          rounded-xl
          border
          border-blue-200
          text-blue-700
          font-semibold
          text-sm
          hover:bg-blue-50
          transition
          "

        >

          Details

        </motion.button>







        <motion.button

          whileHover={{
            scale: 1.1
          }}

          onClick={handleShare}

          className="
          ml-auto
          p-3
          rounded-xl
          border
          border-gray-200
          hover:bg-gray-100
          "

        >

          <FaLink className="text-gray-600" />


        </motion.button>




      </div>






      



    </motion.div>


  );


}