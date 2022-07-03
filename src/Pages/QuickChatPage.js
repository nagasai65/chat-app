import { LeftPanel } from "../components/QuickChat/LeftPanel";
import React from "react";
import { makeStyles } from "@mui/styles";
import { BACKGROUND, PAGE_BACKGROUND } from "../constants/colors";
import { ChatPage } from "./ChatPage";

const useStyles = makeStyles({
  outer: {
    backgroundColor: PAGE_BACKGROUND,
    padding: 20,
    flex: 1,
    width: "97%",
    height: "94vh",
  },
  inner: {
    borderRadius: 10,
    backgroundColor: BACKGROUND,
    width: "100%",
    height: "100%",
  },
});

export const QuickChatPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.outer}>
      <table className={styles.inner}>
        <tr>
          <td style={{ width: "40%" }}>
            <LeftPanel />
          </td>
          <td style={{ width: "50%" }}>
            <ChatPage />
          </td>
        </tr>
      </table>
    </div>
  );
};
