import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { url, requests, image_path } from "../../APIMovie";
import { useState } from "react";

// TODO sử dụng styled-components
import styled from "styled-components";
const BannerComponent = styled.div`
  background-image: linear-gradient(#00000000, #000000e0),
    url(${({ $urlImg }) => $urlImg});
  background-size: cover;
  background-position: center;
`;

export default function Banner() {
  const [movieBanner, setMovieBanner] = useState(null);

  //TODO lấy danh sách các bộ phim thông qua hàm custom hooks useFetch
  const path = url + requests.fetchNetflixOriginals;
  const { isLoading, error, requestData } = useFetch();

  //TODO lấy random 1 phim làm banner
  useEffect(() => {
    requestData(path, (data) => {
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setMovieBanner(randomMovie);
    });
  }, [requestData, path]);

  // console.log(movieBanner);
  //TODO lấy đường dẫn hình ảnh
  const image_link =
    movieBanner &&
    image_path.url + image_path.size[0] + movieBanner.backdrop_path;
  // console.log(movieBanner.original_title);
  return (
    <section id="banner">
      {movieBanner && (
        <BannerComponent $urlImg={image_link}>
          <div className="container mx-auto text-white py-28">
            <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold tracking-tight my-10">
              {movieBanner.name || movieBanner.title}
            </h2>
            <div className="actions flex gap-3 mb-1 justify-center md:justify-start">
              <button className="cursor-pointer bg-[#a9a9a939] px-4 py-1 rounded-sm">
                Play
              </button>
              <button className="cursor-pointer bg-[#a9a9a939] px-4 py-1 rounded-sm">
                My List
              </button>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="text-xs max-w-xs line-clamp-5">
                {movieBanner.overview}
              </div>
            </div>
          </div>
        </BannerComponent>
      )}
    </section>
  );
}
