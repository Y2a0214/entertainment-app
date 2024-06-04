import moviecard from "../../img/joker.jpeg";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Carosel from "./carosel";
import { FreeMode, Pagination } from "swiper/modules";
import moviewall from "../../img/main wall movie.jpg";
import bookmarkimg from "../../img/bookmark.png";
import unbookmarkimg from "../../img/unbookmark.png";
import { useState } from "react";

const Trending = () => {
  const [bookmark, setBookmark] = useState(false);

  const toggleOption = () => {
    setBookmark((changestate) => !changestate);
  };
  return (
    <>
      <div className="relative">
        <img className="h-screen w-full z-0" src={moviewall} alt="" />
        <div className="w-4/5 m-auto my-6 absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="flex justify-start text-2xl text-white font-normal mb-5">Trending</h2>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              440: {
                slidesPerView: 3
              },
              700: {
                slidesPerView: 5,
                
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="relative group">
                <img className="absolute inset-0 rounded-lg" src={moviecard} alt="" />
                <div className="relative h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-between p-4">
                    <img
                      className="fixed top-0 py-3"
                      onClick={toggleOption}
                      src={`${bookmark ? bookmarkimg : unbookmarkimg}`}
                      alt=""
                      width={20}
                    />
                    <div className="relative inset-0 flex items-center justify-center">
                    <button className="absolute top-20 backdrop-blur-sm bg-white/30 rounded-3xl p-3 w-2/5 mx-auto flex items-center justify-around"><i className="fa-solid fa-circle-play fa-lg" style={{color: "#;"}}></i> <span>Play</span> </button>
                    </div>
                    <div className="fixed top-[207px] flex items-start flex-col justify-evenly m-2 ">
                      <div className="flex">
                        <p className="mr-1 text-white text-xs font-semibold">2019 -</p>
                        <p className="mr-1 text-white text-xs font-semibold">Movie -</p>
                        <p className=" text-white text-xs font-semibold">PG</p>
                      </div>
                      <div>
                        <p className="text-white text-xl font-bold">Joker</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moviecard} alt="" />
            </SwiperSlide>
            <Carosel />
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Trending;
