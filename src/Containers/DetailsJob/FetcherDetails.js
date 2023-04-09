import axios from "axios";

export const GetDetailJob = async (id, setState) => {
  try {
    const { data } = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
    );
    setState((prev) => ({ ...prev, ...data }));
  } catch (error) {
    setState(() => ({ error: error?.message }));
  }
};
