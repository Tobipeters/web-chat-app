import * as React from "react";
import "./App.css";
import { ChatBox, UserLogin } from "./components";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { addUser, removeUser } from "./store/user-slice";
import { v4 as uuid } from "uuid";
import { IUser } from "./types";
import { randomNumber } from "./utils";

 const App = ()=> {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<IUser | null>(null);

  const handleLogin = (name: string) => {
    if (name.trim() !== "") {
      const loggedInuser = users.find((_user) => _user.name === name);
      let requestedUser: IUser = { name, id: "", bgNumber: 0 };

      if (loggedInuser) {
        requestedUser = {
          ...requestedUser,
          id: loggedInuser.id,
          bgNumber: randomNumber,
        };
      } else {
        requestedUser = {
          ...requestedUser,
          id: uuid(),
          bgNumber: randomNumber,
        };
        dispatch(addUser(requestedUser));
      }
      setUser(requestedUser);
      setIsLoggedIn(true);
    }
  };

  const handleRemoveUser = (name: string) => {
    dispatch(removeUser(name));
    setIsLoggedIn(false);
  };

  return (
    <div className="inline-flex justify-center h-full w-full lg:max-w">
      {isLoggedIn ? (
        <ChatBox user={user as IUser} handleRemoveUser={handleRemoveUser} />
      ) : (
        <UserLogin handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;