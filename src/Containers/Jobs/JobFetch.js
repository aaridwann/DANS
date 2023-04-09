import { URL } from "./JobsConfig";
import { AppAxios } from "../../Utils/Inteceptor";

const GetListJobs = async (state, setState) => {
  const { page } = state;
  const urlPaginate = URL.LIST_JOBS + `?page=` + page;

  AppAxios.get(urlPaginate)
    .then((response) => {
      setState((prev) => ({ ...prev, data: response.data }));
    })
    .catch((error) => {
      setState((prev) => ({ ...prev, error: error }));
    });
};

const findJob = async (state, setState) => {
  const { jobTitle, location, fullTime } = state;
  const description = `?description=${jobTitle}`;
  const locationParams = `&location=${location}`;
  const fulltimeParams = `&full_time=${fullTime}`;
  const url = URL.LIST_JOBS + description + locationParams + fulltimeParams;

  try {
    const { data } = await AppAxios.get(url);
    setState((prev) => ({ ...prev, data: data }));
  } catch (error) {}
};

const LoadMore = async (state, setState) => {
  setState((prev) => ({ ...prev, page: prev.page + 1 }));
  let { page } = state;
  const currentPage = parseInt(page) + 1;
  const urlPaginate = URL.LIST_JOBS + `?page=` + currentPage;

  try {
    const { data } = await AppAxios.get(urlPaginate);
    setState((prev) => ({ ...prev, data: [...prev.data, ...data] }));
  } catch (error) {
    setState((prev) => ({ ...prev, error: error?.message }));
  }
};

export { LoadMore, findJob, GetListJobs };
