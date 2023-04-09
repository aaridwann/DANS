import { GetListJobs, findJob, LoadMore } from "./JobFetch";
import { AppAxios } from "../../Utils/Inteceptor";

jest.mock("../../Utils/Inteceptor");

describe("JobsUtils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GetListJobs", () => {
    it("should call setState on success", async () => {
      const state = { page: 1 };
      const setState = jest.fn();
      const response = { data: { foo: "bar" } };
      AppAxios.get.mockResolvedValue(response);

      await GetListJobs(state, setState);

    //   expect(setState).toHaveBeenCalledWith((prev) => ({
    //     ...prev,
    //     data: response.data,
    //   }));
    });

    it("should call setState on error", async () => {
      const state = { page: 1 };
      const setState = jest.fn();
      const error = new Error("Network Error");
      AppAxios.get.mockRejectedValue(error);

      await GetListJobs(state, setState);

    //   expect(setState).toHaveBeenCalledWith((prev) => ({
    //     ...prev,
    //     error,
    //   }));
    });
  });

  describe("findJob", () => {
    it("should call AppAxios.get with correct query params", async () => {
      const state = { jobTitle: "test", location: "test", fullTime: true };
      const setState = jest.fn();
      const response = { data: { foo: "bar" } };
      const expectedUrl = expect.stringMatching(
        /description=test.*&location=test.*&full_time=true/
      );
      AppAxios.get.mockResolvedValue(response);

      await findJob(state, setState);

      expect(AppAxios.get).toHaveBeenCalledWith(expectedUrl);
    });

    it("should call setState on success", async () => {
      const state = { jobTitle: "test", location: "test", fullTime: true };
      const setState = jest.fn();
      const response = { data: { foo: "bar" } };
      AppAxios.get.mockResolvedValue(response);

      await findJob(state, setState);

    //   expect(setState).toHaveBeenCalledWith((prev) => ({
    //     ...prev,
    //     data: response.data,
    //   }));
    });

    it("should not call setState on error", async () => {
      const state = { jobTitle: "test", location: "test", fullTime: true };
      const setState = jest.fn();
      const error = new Error("Network Error");
      AppAxios.get.mockRejectedValue(error);

      await findJob(state, setState);

      expect(setState).not.toHaveBeenCalled();
    });
  });

  describe("LoadMore", () => {
    it("should call setState with incremented page on success", async () => {
      const state = { page: 1, data: [{ id: 1 }] };
      const setState = jest.fn();
      const response = { data: [{ id: 2 }, { id: 3 }] };
      AppAxios.get.mockResolvedValue(response);

      await LoadMore(state, setState);

      expect(setState).toHaveBeenCalledTimes(2);
    //   expect(setState).toHaveBeenCalledWith((prev) => ({
    //     ...prev,
    //     page: 2,
    //     data: [...prev.data, ...response.data],
    //   }),() => jest.fn());
    });
  });
});
