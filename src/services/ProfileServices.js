import axios from "axios";

/**
 * ADD Business Profile Details
 */
export async function addProfileDetails({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/card/create/business/detail`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * GET Business Profile Details
 */
export async function getProfileDetails({ id: id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/card/get/specific/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
