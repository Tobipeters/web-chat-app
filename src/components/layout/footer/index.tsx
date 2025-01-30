import { Send } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { IMessage, IUser } from "../../../types";
import { v4 as uuid } from "uuid";
import { addMessage } from "../../../store/message-slice";

export const ChatFooter = ({ user }: { user: IUser }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState<string>("");

  const handlePostMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() !== "") {
      const date = new Date();

      const newMessage: IMessage = {
        message,
        id: uuid(),
        userId: user.id,
        userName: user.name,
        time: `${date.getHours()}:${date.getMinutes()}`,
        bgNumber: user.bgNumber
      };

      dispatch(addMessage(newMessage));
    }
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => handlePostMessage(e)}
      className="fixed bottom-0 bg-white mt-[74px] h-[74px] w-full px-4 py-5 flex items-center border border-t-[#E6E6E7] lg:absolute"
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Your message..."
        name="message"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        sx={{}}
        InputProps={{ disableUnderline: true }}
      />

      <IconButton type="submit" className="!p-1">
        <Send />
      </IconButton>
    </form>
  );
};
