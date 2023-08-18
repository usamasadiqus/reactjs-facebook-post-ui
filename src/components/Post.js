import Image from "./Image";
// import Text from "./Text";
import Video from "./Video";

const Post = ({ post }) => {
  const isMediaAvailable = post.type && post.media;

  return (
    <div className="w-1/3 rounded-md border m-4 bg-white shadow-md">
      <div className="flex flex-row items-center px-3 pt-2">
        <div className="w-10">
          <Image src={post.profile} />
        </div>
        <div className="px-2">
          <p>{post.name}</p>
          <p>{post.date}</p>
        </div>
      </div>
      <div className="mt-2 px-2 pb-1">
        <p>{post.text}</p>
      </div>
      {isMediaAvailable && (
        <div className="w-full">
          {post.type === "type/image" ? (
            <Image src={post.media} />
          ) : (
            <Video src={post.media} />
          )}
        </div>
      )}
      <div className="flex justify-center items-center">
        <div className="flex-grow p-2">
          <div className="flex justify-center gap-2 items-center px-2">
            <div className="w-4">
              <Image src={require("./../assets/images/like.png")} />
            </div>
            <div>
              <p className="text-center text-sm">Like</p>
            </div>
          </div>
        </div>
        <div className="flex-grow p-2">
          <div className="flex justify-center gap-2 items-center px-2">
            <div className="w-4">
              <Image src={require("./../assets/images/comment.png")} />
            </div>
            <div>
              <p className="text-center text-sm">Comment</p>
            </div>
          </div>
        </div>
        <div className="flex-grow p-2">
          <div className="flex justify-center gap-2 items-center px-2">
            <div className="w-4">
              <Image src={require("./../assets/images/share.png")} />
            </div>
            <div>
              <p className="text-center text-sm">Share</p>
            </div>
          </div>
        </div>
      </div>
      {/* {post.image && <Image image={post.image} />}
      {post.video && <Video video={post.video} />}
      {!post.image && !post.video && <Text text={post.text} />} */}
    </div>
  );
};

export default Post;
