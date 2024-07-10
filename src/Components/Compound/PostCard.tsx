import { createContext, PropsWithChildren, useContext } from "react";

type TPostCardContext = {
  post: Post;
};
const PostCardContext = createContext<TPostCardContext | undefined>(undefined);

const usePostCardContext = () => {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCard");
  }
  return context;
};

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardPorps = PropsWithChildren & {
  post: Post;
};

const PostCard = ({ children, post }: PostCardPorps) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
        {children}
      </div>
    </PostCardContext.Provider>
  );
};

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return (
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-orange-500">
      {post.title}
    </h2>
  );
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return (
    <p className="mb-3 font-normal text-orange-500 dark:text-gray-400">
      {post.content}
    </p>
  );
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <p className="text-sm text-orange-500 m-3">By {post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div>
      <div className="inline-flex items-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <button className="">Read More</button>
      </div>
      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <button className="">Comment</button>
      </div>
    </div>
  );
};

export default PostCard;
