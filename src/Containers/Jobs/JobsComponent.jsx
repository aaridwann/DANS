import React, { useMemo } from "react";
import InputComponent from "../../Component/Input/InputComponent";
import CheckboxComponent from "../../Component/Checkbox/CheckboxComponent";
import JobsContainer from "./JobsContainer";
import CardComponent from "../../Component/Card/CardComponent";

const _renderFilter = (Props) => {
  console.log("==", Props);
  return (
    <div className=" w-full flex gap-4 items-center justify-around">
      <InputComponent
        // value={Props.jobTitle}
        disabled={false}
        placeholder={"Job Title"}
        onChange={(e) => Props.method.changeHandler(e)}
        label={"Job Title"}
        type={"text"}
        name={"jobTitle"}
      />
      <InputComponent
        // value={""}
        disabled={false}
        placeholder={"Location"}
        onChange={(e) => Props.method.changeHandler(e)}
        label={"location"}
        type={"text"}
        name={"location"}
      />
      <CheckboxComponent
        onChange={(e) => Props.method.changeHandler(e)}
        title={"Fulltime"}
        value={Props.fullTime}
      />
    </div>
  );
};

const _renderHero = (Props) => {
  return (
    <React.Fragment>
      <div className=" sticky top-4 md:w-1/2 w-full shadow-2xl rounded-lg h-40 flex flex-col items-center justify-center p-4 gap-4 bg-white hover:scale-100 transition-all duration-300">
        <h2 className=" text-gray-500 font-bold -mt-10">
          find your dream{" "}
          <span className=" text-cyan-500 font-extrabold text-2xl">JOB</span>
        </h2>
        <_renderFilter {...Props} />
        <button className=" absolute -bottom-5 font-extrabold hover:bg-cyan-600 drop-shadow-xl shadow-lg duration-300 bg-cyan-500 px-6 py-2 text-white text-xl rounded-lg">
          Search
        </button>
      </div>
    </React.Fragment>
  );
};

const _renderJobs = ({ data }) => {
  const dataJob = useMemo(() => data, [data]);
  return (
    <div className=" flex flex-wrap gap-4 items-start justify-center ">
      {dataJob
        ? dataJob?.map(
            ({ company, company_logo, description, location, title, type }) => (
              <CardComponent
                title={title}
                img={company_logo}
                desc={description}
              />
            )
          )
        : "null"}
    </div>
  );
};

const _renderContainer = (Props) => (
  <main className=" w-full min-h-screen p-4 text-gray-400 font-extrabold flex flex-col">
    <h1 className=" text-3xl">
      We are <br />
      Waiting for you
    </h1>
    <_renderJobs data={Props.data} />
  </main>
);

function JobsComponent(Props) {
  return (
    <div className=" w-full mx-auto flex items-center flex-col gap-4 justify-center md:mt-48 mt-20 ">
      <_renderHero {...Props} />
      <_renderContainer {...Props} />
    </div>
  );
}

export default JobsContainer(JobsComponent);
