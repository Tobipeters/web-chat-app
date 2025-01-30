import React from "react";
import { ChatFooter, ChatHeader, Avatar } from "..";
import { IMessage, IUser } from "../../types";
import { useAppSelector } from "../../store/hook";

interface IChatProps {
  user: IUser;
  handleRemoveUser: (arg: string) => void;
}

export const ChatBox: React.FC<IChatProps> = ({ user, handleRemoveUser }) => {
  const PAGE_SIZE = 25;
  const messageEndRef = React.useRef<HTMLDivElement>(null);
  const { messages: storedMessages } = useAppSelector((state) => state);
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [visibleMessages, setVisibleMessages] = React.useState<IMessage[]>([]);
  const [loadedCount, setLoadedCount] = React.useState(PAGE_SIZE);

  React.useEffect(() => {
    if (messages.length > 0) {
      scrollToChatEnd();
    }
  }, [messages]);

  React.useEffect(() => {
    if (storedMessages && storedMessages.length > 0) {
      setMessages(storedMessages);
      setVisibleMessages(storedMessages.slice(-PAGE_SIZE));
    }
  }, [storedMessages]);

  const scrollToChatEnd = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLoadMore = () => {
    const newCount = loadedCount + PAGE_SIZE;

    const startIndex = Math.max(messages.length - newCount, 0);
    setVisibleMessages(messages.slice(startIndex));
    setLoadedCount(newCount);
  };

  return (
    <section className="bg-white flex flex-col w-full relative overflow-hidden lg:max-w-[500px] lg:shadow-xl">
      <ChatHeader user={user} handleRemoveUser={handleRemoveUser} />

      {/* Text section */}
      <section className="no-scrollbar overflow-y-auto relative bottom-0 flex flex-col px-4 py-2 w-full h-[calc(100vh-148px)] lg:pb-[74px] lg:pt-[74px] lg:h-[calc(95vh-148px)]">
        {loadedCount < messages.length && (
          <button
            onClick={handleLoadMore}
            className="!mx-auto !text-xs !normal-case !mb-2 !w-1/2 !bg-[#322a51] lg:w-[200px]"
          >
            Load more
          </button>
        )}

        {/* Receipent and sender text */}
        {visibleMessages.map((message, id) => (
          <div
            key={id}
            ref={id === visibleMessages.length - 1 ? messageEndRef : () => {}}
            className={`inline-flex items-end gap-1 max-w-10/12 mb-3 ${
              message.userId === user.id ? "ml-auto" : ""
            }`}
          >
            {message.userId !== user.id && (
              <Avatar
                bgNumber={message.bgNumber}
                name={message.userName}
                width="30"
                height="30"
              />
            )}

            <div
              className={`${
                message.userId === user.id
                  ? "bg-[#0f8cfb] rounded-tr-md rounded-l-md text-white"
                  : "bg-[#cccccc] rounded-tl-md rounded-r-md text-black"
              }  w-full text-sm p-3`}
            >
              {message.message}
            </div>
          </div>
        ))}

        <div></div>
      </section>

      <ChatFooter user={user} />
    </section>
  );
};
