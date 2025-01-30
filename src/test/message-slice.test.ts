import { messagesReducer, addMessage } from "../store/message-slice";

describe("Messages Slice", () => {
  it("should return the initial state", () => {
    expect(messagesReducer(undefined, { type: "" })).toEqual([]);
  });

  it("should add message to empty state when addMessage action is invoked", () => {
    const newMessage = {
      id: "testId",
      message: "Some test message",
      userId: "test-user-id",
      userName: "John Doe",
      time: "13:03",
      bgNumber: 1,
    };

    const action = addMessage(newMessage);
    const reducer = messagesReducer([], action);

    expect(reducer).toEqual([newMessage]);
    expect(reducer.length).toBe(1);
  });

  it("should add new message to existing messages list when addMessage action is invoked", () => {
    const mockPreviousState = [
      {
        id: "testId-1",
        message: "Some test message",
        userId: "123",
        userName: "Peter",
        time: "13:03",
        bgNumber: 1,
      },
    ];

    const newUser = {
      id: "testId-2",
      message: "Some new message",
      userId: "567",
      userName: "John Doe",
      time: "13:05",
      bgNumber: 2,
    };

    const action = addMessage(newUser);
    const reducer = messagesReducer(mockPreviousState, action);

    expect(reducer).toEqual([...mockPreviousState, newUser]);
    expect(reducer.length).toBe(2);
  });
});
