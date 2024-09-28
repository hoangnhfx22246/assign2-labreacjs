import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { url, image_path } from "../../APIMovie";
import "./MovieList.css";
import MovieDetail from "./MovieDetail";

/**
 * Component MovieList để hiển thị danh sách phim theo danh mục
 * @param {string} title - Tiêu đề của danh mục phim
 * @param {string} fetchUrl - URL API để lấy danh sách phim
 * @param {boolean} isLargeRow - Xác định xem có hiển thị dạng poster lớn hay không
 * @param {string} className - thêm class từ component cha để styled
 */

export default function MovieList({
  APIEndpoint,
  title,
  isLargeRow,
  className,
}) {
  const [movies, setMovies] = useState([]); // Khai báo state để lưu danh sách phim

  const [MovieDetails, setMovieDetails] = useState({
    //khai báo state để lưu thông tin phim
    movie: null,
    displayed: false,
  });

  // useEffect để fetch dữ liệu phim từ API khi component được mount
  const { isLoading, error, requestData } = useFetch();
  useEffect(() => {
    requestData(url + APIEndpoint, (data) => setMovies(data.results));
  }, [requestData, APIEndpoint]); // Chỉ chạy lại effect nếu requestData,APIEndpoint thay đổi

  // console.log(movies);

  // xử lý sự kiện click phim
  function handlerClick(movie) {
    let displayedMovie = MovieDetails.displayed;
    if (!displayedMovie) {
      // đang không được hiển thị
      displayedMovie = true; //cập nhật thành hiển thị
    } else if (MovieDetails.movie && MovieDetails.movie.id === movie.id) {
      // nếu là cùng 1 phim thì ẩn đi
      displayedMovie = false; //cập nhật thành không hiển thị
    }
    setMovieDetails((prevMovieDetails) => ({
      // *** cập nhật trạng thái hiển thị của movie
      // ** Nếu trang thái đang là ẩn(false) thì update thành hiển thị (true)
      // ** còn nếu trạng thái đang hiển thị(true) thì kiểm tra xem có cùng là 1 phim không:
      // * nếu cùng là 1 phim thì ẩn phim đó còn nếu khôgn thì hiển thị phim khác đã được chọn
      displayed: !prevMovieDetails.displayed
        ? true
        : MovieDetails.movie && MovieDetails.movie.id === movie.id
        ? false
        : true,
      movie: movie,
    }));
  }
  const path_img = image_path.url + image_path.size[1]; //đường dẫn hình ảnh
  return (
    <section id="movies" className="mb-20 mt-10">
      <div className="container mx-auto">
        {error ||
          (movies.length <= 0 && (
            <div className="text-red-400 p-5 border-2 border-red-400 m-2">
              Không tìm thấy phim phù hợp
            </div>
          ))}
        {/* Hiển thị tiêu đề danh mục */}
        {!isLargeRow && (
          <h2 className="text-white font-bold text-lg md:text-2xl mb-6">
            {title}
          </h2>
        )}
        <div
          className={`${className} movies-list overflow-y-hidden overflow-x-auto flex gap-2 py-6`}
        >
          {!error &&
            movies.map((movie) => (
              <img
                onClick={() => {
                  handlerClick(movie);
                }}
                key={movie.id}
                className=" max-h-44 object-contain transition-transform hover:scale-105 cursor-pointer"
                src={
                  // Hiển thị ảnh theo yêu cầu
                  isLargeRow
                    ? path_img + movie.poster_path
                    : path_img + movie.backdrop_path
                }
                alt={movie.name || movie.title}
              />
            ))}
        </div>
        <MovieDetail
          movie={MovieDetails.movie}
          displayed={MovieDetails.displayed}
        />
      </div>
    </section>
  );
}
