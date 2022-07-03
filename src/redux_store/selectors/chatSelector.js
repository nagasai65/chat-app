import { get } from "lodash";
import { CHAT } from "../storeConstants";

export const selectedBuddySelector = (state) =>
  get(state, `${CHAT}.selectedBuddy`);

export const chatDataSelector = (buddyId) => (state) =>
  get(state, `${CHAT}.chat.${buddyId}`, []);
