import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
function PostCard({ post, isProfile, addLike, removeLike, deleteMe, loggedUser }) {

  const likedIndex = post.likes.findIndex(
    (like) => like.username === loggedUser.username
  );

  const deleteHandler =
    () => { deleteMe(post._id) }


  const likeColor = likedIndex > -1 ? "red" : "grey";

  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id)
      : () => addLike(post._id);
  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${post.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}

      <Image src={`${post?.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.caption}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon
          name={"studiovinari"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
      <Card.Content>
        <Button
          color="black"
          fluid
          size="small"
          type="submit"
          className="btn"
          onClick={deleteHandler}
        >Delete</Button>
        {/* <Icon 
          name={"user secret icon"}
          size="large"
          onclick={deleteHandler}
        />
         Delete */}
        
      </Card.Content>
    </Card>
  );
}

export default PostCard;
