import { axios } from "~/utils/require";
export const getMenu = () => {
  return axios({
    url: "/api/menu",
    methods: "get",
  });
};
