import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  MoreVert,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Avatar } from "../../avatar";
import { IUser } from "../../../types";
import React from "react";

interface IChatHeaderProps {
  user: IUser;
  handleRemoveUser: (arg: string) => void;
}

export const ChatHeader: React.FC<IChatHeaderProps> = ({
  user,
  handleRemoveUser,
}) => {
  return (
    <nav className="fixed top-0 z-30 w-full h-[74px] bg-white px-4 py-5 inline-flex items-center gap-2 border border-[#E6E6E7] lg:absolute">
      <IconButton
        onClick={() => handleRemoveUser(user.name)}
        className="!border-none !p-1"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <div className="inline-flex items-center gap-2">
        <Avatar
          bgNumber={user.bgNumber}
          name={user.name}
          width="40"
          height="40"
        />
        <h4 className="text-black text-base font-medium mb-0">{user.name}</h4>
      </div>

      <div className="ml-auto inline-flex gap-2 item-center">
        <IconButton className="!p-1">
          <MoreVert />
        </IconButton>
        <IconButton className="!p-1">
          <KeyboardArrowDown />
        </IconButton>
      </div>
    </nav>
  );
};
