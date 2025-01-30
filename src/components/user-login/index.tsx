import { Button, TextField } from "@mui/material";
import React from "react";

interface ILoginProps {
  handleLogin: (arg: string) => void;
}

export const UserLogin: React.FC<ILoginProps> = ({ handleLogin }) => {
  const [name, setName] = React.useState<string>("");

  return (
    <div className="flex flex-col gap-4 p-4 border shadow-lg w-11/12 lg:max-w-[450px]">
      <h3 className="text-xl text-black font-semibold mb-4 lg:text-2xl">Login to Chat</h3>
      <TextField
        fullWidth
        placeholder="Enter your username"
        name="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <Button onClick={() => handleLogin(name)} className="">
        Join chat
      </Button>
    </div>
  );
};
