import Data from "./Data.json";

export const initialStateJob = {
  data: Data,
  fullTime: false,
  jobTitle: "programmer",
  location: "",
  page: 0,
};

export const URL = {
  LIST_JOBS: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
};
