import { makeStyles } from "@mui/styles";
import { map } from "lodash";
import { useCallback, useState } from "react";
import { SELECTED_BUDDY_BACKGROUND, TRANSPARENT } from "../../constants/colors";
import { REGULAR } from "../../constants/fonts";
import arrowUpImage from "../../assets/images/arrowUp.png";
import arrowDownImage from "../../assets/images/arrowDown.png";
import { useDispatch } from "react-redux";
import { setSelectedBuddyAction } from "../../redux_store/actions/chatActions";

const useStyles = makeStyles({
  container: {
    textAlign: "left",
    padding: 10,
  },
  title: {
    fontFamily: REGULAR,
    fontSize: 20,
    backgroundColor: TRANSPARENT,
    borderColor: TRANSPARENT,
    cursor: "pointer",
  },
  listContainer: {
    overflow: "scroll",
  },
  buddyCard: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    marginTop: 10,
    cursor: "pointer",
    backgroundColor: SELECTED_BUDDY_BACKGROUND,
  },
  buddyPic: {
    width: 50,
    height: 50,
    resize: "both",
    borderRadius: 50,
  },
  buddyName: {
    fontFamily: REGULAR,
    fontSize: 20,
  },
  arrowIcon: {
    width: 22,
    height: 13,
    marginLeft: 10,
  },
});

export const ConversationsList = ({ list, title, willExpand = true }) => {
  const dispatch = useDispatch();

  const styles = useStyles();
  const [expanded, setExpanded] = useState(willExpand);

  const onPressBuddy = useCallback(
    (id) => () => {
      dispatch(setSelectedBuddyAction(id));
    },
    [dispatch]
  );

  const renderBuddy = useCallback(
    ({ profile, id }) => {
      return (
        <div key={id} onClick={onPressBuddy(id)} className={styles.buddyCard}>
          <table>
            <tr>
              <td>
                <img
                  className={styles.buddyPic}
                  src={profile.imageURL}
                  alt="pic"
                />
              </td>
              <td>
                <span className={styles.buddyName}>{profile.name}</span>
              </td>
            </tr>
          </table>
        </div>
      );
    },
    [onPressBuddy, styles]
  );

  return (
    <div className={styles.container}>
      <button
        className={styles.title}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {title}&emsp;
        <img
          className={styles.arrowIcon}
          src={expanded ? arrowUpImage : arrowDownImage}
          alt=""
        />
      </button>
      <div
        style={{ display: expanded ? "block" : "none" }}
        className={styles.listContainer}
      >
        {map(list, renderBuddy)}
      </div>
    </div>
  );
};
