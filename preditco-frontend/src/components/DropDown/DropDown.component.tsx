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
  setShowType?: Dispatch<SetStateAction<boolean>>,
  ref?:React.MutableRefObject<undefined>
}
//DropDown Comopnent
const DropDown: FC<DropDownProps> = ({type, setShowType, ref}) => {

  //SearchParam hook for dynamic defaultValue
  const [ searchParam,] = useSearchParams();
  //useFetch hook for call api
  const [ apiData, loading, error ] = useFetch( type === 'activityType' ? ActivityUrl : type === 'province' || type === 'provinceSecond' ? ProvinceUrl : '' );
  
/*   useEffect(() => {
    console.log(loading, error)
  }, [loading, error]) */

  const handleChange = (e:any) => {
    if(type === 'activityType'){
      if(e.target.value === 'alberghi' || e.target.value === 'extra-alberghieri'){
        if(typeof setShowType !== 'undefined')
        setShowType(true)
      }
      else if(typeof setShowType !== 'undefined')
        setShowType(false)
    }
  }

  return (
    
      <Form.Select className="mb-2" onChange={handleChange} >
      {loading ? <option>Loading...</option>:null}
        {Array.isArray(apiData) && !loading && !error && type !== 'province2'
          ? apiData.map((el) => {
              if (typeof el === "string")
                return <option key={el} selected={searchParam.get(type.toString()) === el} value={el}>{el}</option>;
            })
          : null}
          {type === 'provinceSecond' && Array.isArray(apiData) ? apiData.map((el) => {
              if (typeof el === "string")
                return <option key={el} selected={searchParam.get(type.toString()) === el} value={el}>{el}</option>;
            })
          : null }
          {type === 'country' && !loading ? provItems.map((e) => <option key={e} selected={e === searchParam.get("country")} value={e}>{e}</option> ): null } 
          {type === 'type' && !loading  ?  filterValue.map((e) => <option key={e}  selected={e === searchParam.get("type")} value={e}>{e}</option>):null }
      </Form.Select>
    
  );
};

export default DropDown;
