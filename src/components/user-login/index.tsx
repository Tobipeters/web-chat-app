import { Button, TextField } from "@mui/material";
import React from "react";

interface ILoginProps {
  handleLogin: (arg: string) => void;
}

export const UserLogin: React.FC<ILoginProps> = ({ handleLogin }) => {
  const [name, setName] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border shadow-lg w-11/12 lg:max-w-[450px]"
    >
      <h3 className="text-xl text-black font-semibold mb-4 lg:text-2xl">
        Login to Chat
      </h3>
      <TextField
        fullWidth
        placeholder="Enter your username"
        name="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        sx={{
          "& input":{
            padding: '0.75rem 1rem'
          }
        }}
      />

      <Button type="submit" className="!bg-[#0f8cfb] !h-[40px] !outline-none !text-white !normal-case">
        Join chat
      </Button>
    </form>
  );
};
