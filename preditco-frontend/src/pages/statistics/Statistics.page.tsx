//React core imports
import React, { useEffect, useState } from "react";
//Charjs impoprts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Statistics.scss";
import { Bar } from "react-chartjs-2";
//React-bootstrap import
import { Container } from "react-bootstrap";
//Hooks imorts
import useFetch, {dataResponse} from "../../hooks/useFetch/useFetch.hook";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as LineChartIcon } from "../../assets/icons/line-chart.svg";
import { ReactComponent as PieChartIcon } from "../../assets/icons/pie-chart.svg";

type DataSetChart = {
  backgroundColor: string,
  data: number[] | never[],
  label: string
}

type DataChart = {
  labels: string[] | never[]
  datasets: DataSetChart[]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRadio: false,
  plugins: {
    legend: {
      position: "top" as const,
    }
  },
};

const Statistics = () => {
  const [province, setProvince] = useState<string>("Cuneo");
  const [activityType, setActivityType] = useState<string>("alberghi 3 stelle");
  const [country, setCountry] = useState<string>("Italia");
  const [show, setShow] = useState(false);

  const [ labels, setLabels ] = useState<string[]>([]);

  const [ data, setData ] = useState<DataChart>({    
    labels,
    datasets: [
      {
        label: "Arrivi",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Presenze",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ]});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { apiData, loading, error } = useFetch(
    `http://18.102.24.178:8000/statistics/${province}/${activityType}/${country}`
  );

  useEffect(() => {
    const mappedLabels:string[] = [];
    const arriveValue:number[] = [];
    const presValue:number[] = [];
    apiData?.forEach(e => {
      if(typeof e === 'string')
        return
      else if(e.arrivoPresenza === 'Arrivo'){
        mappedLabels.push(e.anno.toString())
        arriveValue.push(e.valore)
      } else {
        presValue.push(e.valore);
      }
    })
    setLabels(mappedLabels)
     setData({  labels,
      datasets: [
        {
          label: "Arrivi",
          data: arriveValue,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Presenze",
          data: presValue,
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ]}) 
      console.log(data)
  }, [apiData]);

  /*   const handleSubmit = async (event: any) => {

    event.preventDefault();
    event.stopPropagation();

    setProvince(event.target[0].value);
    setActivityType(event.target[1].value);
    setCountry(event.target[2].value)
    console.log(province, activityType, country)

  
  } */

  return (
    <>
      <Card className="board px-5 py-3 rounded-3 ">
        <h2>{province}</h2>
        <p>Start Date: MAY/2028 - End Date: JUNE/2020</p>
        <div className="d-flex flex-row">
          <button className="setting btn btn-primary" onClick={handleShow}>
            <SettingIcon title="Setting" />
          </button>
          <button className="chart btn btn-primary  mx-2">
            <LineChartIcon title="Line Chart" />
            <span className="button-text-chart">Line Chart</span>

          </button>
          <button className="chart btn btn-secondary">
            <PieChartIcon title="Pie Chart" />
            <span className="button-text-chart">Pie Chart</span>
          </button>

        </div>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else here</Dropdown.Item>


            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" />
          </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="d-flex justify-content-center">
        {/*       <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        {loading ? <>Loading...</>:''}
        {error ? <>Error...</>:''}
        <button type="submit">Submit</button>
      </form> */}
        <div style={{ width: '90%', height: '500px' }} className='d-flex justify-content-center align-items-center mt-4'>
          <Bar options={options} data={data} />
        </div>
      </Container>
    </>
  );
};

export default Statistics;
