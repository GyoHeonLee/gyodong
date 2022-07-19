import { SWRInfiniteKeyLoader } from "swr/infinite";
import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
