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

    const saved =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    setIsSaved(
      saved.some((item)=>item.id === job.id)
    );

  },[job]);



  if(!job) return null;




  const handleSave = ()=>{


    if(!loggedInUser){

      alert("Please login first!");
      navigate("/login");
      return;

    }


    const saved =
    JSON.parse(localStorage.getItem("savedJobs")) || [];


    if(isSaved){

      const updated =
      saved.filter(item=>item.id!==job.id);

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updated)
      );

      setIsSaved(false);

    }

    else{

      localStorage.setItem(
        "savedJobs",
        JSON.stringify([...saved,job])
      );

      setIsSaved(true);

    }


  };





  const handleApply = ()=>{


    if(!loggedInUser){

      alert("Please login first!");
      navigate("/login");
      return;

    }


    setShowModal(true);


  };





return (

<div
className="
w-full
bg-white
rounded-2xl
shadow-lg
border
border-gray-200
p-5
h-full
overflow-y-auto
"
>


{/* HEADER */}

<div className="
flex
justify-between
items-start
gap-4
">


<div>

<h2 className="
text-xl
font-bold
text-gray-900
">
{job.title}
</h2>


<p className="
text-blue-600
font-semibold
mt-1
">
{job.company}
</p>


<p className="
text-sm
text-gray-500
mt-1
">
{job.city}, {job.location}
</p>


<p className="
font-bold
text-gray-700
mt-2
">
{job.salary}
</p>


</div>



<button
onClick={onClose}
className="
text-gray-400
hover:text-red-500
text-xl
"
>
×
</button>


</div>





{/* ACTIONS */}

<div className="
flex
gap-3
mt-5
flex-wrap
">


<button
onClick={handleApply}
className="
bg-blue-600
text-white
px-5
py-2
rounded-lg
font-semibold
text-sm
hover:bg-blue-700
"
>

Apply Now

</button>



<button
onClick={handleSave}
className="
border
border-gray-300
p-2
rounded-lg
hover:bg-blue-50
"
>

{
isSaved ?
<FaBookmark className="text-blue-600"/>
:
<FaRegBookmark className="text-gray-500"/>
}

</button>




<button
onClick={()=>{
navigator.clipboard.writeText(window.location.href);
alert("Job link copied!");
}}
className="
border
border-gray-300
p-2
rounded-lg
hover:bg-blue-50
"
>

<FaLink className="text-blue-600"/>

</button>


</div>





{showModal &&
<ApplyModal
job={job}
onClose={()=>setShowModal(false)}
/>
}





<hr className="my-5"/>




{/* DETAILS */}


<div className="space-y-5">



<div>

<h3 className="
font-bold
text-blue-700
mb-3
">
Job Details
</h3>


<div className="flex gap-3 items-center">

<BsCashStack className="text-blue-600"/>

<div>

<p className="text-sm text-gray-500">
Salary
</p>

<p className="font-semibold">
{job.salary}
</p>

</div>


</div>




<div className="
flex
gap-3
items-center
mt-4
">

<BsCashStack className="text-blue-600"/>

<div>

<p className="text-sm text-gray-500">
Type
</p>

<p className="font-semibold">
{job.type}
</p>

</div>


</div>


</div>





<hr/>





<div>


<h3 className="
font-bold
text-blue-700
mb-3
">
Location
</h3>


<div className="flex gap-3 items-center">

<IoLocationSharp
className="text-blue-600"
/>


<p className="font-semibold text-gray-700">

{job.city}

</p>


</div>


</div>






<hr/>





<div>


<h3 className="
font-bold
text-blue-700
mb-3
">
Job Description
</h3>



<p className="
text-sm
text-gray-700
leading-relaxed
">

{
job.description ||
"No description available."
}

</p>




<h4 className="
font-bold
mt-5
mb-2
text-gray-800
">

Requirements

</h4>


<ul className="
list-disc
pl-5
text-sm
text-gray-700
space-y-1
">


{
job.requirements?.map(
(req,index)=>(

<li key={index}>
{req}
</li>

)
)
}


</ul>


</div>



</div>


</div>

);


};


export default JobDetails1;