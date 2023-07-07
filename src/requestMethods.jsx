import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// 	.currentUser.accessToken;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTE4YmMwOGNkYWVmMzBkNDZmM2M2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU2MDI1MSwiZXhwIjoxNjg4ODE5NDUxfQ.KQVgj_g0GV5mGgbVnCEYVM5M2PVF-2odWAY-b06jCBc";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
