import { usersReducer, addUser, removeUser } from "../store/user-slice";

describe("Users Slice", () => {
  it("should return the initial state", () => {
    expect(usersReducer(undefined, { type: "" })).toEqual([]);
  });

  it("should add user to empty state when addUser action is invoked", () => {
    const newUser = {
      id: "testId",
      name: "John Doe",
      bgNumber: 1,
    };

    const action = addUser(newUser);
    const reducer = usersReducer([], action);

    expect(reducer).toEqual([newUser]);
    expect(reducer.length).toBe(1);
  });

  it("should add new user to existing user list when addUser action is invoked", () => {
    const mockPreviousState = [
      {
        id: "123",
        name: "Peter",
        bgNumber: 1
      },
      {
        id: "567",
        name: "Cleo",
        bgNumber: 2
      },
    ];

    const newUser = {
      id: "testId",
      name: "John Doe",
      bgNumber: 3
    };

    const action = addUser(newUser);
    const reducer = usersReducer(mockPreviousState, action);

    expect(reducer).toEqual([...mockPreviousState, newUser]);
    expect(reducer.length).toBe(3);
  });

  it("should remove user from list when removeUser action is invoked", () => {
    const mockUsersState = [
      {
        id: "123",
        name: "Peter",
        bgNumber: 1
      },
      {
        id: "567",
        name: "Cleo",
        bgNumber: 2
      },
    ];

    const reducer = usersReducer(mockUsersState, removeUser("Peter"));

    expect(reducer).toEqual([mockUsersState[1]]);
    expect(reducer.length).toBe(1);
  });
});
