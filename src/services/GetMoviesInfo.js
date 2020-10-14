import React, { useCallback } from "react";
import axios from "axios";
import { API_URL } from "./settings";
export const GetMoviesInfo = async ({ busqueda, page = 1 } = {}) => {
	const baseurl = API_URL + busqueda + `&page=${page}`;
	const request = await axios.get(baseurl);
	const res = request;

	if (res.data.Response == "True") {
		return res;
	} else {
		return "False";
	}
};
