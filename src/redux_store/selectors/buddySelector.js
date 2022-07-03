import { filter, get } from "lodash";

import { BUDDIES } from "../storeConstants";

export const buddySelector = (uid) => (state) =>
  get(state, `${BUDDIES}.${uid}`);

export const activeConversationsSelector = (state) => {
  return filter(get(state, BUDDIES), ({ isArchived }) => !isArchived);
};

export const archivedConversationsSelector = (state) => {
  return filter(get(state, BUDDIES), ({ isArchived }) => isArchived);
};
