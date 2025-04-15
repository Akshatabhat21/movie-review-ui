import { movieDB } from "@/database/movies";
const MovieCard = () => {
  const movie = [{
    movieName: "Inception",
    moviePoster: "/assets/images/inception.jpg",
    movieReleaseYear: { date: "16 July", year: 2010 },
    rating: 4,
  }];
  return (
    <div className="flex items-center flex-wrap justify-between gap-[20px]">
      {movie.map((ele, index) => (
        <div key={index} className="movie-card-wrapper h-[500px] w-[300px] rounded-[8px] my-[20px]">
          <div className="movie-card-container w-full h-full object-cover flex flex-col relative">
            <img
              src={ele.moviePoster}
              alt="poster"
              className="h-full w-full rounded-[8px]"
            />
            <div className="movie-details p-4 w-full h-full flex flex-col justify-end absolute bottom-0 left-0 opacity-0 hover:opacity-100 transition-all duration-500 easi-in">
              <h3 className="text-[#808080] font-semibold text-xl">
                {ele.movieName}
              </h3>
              <p className="text-[#808080] font-medium text-lg">
                Released on {ele.movieReleaseYear.date},{" "}
                {ele.movieReleaseYear.year}
              </p>
              <p className="text-[#AD0B41] font-semibold text-md">
                {ele.rating}/5
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
