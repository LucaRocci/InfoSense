//React core imports
import { FC, useState } from "react";
//Bootstrap icons imports
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
//Props for type component
type CarouselChartProps = {
    toggleChart:string,
    renderBar: JSX.Element[] | null,
    renderLine: JSX.Element[] | null
}
//Single chart for type=Month in searchParam
const CarouselChart:FC<CarouselChartProps> = ({toggleChart, renderBar, renderLine}) => {
    //State to handle the carousel change view
    const [carouselIndex, setCarouselIndex] = useState<number>(0);

    return (<>
    {/* Monthly chart for alberghi or extra-alberghi */}
    {renderBar !== null && toggleChart === "Bar" ? renderBar[carouselIndex] : toggleChart === "Line" && renderLine !== null ? renderLine[carouselIndex] : null}

      {/* Buttons to handle the carousel slide */}
       <div className="d-flex align-items-center justify-content-between w-100 mt-2">
          <button style={{position:'relative'}} className="btn btn-primary rounded-circle shadow-lg"
            onClick={() => setCarouselIndex(carouselIndex - 1)}
            disabled={carouselIndex === 0}
          >
            <ArrowLeft className="arrow-svg "/>
          </button>
          <button className="btn btn-primary rounded-circle shadow-lg" 
            onClick={() => setCarouselIndex(carouselIndex + 1)}
            disabled={carouselIndex + 1 === renderBar?.length}
          >
            <ArrowRight className="arrow-svg" />
          </button>
        </div>
      </>)
}

export default CarouselChart; 