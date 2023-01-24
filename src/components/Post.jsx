import { useNavigate } from "react-router-dom";
import Vote from "./Vote";

const Post = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="post" onClick={() => navigate(`/post/${data.id}`)}>
      <div className="post-sidebar">
        <Vote data={data} />
      </div>
      <div className="post-main">
        <div className="post-header">
          <p>
            <b>r/{data.communityName}</b>
            <span>
              {" "}
              Posted by u/{data.author}{" "}
              {new Date() - new Date(data.createdOn.toMillis())} ago{" "}
            </span>
          </p>
        </div>
        <div className="post-title">
          <h3>{data.title}</h3>
        </div>
        <div className="post-body">{data.content}</div>
      </div>
    </div>
  );
};

export default Post;
