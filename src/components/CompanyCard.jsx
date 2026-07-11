import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  const handleSalaryClick = () => {
    navigate(`/salaries/${company.id}`);
  };

  return (
    <div className="flex flex-col items-start p-4 rounded-lg hover:shadow-md transition-all">
      <div className="flex items-center w-full gap-4">
        <div className={`w-14 h-14 rounded-full ${company.iconBg} flex items-center justify-center`}>
          <span className={`text-lg font-bold ${company.iconColor}`}>{company.icon}</span>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">{company.name}</div>
          <div className="flex items-center">
            <StarRating rating={company.rating} />
            <span className="ml-2 text-sm text-gray-600">
              {company.reviews.toLocaleString()} reviews
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
        <button 
          onClick={handleSalaryClick}
          className="text-blue-600 hover:underline"
        >
          Salaries
        </button>
        <a href="#" className="hover:underline">Q&A</a>
        <a href="#" className="hover:underline">Jobs</a>
      </div>
    </div>
  );
};

export default CompanyCard;