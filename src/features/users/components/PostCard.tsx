import React, { useState } from 'react'
import { Button, Card, Col, Row, Stack } from 'react-bootstrap';
import { Post } from '../../../app/models/users/post';
import { User } from '../../../app/models/users/user';
import { getUserName } from '../../../utils/getUserName';

interface Props {
    post: Post
}

const PostCard = (props: Props) => {
    const { post } = props;
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes);


    const handlePostLike = (post: Post) => {
        // console.log({ handlePostLike__post: post });
        setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
        setIsLiked(!isLiked)

    };

    const handleLoadPostComments = (post: Post) => {
        console.log({ handleLoadPostComments__post: post });
    };

    const handlePostPublishDate = () => {
        const date = new Date(post.publishDate)
        let hours = date.getHours();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour "0" should be "12"
        const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var strTime = hours + ":" + minutes + " " + ampm;
        return date.getDate() + " / " + new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date) + " / " + date.getFullYear() + " - " + strTime;
    }

    return (
        <Card className='h-100'>
            <Card.Body>
                <Card.Title>{getUserName(post.owner)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{handlePostPublishDate()}</Card.Subtitle>
            </Card.Body>
            <Card.Img variant="top" src={post.image} height={300} className='post-image' />
            <Card.Body className='justify-content-end d-flex flex-column'>
                <Card.Text>{post.text}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{likesCount} Likes</Card.Subtitle>
                <Stack direction="horizontal" gap={3}>
                    <Button className="px-5" variant={isLiked ? "outline-primary" : "primary"} onClick={() => handlePostLike(post)}>{isLiked ? "Liked" : "Like"}</Button>
                    <Button className="w-100" variant="link" onClick={() => handleLoadPostComments(post)}>Load Comments</Button>
                </Stack>
            </Card.Body>
        </Card>
    );
};

export default PostCard
