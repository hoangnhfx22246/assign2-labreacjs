/**
 * Component SearchForm để hiển thị form tìm kiếm phim
 * @param {function} onSubmit - xử lý sự kiện submit form*/

import { useRef } from "react";

export default function SearchForm({ onSubmit }) {
  const search = useRef(); // sử dụng useRef để làm việc với DOM

  function handlerSubmit(e) {
    e.preventDefault();
    onSubmit(search.current.value);
  }

  return (
    <section
      id="search-form"
      className="md:mx-auto mx-2 md:w-5/12 bg-white mt-28"
    >
      <form onSubmit={handlerSubmit}>
        <div className="form-control flex justify-between p-4 border-b-4 border-cyan-400">
          <input
            className="grow focus-visible: outline-none"
            type="text"
            placeholder="search...."
            required
            ref={search}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="actions px-4 py-9 flex justify-end gap-6 text-sm font-semibold">
          <button className="p-3 text-gray-600" type="reset">
            RESET
          </button>
          <button className="p-3 bg-cyan-400 text-white" type="submit">
            SEARCH
          </button>
        </div>
      </form>
    </section>
  );
}
