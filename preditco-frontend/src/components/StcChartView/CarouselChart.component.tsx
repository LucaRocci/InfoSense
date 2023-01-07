//React core imports
import { FC, useState } from "react";
//Bootstrap icons imports
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

type CarouselChartProps = {
    toggleChart:string,
    renderBar: JSX.Element[] | null,
    renderLine: JSX.Element[] | null
}
const CarouselChart:FC<CarouselChartProps> = ({toggleChart, renderBar, renderLine}) => {

    const [carouselIndex, setCarouselIndex] = useState<number>(0);

    return (<>
    {/* Monthly filter for alberghi e extra-alberghi */}
    {renderBar !== null && toggleChart === "Bar" ? renderBar[carouselIndex] : toggleChart === "Line" && renderLine !== null ? renderLine[carouselIndex] : null}

       <div className="d-flex align-items-center justify-content-between w-100 mt-2">
          <button className="btn btn-primary rounded-circle"
            onClick={() => setCarouselIndex(carouselIndex - 1)}
            disabled={carouselIndex === 0}
          >
            <ArrowLeft className="arrow-svg "/>
          </button>
          <button className="btn btn-primary rounded-circle" 
            onClick={() => setCarouselIndex(carouselIndex + 1)}
            disabled={carouselIndex + 1 === renderBar?.length}
          >
            <ArrowRight className="arrow-svg " />
          </button>
        </div>
      </>)
}

export default CarouselChart; 