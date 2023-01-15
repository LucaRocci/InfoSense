//React core imports
import { FC, useState } from "react";
//Bootstrap icons imports
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
//Swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
//Props for type component
type CarouselChartProps = {
    toggleChart:string,
    rangeYear: number[],
    renderBar: JSX.Element[] | null,
    renderLine: JSX.Element[] | null
}
//Single chart for type=Month in searchParam
const CarouselChart:FC<CarouselChartProps> = ({toggleChart, rangeYear, renderBar, renderLine}) => {
    //State to handle the carousel change view
    const [carouselIndex, setCarouselIndex] = useState<number>(0);

    return (      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
    {/* Monthly chart for alberghi or extra-alberghi */}
    {renderBar !== null && toggleChart === "Bar" ? renderBar.map(e => <SwiperSlide>{e}</SwiperSlide>) : toggleChart === "Line" && renderLine !== null ? renderLine.map(e => <SwiperSlide>{e}</SwiperSlide>) : null}
    {/* Print the year */}
    {/* <h3 className="text-white my-3">{rangeYear[carouselIndex]}</h3> */}
      {/* Buttons to handle the carousel slide */}
{/*        <div className="d-flex align-items-center justify-content-between w-100 mt-2">
          <button style={{position:'relative'}} className={`btn rounded-circle shadow-lg ${carouselIndex === 0 ? 'btn-secondary':'btn-primary'}`}
            onClick={() => setCarouselIndex(carouselIndex - 1)}
            disabled={carouselIndex === 0}
          >
            <ArrowLeft className="arrow-svg "/>
          </button>
          <button className={`btn btn-primary rounded-circle shadow-lg ${carouselIndex + 1 === renderBar?.length ? 'btn-secondary':'btn-primary'}`}
            onClick={() => setCarouselIndex(carouselIndex + 1)}
            disabled={carouselIndex + 1 === renderBar?.length}
          >
            <ArrowRight className="arrow-svg" />
          </button>
        </div> */}
          </Swiper>)
}

export default CarouselChart; 