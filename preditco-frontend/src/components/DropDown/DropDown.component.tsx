//React core imports
import { FC, useEffect, Dispatch, SetStateAction } from "react";
//Hokks imports
import useFetch from "../../hooks/useFetch.hook";
//Components import
import Form from "react-bootstrap/Form";
//React-router-dom imports
import { useSearchParams } from "react-router-dom";

//Possible URL to call in fetch
const ActivityUrl = "http://18.102.24.178:8000/statistics/esercizi"
const ProvinceUrl = "http://18.102.24.178:8000/statistics/province"
//Default value 
const provItems = ['Italia', 'Estero']
const filterValue = ['Year','Month']
//Props type
type DropDownProps = {
  type: string,
  setShowType: Dispatch<SetStateAction<boolean>>
}
//DropDown Comopnent
const DropDown: FC<DropDownProps> = ({type, setShowType}) => {

  //SearchParam hook for dynamic defaultValue
  const [ searchParam,] = useSearchParams();
  //useFetch hook for call api
  const [ apiData, loading, error ] = useFetch( type === 'activityType' ? ActivityUrl : type === 'province' ? ProvinceUrl : '' );
  
/*   useEffect(() => {
    console.log(loading, error)
  }, [loading, error]) */

  const handleChange = (e:any) => {
    if(type === 'activityType'){
      if(e.target.value === 'alberghi' || e.target.value === 'extra-alberghieri')
        setShowType(true)
      else
        setShowType(false)
    }
  }

  return (
    
      <Form.Select className="mb-2" onChange={handleChange}>
        {Array.isArray(apiData)
          ? apiData.map((el) => {
              if (typeof el === "string")
                return <option key={el} selected={searchParam.get(type.toString()) === el} value={el}>{el}</option>;
            })
          : type === 'country'? provItems.map((e) => <option key={e} selected={e === searchParam.get("country")} value={e}>{e}</option> ): type === 'type'?  filterValue.map((e) => <option key={e}  selected={e === searchParam.get("type")} value={e}>{e}</option>):null }
      </Form.Select>
    
  );
};

export default DropDown;
