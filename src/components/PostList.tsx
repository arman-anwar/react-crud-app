import React, { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import usePostsStore from "../store/PostsStore";

export interface Post {
  id: number;
  title: string;
  content: string;
}

const dummyposts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
  {
    id: 4,
    title: "Fourth Post",
    content: "This is the content of the fourth post.",
  },
];

function PostList() {
  const setPosts = usePostsStore((state) => state.setPosts);
  const posts = usePostsStore((state) => state.posts);

  //   console.log("Posts Store Posts: ", posts);
  useEffect(() => {
    console.log("Reset  ");
    setPosts(dummyposts);
  }, []);

  const updatePost = (val: Post) => {
    let index = posts.findIndex((post) => post.id === val.id);

    let _posts = [...posts];
    _posts.splice(index, 1, val);
    setPosts(_posts);
  };

  const deletePost = (postId: number) => {
    let _posts = posts.filter((post) => post.id !== postId);
    setPosts(_posts);
  };

  return (
    <div>
      <table className="table table-striped-columns">
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <PostComponent
                post={post}
                onEditContent={updatePost}
                onDeletePost={deletePost}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
