import { makeStyles } from "@mui/styles";
import { map } from "lodash";
import { useSelector } from "react-redux";
import {
  BUDDY_MESSAGE_BACKGROUND,
  BUDDY_MESSAGE_TEXT,
  USER_MESSAGE_BACKGROUND,
  USER_MESSAGE_TEXT,
} from "../../constants/colors";
import {
  chatDataSelector,
  selectedBuddySelector,
} from "../../redux_store/selectors/chatSelector";
import { userProfileSelector } from "../../redux_store/selectors/userSelector";

const useStyles = makeStyles({
  container: {
    height: "88%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
  },
  message: {
    display: "flex-box",
    padding: 12,
    borderRadius: 10,
    marginBottom: 5,
    width: "fit-content",
  },
  buddyMessage: {
    backgroundColor: BUDDY_MESSAGE_BACKGROUND,
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: USER_MESSAGE_BACKGROUND,
    alignSelf: "flex-end",
  },
  messageText: {},
  userMessageText: {
    color: USER_MESSAGE_TEXT,
  },
  buddyMessageText: {
    color: BUDDY_MESSAGE_TEXT,
  },
});

const RenderMessage = ({ message, buddy, user }) => {
  const styles = useStyles();

  return (
    <>
      <div
        className={`${
          message.uid === user.id ? styles.userMessage : styles.buddyMessage
        } ${styles.message}`}
      >
        <span
          className={
            message.uid === user.id
              ? styles.userMessageText
              : styles.buddyMessageText
          }
        >
          {message.text}
        </span>
      </div>
    </>
  );
};

export const ChatView = () => {
  const styles = useStyles();
  const selectedBuddy = useSelector(selectedBuddySelector);
  const chatData = useSelector(chatDataSelector(selectedBuddy));
  const user = useSelector(userProfileSelector);

  return (
    <div className={styles.container}>
      {map(chatData, (message) => (
        <RenderMessage key={message.time} message={message} user={user} />
      ))}
    </div>
  );
};
