import axios from "axios";

/**
 * ADD Profile Details
 */
export async function addProfileDetails({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/card/create/detail`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
