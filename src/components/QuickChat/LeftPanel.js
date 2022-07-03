import headerImage from "../../assets/images/headerIcon.png";
import { useSelector } from "react-redux";
import { userProfileSelector } from "../../redux_store/selectors/userSelector";
import Switch from "react-switch";
import { makeStyles } from "@mui/styles";
import {
  activeConversationsSelector,
  archivedConversationsSelector,
} from "../../redux_store/selectors/buddySelector";
import { ConversationsList } from "./ConversationList";
import { REGULAR } from "../../constants/fonts";

const useStyles = makeStyles({
  container: {},
  headerText: {
    fontFamily: REGULAR,
    fontWeight: 400,
    fontSize: 30,
  },

  userContainer: {
    backgroundColor: "#F6F8FC",
    padding: 50,
    borderRadius: 10,
    borderColor: "#E4EBF4",
    margin: 10,
  },
  userProfilePic: {
    height: 200,
    width: 200,
    resize: "both",
    borderRadius: 100,
  },
});

const HeaderRow = () => {
  const styles = useStyles();

  return (
    <table>
      <tr>
        <td>
          <img alt="QuickChat" src={headerImage} />
        </td>
        <td>
          <span className={styles.headerText}>QuickChat</span>
        </td>
      </tr>
    </table>
  );
};

const UserCard = () => {
  const styles = useStyles();
  const user = useSelector(userProfileSelector);

  const onChangeActiveStatus = () => {};

  return (
    <div className={styles.userContainer}>
      <img
        style={{ resize: "inline" }}
        src={user.imageURL}
        alt={user.name}
        className={styles.userProfilePic}
      />
      <br />
      <b>{user.name}</b>
      <br />
      <span>{user.role}</span>
      <br />
      <Switch checked={user.isActive} onChange={onChangeActiveStatus} />
    </div>
  );
};

const Conversations = () => {
  const activeConversations = useSelector(activeConversationsSelector);
  const archivedConversations = useSelector(archivedConversationsSelector);

  return (
    <>
      <ConversationsList
        list={activeConversations}
        title="Active Conversations"
      />
      <ConversationsList
        list={archivedConversations}
        title="Archived Conversations"
        willExpand={false}
      />
    </>
  );
};

export const LeftPanel = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <HeaderRow />
      <UserCard />
      <Conversations />
    </div>
  );
};
