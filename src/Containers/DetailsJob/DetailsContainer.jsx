import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetDetailJob } from "./FetcherDetails";
import { initialState } from "./DetailsConfig";

function WithDetailsContainer(Component) {
  return () => {
    const [state, setState] = useState(initialState);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()

    const ParsingPlainText = (text, key, setState) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const plainText = doc.body.textContent;
      setState((prev) => ({ ...prev, [key]: plainText }));
    };
    const close = () => {
      setState((prev) => ({ ...prev, showDetails: !prev.showDetails }));
    };

    const method = {
      close: () => close(),
      navigate: (e) => navigate(e)
    };

    useEffect(() => {
      ParsingPlainText(state?.description, "description", setState);
      ParsingPlainText(state?.how_to_apply, "how_to_apply", setState);
      setTimeout(() => setShow(!show),1000);
    }, [state?.description]);

    useEffect(() => {
      GetDetailJob(location?.state?.id, setState);
    }, [location.state]);

    return <Component show={show} method={method} {...state} />;
  };
}

export default WithDetailsContainer;
