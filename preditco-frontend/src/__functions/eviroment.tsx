// Imports avatar svg
import avatarSara from "../assets/images/avatar-sara.svg";
import avatarSaraHover from "../assets/images/avatar-sara-hover.svg";
import avatarLuca from "../assets/images/avatar-luca.svg";
import avatarLucaHover from "../assets/images/avatar-luca-hover.svg";
import avatarPietro from "../assets/images/avatar-pietro.svg";
import avatarPietroHover from "../assets/images/avatar-pietro-hover.svg";
import avatarSimone from "../assets/images/avatar-simone.svg";
import avatarSimoneHover from "../assets/images/avatar-simone-hover.svg";
import avatarGabriele from "../assets/images/avatar-gabriele.svg";
import avatarGabrieleHover from "../assets/images/avatar-gabriele-hover.svg";
import avatarMarco from "../assets/images/avatar-marco.svg";
import avatarMarcoHover from "../assets/images/avatar-marco-hover.svg";
import avatarFederico from "../assets/images/avatar-federico.svg";
import avatarFedericoHover from "../assets/images/avatar-federico-hover.svg";
import avatarMatteo from "../assets/images/avatar-matteo.svg";
import avatarMatteoHover from "../assets/images/avatar-matteo-hover.svg";

// Interface for avatar
interface WorkerType {
  src: string;
  srcHover: string;
  name: string;
  field: string;
}

//Env var
const localHost = 'localhost:8000';
const server = '18.102.24.178:8000';

export const activeHost = localHost;


// Our team members
export const workers: WorkerType[] = [
  {
    src: `${avatarGabriele}`,
    srcHover: `${avatarGabrieleHover}`,
    name: "Gabriele",
    field: "Web Develop",
  },
  {
    src: `${avatarPietro}`,
    srcHover: `${avatarPietroHover}`,
    name: "Pietro",
    field: "Web Develop",
  },
  {
    src: `${avatarSimone}`,
    srcHover: `${avatarSimoneHover}`,
    name: "Simone",
    field: "Web Develop",
  },
  {
    src: `${avatarLuca}`,
    srcHover: `${avatarLucaHover}`,
    name: "Luca",
    field: "Backend",
  },
  {
    src: `${avatarMarco}`,
    srcHover: `${avatarMarcoHover}`,
    name: "Marco",
    field: "Backend",
  },
  {
    src: `${avatarSara}`,
    srcHover: `${avatarSaraHover}`,
    name: "Sara",
    field: "Backend",
  },
  {
    src: `${avatarFederico}`,
    srcHover: `${avatarFedericoHover}`,
    name: "Federico",
    field: "Fintech",
  },
  {
    src: `${avatarMatteo}`,
    srcHover: `${avatarMatteoHover}`,
    name: "Matteo",
    field: "Fintech",
  },
];

//Possible URL to call in fetch
export const ActivityUrl = `http://${activeHost}/statistics/structures`;
export const ProvinceUrl = `http://${activeHost}/statistics/province`;

//Default value
export const provItems = ["Italy", "Abroad"];
export const filterValue = ["Year", "Month"];
export const years = [
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

//object of label
export const label = {
    province: (
      <div className="d-flex align-items-center ms-2">
        <div className="me-1">📍</div> <div>Province</div>
      </div>
    ),
    provinceSecond: (
      <div className="d-flex align-items-center ms-2">
        <div className="me-1">📍</div> <div>Second Province</div>
      </div>
    ),
    activityType: (
      <div className="d-flex align-items-center ms-2">
        <div className="me-1">🛏️</div>
        <div>Activity Type</div>
      </div>
    ),
    country: (
      <div className="d-flex align-items-center ms-2">
        <div className="me-1">🌍</div>
        <div>Country</div>
      </div>
    ),
    type: (
      <div className="d-flex align-items-center ms-2">
        <div className="me-1">📆</div>
        <div>Month or Year</div>
      </div>
    ),
    year: (
      <div className="d-flex align-items-center ms-2">
        <div className="me-1">📆</div>
        <div>Year</div>
      </div>
    ),
  };

