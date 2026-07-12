import { useState, useEffect } from "react";
import {
  FaStar,
  FaExternalLinkAlt,
  FaRegBookmark,
  FaBookmark,
  FaLink,
} from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ApplyModal from "./ApplyModal";
import { useNavigate } from "react-router-dom";

const JobDetails1 = ({ job, onClose, loggedInUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    if (!job) return;

    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const found = stored.some((j) => j.id === job.id);

    setIsSaved(found);

  }, [job, loggedInUser]);


  if (!job) return null;



  const handleSave = () => {

    if (!loggedInUser) {

      alert("⚠️ Please login/register to save jobs!");

      navigate("/login");

      return;
    }


    const stored =
      JSON.parse(localStorage.getItem("savedJobs")) || [];


    if (isSaved) {

      const updated = stored.filter(
        (j) => j.id !== job.id
      );

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updated)
      );

      setIsSaved(false);


    } else {


      localStorage.setItem(
        "savedJobs",
        JSON.stringify([...stored, job])
      );

      setIsSaved(true);

    }

  };



  const handleApply = () => {

    if (!loggedInUser) {

      alert("⚠️ Please login/register to apply for jobs!");

      navigate("/login");

      return;

    }

    setShowModal(true);

  };



  return (

    <div
      className="
      w-full
      sticky
      top-0
      self-start
      h-[100vh]
      bg-white
      p-6
      rounded-2xl
      shadow-lg
      border
      border-blue-200
      md:flex
      flex-col
      overflow-y-auto
      "
    >


      {/* Mobile Close */}

      <button

        onClick={onClose}

        className="
        absolute
        top-3
        right-3
        text-gray-400
        hover:text-red-500
        text-xl
        font-bold
        md:hidden
        "

      >
        ×
      </button>




      {/* Header */}


      <div className="flex justify-between items-start gap-4">


        <div>


          <h2
            className="
            text-xl
            font-bold
            text-gray-900
            "
          >
            {job.title}
          </h2>



          <div
            className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-900
            mt-2
            "
          >

            <a

              href="#"

              className="
              flex
              items-center
              gap-1
              text-blue-700
              font-semibold
              hover:underline
              "

            >

              {job.company}

              <FaExternalLinkAlt className="w-3 h-3"/>

            </a>



            <span
              className="
              flex
              items-center
              gap-1
              text-gray-700
              "
            >

              · {job.rating || 3.8}

              <FaStar className="text-yellow-500 w-4 h-4"/>

            </span>


          </div>



          <p className="text-gray-600 text-sm mt-1">

            {job.city}, {job.location}

          </p>



          <span
            className="
            text-lg
            block
            mt-2
            font-bold
            text-gray-700
            "
          >

            {job.salary}

          </span>


        </div>




        <button

          onClick={onClose}

          className="
          hidden
          md:block
          text-gray-400
          hover:text-red-500
          text-xl
          font-bold
          "

        >

          ×

        </button>


      </div>






      {/* Buttons */}


      <div
        className="
        flex
        items-center
        gap-3
        pt-4
        pb-5
        flex-wrap
        "
      >


        <button

          onClick={handleApply}

          className={`

          text-sm
          font-bold
          py-2
          px-4
          rounded-xl
          flex
          items-center
          gap-2
          shadow-md

          ${
            loggedInUser

            ?

            "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"

            :

            "bg-gray-300 text-gray-600 cursor-not-allowed"

          }

          `}

        >

          Apply Now

          <FaExternalLinkAlt className="w-3 h-3"/>


        </button>





        <button

          onClick={handleSave}

          className="
          p-2
          rounded-lg
          border
          border-blue-300
          hover:bg-blue-50
          "

        >

          {

          isSaved

          ?

          <FaBookmark className="w-5 h-5 text-blue-600"/>

          :

          <FaRegBookmark className="w-5 h-5 text-gray-600"/>

          }


        </button>






        <button

          className="
          p-2
          rounded-lg
          border
          border-blue-300
          hover:bg-blue-50
          "

          onClick={()=>{

            navigator.clipboard.writeText(window.location.href);

            alert("Job link copied!");

          }}

        >

          <FaLink className="w-5 h-5 text-blue-600"/>


        </button>



      </div>






      {
        showModal &&

        <ApplyModal

          job={job}

          onClose={()=>setShowModal(false)}

        />

      }





      <hr className="border-blue-200 my-3"/>






      {/* Scroll Area - SAME LOGIC */}


      <div
        className="
        flex
        flex-col
        gap-5
        overflow-y-auto
        thin-scroll
        pr-2
        flex-grow
        "
      >



        {/* Job Details */}


        <div className="pt-4">


          <h1
            className="
            font-bold
            text-lg
            text-blue-800
            "
          >

            Job Details

          </h1>



          <div className="flex gap-4 pt-4">


            <BsCashStack className="text-blue-600 h-6"/>


            <div className="flex flex-col gap-1">

              <span className="font-bold text-gray-700">

                Pay

              </span>


              <span
                className="
                bg-blue-50
                px-2
                py-1
                rounded-md
                text-sm
                font-bold
                "
              >

                {job.salary}

              </span>


            </div>


          </div>





          <div className="flex gap-4 pt-4">


            <BsCashStack className="text-blue-600 h-6"/>


            <div className="flex flex-col gap-1">


              <span className="font-bold text-gray-700">

                Job Type

              </span>


              <span
                className="
                bg-blue-50
                px-2
                py-1
                rounded-md
                text-sm
                font-bold
                "
              >

                {job.type}

              </span>


            </div>


          </div>



        </div>





        <hr className="border-blue-200"/>





        {/* Location */}


        <div>


          <h1 className="font-bold text-lg text-blue-800">

            Location

          </h1>



          <div className="flex gap-4 pt-4">


            <IoLocationSharp className="text-blue-600 h-6"/>


            <span className="font-bold text-gray-700">

              {job.city}

            </span>


          </div>



        </div>






        <hr className="border-blue-200"/>





        {/* Description */}


        <div>


          <h1 className="font-bold text-lg text-blue-800">

            Full Job Description

          </h1>



          <div className="flex flex-col gap-3 pt-4">


            <h2 className="font-bold text-gray-700">

              Job Summary:

            </h2>



            <p className="text-sm text-gray-700">

              {job.description || "No job description available."}

            </p>




            <h2 className="font-bold text-gray-700">

              Key Responsibilities:

            </h2>



            <ul className="list-disc pl-5 text-sm text-gray-700">


              {

              job.requirements?.map((req,i)=>(

                <li key={i}>

                  {req}

                </li>

              ))

              ||

              <li>
                No specific requirements listed.
              </li>

              }


            </ul>



          </div>


        </div>




      </div>




    </div>

  );

};


export default JobDetails1;