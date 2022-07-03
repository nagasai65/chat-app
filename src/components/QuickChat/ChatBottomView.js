import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import {
  SEND_BUTTON_COLOR,
  TEXT_BOX_BORDER,
  TRANSPARENT,
  WHITE,
} from "../../constants/colors";
import sendIcon from "../../assets/images/sendIcon.png";
import attachmentIcon from "../../assets/images/attachment.png";
import { sendMessageAction } from "../../redux_store/actions/chatActions";
import moment from "moment";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  bottomView: {
    display: "flex",
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  leftIcon: {
    width: 30,
    height: 20,
  },
  textBox: {
    backgroundColor: WHITE,
    borderRadius: 5,
    borderColor: TEXT_BOX_BORDER,
    padding: 10,
    borderWidth: 1,
    fontSize: 22,
    flex: 0.8,
    alignSelf: "center",
  },
  sendButton: {
    backgroundColor: SEND_BUTTON_COLOR,
    padding: 10,
    borderColor: TRANSPARENT,
    borderRadius: 10,
    color: WHITE,
    fontSize: 25,
    alignSelf: "flex-end",
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
});

export const ChatBottomView = ({ buddyId, userId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [text, setText] = useState();

  const sendMessage = () => {
    setText((prevText) => {
      dispatch(
        sendMessageAction({
          buddyId,
          message: { uid: userId, text: prevText, time: moment.now() },
        })
      );

      return "";
    });
  };

  const handleInput = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      sendMessage();
      return;
    }

    setText(e.target.value);
  };

  return (
    <div className={styles.bottomView}>
      <img className={styles.leftIcon} alt="" src={attachmentIcon} />
      <input
        value={text}
        className={styles.textBox}
        placeholder="Enter your message here"
        onChange={handleInput}
      />

      <button className={styles.sendButton} onClick={sendMessage}>
        Send <img alt="" className={styles.sendIcon} src={sendIcon} />
      </button>
    </div>
  );
};
