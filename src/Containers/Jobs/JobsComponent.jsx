import React, { useMemo } from "react";
import InputComponent from "../../Component/Input/InputComponent";
import CheckboxComponent from "../../Component/Checkbox/CheckboxComponent";
import JobsContainer from "./JobsContainer";
import CardComponent from "../../Component/Card/CardComponent";

const _renderFilter = (Props) => {
  return (
    <div className=" w-full flex gap-4 items-center justify-around">
      <InputComponent
        disabled={false}
        placeholder={"Job Title"}
        onChange={(e) => Props.method.changeHandler(e)}
        label={"Job Title"}
        type={"text"}
        name={"jobTitle"}
      />
      <InputComponent
        disabled={false}
        placeholder={"Location"}
        onChange={(e) => Props.method.changeHandler(e)}
        label={"location"}
        type={"text"}
        name={"location"}
      />
      <CheckboxComponent
        onChange={() => Props.method.fullTimeHandler()}
        title={"Fulltime"}
        value={Props.fullTime}
      />
    </div>
  );
};
const _renderHero = (Props) => {
  const _renderButtonSubmit = () => (
    <button
      onClick={() => Props.method.submitFind()}
      className=" absolute -bottom-5 font-extrabold hover:bg-cyan-600 drop-shadow-xl shadow-lg duration-300 bg-cyan-500 px-6 py-2 text-white text-xl rounded-lg"
    >
      Search
    </button>
  );

  return (
    <React.Fragment>
      <div className="sticky z-50 top-4 md:w-[700px] shadow-2xl rounded-lg h-40 flex flex-col items-center justify-center p-4 gap-4 bg-white hover:scale-100 transition-all duration-300">
        <h2 className=" text-gray-500 font-bold -mt-10">
          Your dreams{" "}
          <span className=" text-cyan-500 font-extrabold text-2xl">JOB</span>
        </h2>
        <_renderFilter {...Props} />
        <_renderButtonSubmit />
      </div>
    </React.Fragment>
  );
};
const _renderJobs = (Props) => {
  const jobs = useMemo(() => Props.data, [Props.data]);

  return (
    <div className=" flex flex-wrap items-start justify-center ">
      {jobs
        ? jobs?.map(
            (data, i) =>
              data && (
                <React.Fragment key={i}>
                  <CardComponent
                    onClick={() => Props.method.navigate(data?.id)}
                    title={data?.title}
                    img={data?.company_logo}
                    desc={data?.description}
                    type={data?.type}
                    company={data?.company}
                  />
                </React.Fragment>
              )
          )
        : "Data not found"}
    </div>
  );
};
const _renderContainer = (Props) => {
  const buttonLoadMore = () => (
    <button
      onClick={() => Props.method.loadMore()}
      className=" max-w-xl mt-10 mx-auto bg-cyan-400 text-white px-6 py-3 rounded-md"
    >
      Load more
    </button>
  );

  return (
    <main className="scrollbar-none w-full overflow-scroll sticky top-4 max-h-[700px] p-4 text-gray-400 font-extrabold flex flex-col">
      <_renderJobs {...Props} />
      {Props.data.length !== 0 && buttonLoadMore()}
    </main>
  );
};
function JobsComponent(Props) {
  return (
    <div className="min-h-screen w-full mx-auto flex items-center flex-col gap-4 justify-center md:mt-48 mt-20 ">
      <_renderHero {...Props} />
      <_renderContainer {...Props} />
    </div>
  );
}

export default JobsContainer(JobsComponent);
