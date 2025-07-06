/** @format */
import type { Ibook } from "@/types/types";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface BookSliderProps {
  books: Ibook[];
}

export default function BookSlider({ books }: BookSliderProps) {
  console.log(books);
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">All Books</h2>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="book-slider">
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <div className="border shadow-lg rounded-lg p-4 h-full w-full">
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
