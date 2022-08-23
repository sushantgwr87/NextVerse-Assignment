import { useEffect, useState } from 'react'
import { getAllPosts } from '../api/post.js'
import useLocalStorage from '../customHooks/useLocalStorage.js'
import "../styles/post.css";
import useBreakpoints from "../customHooks/useBreakpoints"

const Post = () => {

    const [postData, setPostData] = useLocalStorage("posts", null)

    const [hoverShow, setHoverShow] = useState({ show: false, id: null })

    useEffect(() => {
        const getData = async () => {
            const data = await getAllPosts();
            if (!data.error) {
                setPostData(data.data);
            }
        }
        getData();
    }, [])

    const { isXl } = useBreakpoints()

    return (
        <div id='post_cont' className='posts_container'>
            {postData && postData.map((val, index) =>
                <div id='post_box' className={`post ${!isXl && hoverShow.show && hoverShow.id === index && "post_user___show"}`} key={index} onMouseEnter={() => setHoverShow({ show: true, id: index })} onMouseLeave={() => setHoverShow({ show: false, id: null })}>
                    <div className='post_image'>
                        <img src={val.coverImageUrl} alt="" />
                    </div>
                    {isXl ?
                        <div className='post_content'>
                            <h3>{val.title}</h3>
                            <div className={`post_user`}>
                                <div className='post_user___image'>
                                    <img src={val.user.profilePic} alt="" />
                                </div>
                                <h4>{val.user.fname + " " + val.user.lname}</h4>
                            </div>
                        </div>
                        : (
                            <>
                            <h3>{val.title}</h3>
                                {hoverShow.show && hoverShow.id === index &&
                                    <div className={`post_user ${hoverShow.show && hoverShow.id === index && "post_user___transition"}`}>
                                        <div className='post_user___image'>
                                            <img src={val.user.profilePic} alt="" />
                                        </div>
                                        <h4>{val.user.fname + " " + val.user.lname}</h4>
                                    </div>
                                }
                            </>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default Post