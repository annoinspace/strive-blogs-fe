import React, { useEffect, useState } from "react"
import { Container, Image } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor"
import BlogLike from "../../components/likes/BlogLike"

import "./styles.css"
const Blog = ({ cover, title, authorname }) => {
  // console.log({ newblog })
  // const [article, setArticle] = useState({})
  // const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate()
  const { id } = params

  // useEffect(() => {
  //   // const blog = posts.find((post) => post._id.toString() === id)
  //   console.log("params", params)

  //   // if (blog) {
  //   //   setBlog(blog)
  //   // setArticle({ newblog })
  //   setLoading(false)
  //   navigate(`/blog/${id}`)
  //   // } else {
  //   //   navigate("/404")
  //   // }
  // }, [])

  // if (loading) {
  //   return <div>loading</div>
  // } else {
  return (
    <>
      <div>testing</div>

      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={cover} fluid />
          <h1 className="blog-details-title">{title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              {/* <BlogAuthor author={authorname} /> */}
            </div>
            <div className="blog-details-info">
              {/* <div>{newblog.createdAt}</div> */}
              {/* <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div> */}
              <div
                style={{
                  marginTop: 20
                }}
              >
                <BlogLike defaultLikes={["123"]} onChange={console.log} />
              </div>
            </div>
          </div>

          {/* <div
                dangerouslySetInnerHTML={{
                  __html: newblog.content
                }}
              ></div> */}
        </Container>
      </div>
    </>
  )
}
// }

export default Blog
