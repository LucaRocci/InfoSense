import useFetch from "../../hooks/useFetch.hook";
import Form from "react-bootstrap/Form";
import { FC, useEffect } from "react";
import { setDefaultResultOrder } from "dns/promises";
import { useSearchParams } from "react-router-dom";


const ActivityUrl = "http://18.102.24.178:8000/statistics/esercizi"
const ProvinceUrl = "http://18.102.24.178:8000/statistics/province"

const provItems = ['Italia', 'Estero']

type DropDownProps = {
  type: string,
}



const DropDown: FC<DropDownProps> = ({type}) => {

  const [ searchParam,] = useSearchParams()

  const { apiData, loading, error } = useFetch( type === 'activityType' ? ActivityUrl : type === 'province' ? ProvinceUrl : '' );

  return (
    
      <Form.Select className="mb-2">
        {apiData
          ? apiData.map((el) => {
              if (typeof el === "string")
                return <option key={el} selected={searchParam.get(type.toString()) === el} value={el}>{el}</option>;
            })
          : provItems.map((e) => <option key={e} selected={e === searchParam.get("country")} value={e}>{e}</option> )}
      </Form.Select>
    
  );
};

export default DropDown;
