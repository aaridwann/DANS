import React, { useCallback, useEffect } from "react";
import { initialStateJob } from "./JobsConfig";
import { GetListJobs, LoadMore, findJob } from "./JobFetch";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../Routes/RoutesConfig";

function JobsContainer(Component) {
  return () => {
    const [state, setState] = React.useState(initialStateJob);
    const navigate = useNavigate();

    const navigateToDetails = useCallback(
      (params) => navigate(PATH_NAME.DETAILS_JOBS, { state: { id: params } }),
      []
    );
    const changeHandler = useCallback(
      (e) => {
        const name = e.target.name;
        return setState((prev) => ({ ...prev, [name]: e.target.value }));
      },
      [state.fullTime, state.jobTitle, state.location]
    );
    const fullTimeHandler = useCallback(
      () => setState((prev) => ({ ...prev, fullTime: !prev.fullTime })),
      [setState, state.fullTime]
    );
    const pageHandler = useCallback(
      () => setState((prev) => ({ ...prev, page: prev.page + 1 })),
      []
    );
    const method = {
      changeHandler: (e) => changeHandler(e),
      fullTimeHandler: () => fullTimeHandler(),
      GetListJobs: () => GetListJobs(state, setState),
      pageHandler: () => pageHandler(),
      submitFind: () => findJob(state, setState),
      loadMore: () => LoadMore(state, setState),
      navigate: (e) => navigateToDetails(e),
    };
    
    useEffect(() => {
      GetListJobs(state, setState);
    }, []);

    return <Component {...state} method={method} />;
  };
}

export default JobsContainer;
