import axios from "axios";

/**
 * USER LOGIN API
 */
export async function userLogin({ body: body }) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOCAL_URL}/auth/signup/user`,
      body
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
