import React, { useCallback, useEffect } from "react";
import { initialStateJob } from "./JobsConfig";
import { GetListJobs } from "./JobFetch";

function JobsContainer(Component) {
  return () => {
    const [state, setState] = React.useState(initialStateJob);

    const changeHandler = useCallback(
      (e) => {
        const name = e.target.name;
        return setState((prev) => ({ ...prev, [name]: e.target.value }));
      },
      [state.fullTime, state.jobTitle, state.location]
    );

    const method = {
      changeHandler: (e) => changeHandler(e)
    };

    // useEffect(() => {
    //   GetListJobs();
    // }, []);

    return <Component {...state} method={method} />;
  };
}

export default JobsContainer;
