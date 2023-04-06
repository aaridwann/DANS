import axios from "axios";
import { URL } from "./JobsConfig";
import Data from './Data.json'

export const GetListJobs = async (state, setState) => {
    console.log(Data)
    // axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
    // .then(response => {
    //   console.log(response.data); // memeriksa response data
    // })
    // .catch(error => {
    //   console.log(error); // memeriksa error
    // });
};
