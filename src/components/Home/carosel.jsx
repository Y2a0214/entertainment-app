import { useSwiper } from "swiper/react";
import left from "../../img/left-arrow.png"
import right from "../../img/right-arrow.png"

const Carosel = () => {
  const swiper = useSwiper();

    return(
        <div className="flex justify-end mt-3">
        <button
        className="mx-1 z-50"
          onClick={() => swiper.slidePrev()}
        >
          <img src={left} alt="" width={30}/>
        </button>
        <button
        className="mx-1 z-50"
        onClick={() => {swiper.slideNext()}}
        >
          <img src={right} alt="" width={30}/>
        </button>
      </div>
    )
}

export default Carosel
