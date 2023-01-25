// React core imports
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import DropDown from "../DropDown/DropDown.component";

// Props type
export type TutorialModalMonth = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const TutorialPredictionMonth: FC<TutorialModalMonth> = ({
  setCurrentStep,
}) => {
  const [, setSearchParam] = useSearchParams();

  const [date, setDate] = useState<string>(`${new Date().getFullYear()}-${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 3) : new Date().getMonth() + 3}`);
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const now = new Date();
    const prdDate = new Date(date);

    if (Number(prdDate.getFullYear()) < Number(now.getFullYear())) {
      setError('*Select a future month!')
      return
    }
    if ((Number(prdDate.getFullYear()) === Number(now.getFullYear())) && Number(prdDate.getMonth()) < Number(now.getMonth())) {
      setError('*Select a future month!')
      return
    }
    if ((Number(prdDate.getFullYear()) === Number(now.getFullYear())) && (Number(prdDate.getMonth()) === Number(now.getMonth()) || Number(prdDate.getMonth()) === (Number(now.getMonth()) + 1))) {
      setError('*Select at least 2 month from today!')
      return
    }
    if (Number(prdDate.getFullYear()) > (Number(now.getFullYear()) + 5)) {
      setError('*Select at most 5 years from today!')
      return
    }
    if(Number(`${date[5]}${date[6]}`) > 12){
      setError('*Select a valid month')
      return
    }
    if (date.length < 7 || date.length > 7) {
      setError('*Format yyyy-mm')
      return
    }
    if (date[4] !== '-') {
      setError('*Format yyyy-mm')
      return
    }

    setError('')
  }, [date])

  const handleOnRangeSubmit = (e: any) => {
    //PreventDefault and stopPropagation beccause is singlepage application and for stop the propagation of the event
    e.preventDefault();
    e.stopPropagation();

    const now = new Date();
    const prdDate = new Date(e.target[5].value);
    if (Number(prdDate.getFullYear()) < Number(now.getFullYear()))
      return
    if ((Number(prdDate.getFullYear()) === Number(now.getFullYear())) && Number(prdDate.getMonth()) < Number(now.getMonth()))
      return
    if ((Number(prdDate.getFullYear()) === Number(now.getFullYear())) && (Number(prdDate.getMonth()) === Number(now.getMonth()) || Number(prdDate.getMonth()) === (Number(now.getMonth()) + 1)))
      return
    if (Number(prdDate.getFullYear()) > (Number(now.getFullYear()) + 5))
      return
    if(Number(`${date[5]}${date[6]}`) > 12)
      return
    if (date.length < 7 || date.length > 7)
      return
    if (date[4] !== '-')
       return

      let months;
      months = (prdDate.getFullYear() - now.getFullYear()) * 12;
      months -= now.getMonth();
      months += prdDate.getMonth();
      const steps = months <= 0 ? 0 : months;

      setSearchParam({
        kind: "prd-range",
        province: e.target[1].value,
        activityType: e.target[2].value,
        country: e.target[3].value,
        indicator: e.target[4].value,
        steps: steps.toString(),
      });

      setCurrentStep(4)
    };

  return (
    <>
      <p>Chose your setting, then wait for your prediction data.</p>
      <form onSubmit={handleOnRangeSubmit}>
              <p>Select area, activity type and year of interest.</p>
              <DropDown type="region" />
              <DropDown type="province" />
              <DropDown type="prdActivityType" />
              <DropDown type="country" />
              <DropDown type="indicator" />
              <div className="d-flex align-items-center ms-2">
                <div className="me-1">📆</div>
                <div>Prediction end date</div>
              </div>
              <input value={date} min={`${new Date().getFullYear()}-${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 3) : new Date().getMonth() + 3}`} max={`${new Date().getFullYear() + 5}-${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}`} className={`rounded px-2 py-1 w-100 ${!!error ? 'border-danger' : ''}`} style={{ borderStyle: 'solid' }} type="month" onChange={(e) => setDate(e.target.value)} />
              <p className="text-danger ms-2 mt-1">{error}</p>


              <Button variant="primary" className="rounded-pill" type="submit" disabled={!!error}>
                Save Changes
              </Button>
          </form>
    </>
  );
};

export default TutorialPredictionMonth;
