import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTE4YmMwOGNkYWVmMzBkNDZmM2M2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODIxMTUxNiwiZXhwIjoxNjg4NDcwNzE2fQ.mIbtNwEx0EUwYXSUnDvjKL0zf3gJ0smq5WFe0q3wjNI";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
