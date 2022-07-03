import React from "react";
import { useSelector } from "react-redux";
import { ChatView } from "../components/QuickChat/ChatView";
import { selectedBuddySelector } from "../redux_store/selectors/chatSelector";
import { makeStyles } from "@mui/styles";
import { CHAT_PAGE_BACKGROUND } from "../constants/colors";
import { userProfileSelector } from "../redux_store/selectors/userSelector";
import { ChatBottomView } from "../components/QuickChat/ChatBottomView";

const useStyles = makeStyles({
  container: {
    backgroundColor: CHAT_PAGE_BACKGROUND,
    borderRadius: 10,
    height: "96%",
    width: "99%",
  },
});

export const ChatPage = () => {
  const styles = useStyles();

  const selectedBuddy = useSelector(selectedBuddySelector);
  const user = useSelector(userProfileSelector);

  if (!selectedBuddy) {
    return null;
  }

  return (
    <div className={styles.container}>
      <ChatView />
      <ChatBottomView buddyId={selectedBuddy} userId={user.id} />
    </div>
  );
};
