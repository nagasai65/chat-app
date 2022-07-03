import { USER } from "../storeConstants";
import { get } from "lodash";

export const userProfileSelector = (state) => get(state, USER);
