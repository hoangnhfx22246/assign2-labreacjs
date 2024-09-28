import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_KEY, url, image_path } from "../../APIMovie";

// react-youtube
import YouTube from "react-youtube";
/**
 * Component MovieDetail để hiển thị thông tin chi tiết phim
 * @param {object} movie - thông tin phim
 * @param {boolean} displayed - Xác định xem chi tiết phim có hiển thị hay không
 */
export default function MovieDetail({ displayed, movie }) {
  const [movieDetails, setMovieDetails] = useState({}); //Khai báo state để lưu thông tin phim
  // console.log(movie);
  // useEffect để fetch dữ liệu phim từ API khi component được mount
  const { isLoading, error, requestData } = useFetch();
  useEffect(() => {
    if (displayed && movie) {
      const fetchMovieDetails = `${url}/movie/${movie.id}/videos?api_key=${API_KEY}`;
      requestData(fetchMovieDetails, (data) => {
        setMovieDetails(data);
      });
    }
  }, [requestData, displayed, movie]);

  // console.log(movieDetails);

  // setting youtube components
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const path_img = image_path.url + image_path.size[1]; //đường dẫn hình ảnh

  return (
    <>
      {displayed && movieDetails && (
        <div className="movie-details text-white flex my-10 gap-6 flex-col md:flex-row">
          <div className="movie-details__text md:w-[50%] space-y-4 order-1 md:order-none">
            <h2 className="text-3xl font-bold border-b-2 py-4">
              {movie.name || movie.title}
            </h2>
            <div className="text-sm font-bold">
              <div>Release Date: {movie.first_air_date}</div>
              <div>Vote: {movie.vote_average} / 10</div>
            </div>

            <div className="text-xs">{movie.overview}</div>
          </div>
          {movieDetails.results && (
            <div className="movie-details__trailer md:w-[50%]">
              {movieDetails.results.length > 0 ? (
                <YouTube videoId={movieDetails.results[0].key} opts={opts} />
              ) : (
                <img
                  src={path_img + movie.backdrop_path}
                  alt={movie.name || movie.title}
                  className="w-full"
                />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
