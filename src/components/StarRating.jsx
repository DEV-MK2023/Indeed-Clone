const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span 
        key={i} 
        className={i <= rating ? "text-pink-600" : "text-gray-300"}
      >
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;