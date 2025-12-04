import React from "react";
import type { Post } from "./PostList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  post: Post;
  onEditContent: (post: Post) => void;
  onDeletePost: (postId: number) => void;
};

function PostComponent({ post, onEditContent, onDeletePost }: Props) {
  const [mode, setMode] = React.useState<"view" | "edit">("view");

  const [content, setContent] = React.useState<Post>(post);

  const onClickContent = () => {
    if (mode === "view") {
      setMode("edit");
    }
  };

  return (
    <>
      <td>{post.title}</td>
      <td onClick={onClickContent}>
        {mode === "edit" ? (
          <input
            type="text"
            value={content.content}
            onChange={(e) => {
              //   post.content = e.target.value;
              console.log(e.target.value);
              setContent({ ...content, content: e.target.value });
            }}
          />
        ) : (
          <div> {content.content} </div>
        )}
      </td>
      <td>
        <FontAwesomeIcon
          icon="check"
          onClick={() => {
            setMode("view");
            onEditContent({ ...content });
          }}
        />
        <FontAwesomeIcon
          icon="trash"
          onClick={() => {
            setMode("view");
            onDeletePost(content.id);
          }}
        />
      </td>
    </>
  );
}

export default PostComponent;
