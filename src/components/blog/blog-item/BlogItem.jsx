import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import BlogAuthor from "../blog-author/BlogAuthor"
import "./styles.css"

const BlogItem = ({ blog }) => {
  // const { title, cover, name, _id } = props
  return (
    <Link
      to={`/blog/${blog._id}`}
      className="blog-link"
      cover={blog.cover}
      title={blog.title}
      authorname={blog.author.name}
    >
      <Card className="blog-card">
        <Card.Img variant="top" src={blog.cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor author={blog.author} />
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default BlogItem
