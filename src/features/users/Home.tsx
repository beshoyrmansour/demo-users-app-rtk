import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosGetPostsResponse, Post } from '../../app/models/users/post';
import PostCard from './components/PostCard'
import { fetchPosts } from './usersAPI'
import { setIsLoading, setPostsList, usersState } from './usersSlice'

interface Props {

}

const Home = (props: Props) => {
    const posts = useSelector(({ users }: { users: usersState }) => users.posts);
    const isLoading = useSelector(({ users }: { users: usersState }) => users.isLoading);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const dispatch = useDispatch();

    const handleFetchPosts = ({ page, limit }: { page: number, limit: number }) => {
        fetchPosts({ page, limit }).then((res: AxiosGetPostsResponse) => {
            console.log({ res__data: res.data.data });
            setLimit(res.data.limit)
            dispatch(setPostsList([...posts, ...res.data.data]))

        })
    };
    const handleLoadMore = () => {
        dispatch(setIsLoading(true))
        handleFetchPosts({ page: page + 1, limit })
        setPage(page + 1)
    }
    useEffect(() => {
        dispatch(setIsLoading(true))
        handleFetchPosts({ page: 0, limit: 10 });

        // dispatch(fetchPostsThunk({ page: 0, limit: 10 }));
        // fetchPostsList(page, total, limit).then((response:x` AxiosResponse<GetUsersResponse>) => {
        //     const { data: { data: usersData, limit, page, total } } = response;
        //     setPage(page);
        //     setTotal(total);
        //     setLimit(limit);
        //     dispatch(setUsersList(usersData))
        // })
    }, [])
    return (<Row xs={1} md={4} lg={3} className="g-4">
        {isLoading ? <>{Array.from({ length: 4 }).map((_, id) => <Col key={id}>
            <h1>Loading...</h1>
        </Col>)}</> : <>
            {posts.map((post: Post) => <Col>
                <PostCard post={post} key={post.id} />
            </Col>)}
        </>}
        <Col lg={12}><Button onClick={handleLoadMore}>Load More</Button></Col>
    </Row>)
}

export default Home
