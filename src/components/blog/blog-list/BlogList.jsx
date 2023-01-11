import React from "react"
import { Col, Row } from "react-bootstrap"

import BlogItem from "../blog-item/BlogItem"
import { useEffect, useState } from "react"

const BlogList = () => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const url = process.env.REACT_APP_BE_URL
    const response = await fetch(`${url}/blogs`)
    const data = await response.json()
    console.log(data)
    setBlogs(data)
  }
  useEffect(() => {
    fetchBlogs()
  }, [blogs.length])

  return (
    <>
      {blogs.length !== 0 ? (
        <Row>
          {blogs.map((blog, i) => (
            <Col
              key={i}
              md={4}
              style={{
                marginBottom: 50
              }}
            >
              <BlogItem
                {...blog}
                blog={blog}
                key={blog._id}
                id={blog._id}
                title={blog.title}
                name={blog.author}
                cover={blog.cover}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div>no blogs available</div>
      )}{" "}
    </>
  )
}

export default BlogList
