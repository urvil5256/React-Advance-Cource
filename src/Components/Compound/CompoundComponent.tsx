import PostCard from "./PostCard";

export const CompoundComponent = () => {
  return (
    <>
      <PostCard
        post={{
          id: 1,
          title: "Hello, World",
          content: "Example Of Compound Component",
          user: { id: 1, name: "Urvil Patel" },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Buttons />
      </PostCard>
    </>
  );
};
