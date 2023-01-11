import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
// import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css"
import "./styles.css"

const NewBlogPost = (props) => {
  const [blogPost, setBlogPost] = useState({
    category: "",
    title: "",
    text: "",
    author: {
      name: ""
    }
  })

  const handleChange = (value, fieldToSet) => {
    setBlogPost({
      ...blogPost,
      [fieldToSet]: value
    })
  }

  const changeNameHandler = (value, fieldToSet) => {
    console.log(value)
    setBlogPost({
      ...blogPost,
      author: { [fieldToSet]: value }
    })
  }

  const onSumbitHandler = async (e) => {
    console.log(blogPost)
    e.preventDefault()
    console.log("submitted")

    try {
      const url = process.env.REACT_APP_BE_URL

      let response = await fetch(`${url}/blogs/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blogPost)
      })

      if (response.ok) {
        console.log("article added")
        setBlogPost({
          category: "",
          title: "",
          text: "",
          author: {
            name: ""
          }
        })
      } else {
        console.log("error adding new article")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={onSumbitHandler}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            type="text"
            value={blogPost.title}
            onChange={(e) => handleChange(e.target.value, "title")}
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Author Name"
            type="text"
            value={blogPost.author.name}
            onChange={(e) => changeNameHandler(e.target.value, "name")}
          />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            value={blogPost.category}
            onChange={(e) => handleChange(e.target.value, "category")}
          >
            <option>tech</option>
            <option>inspirational</option>
            <option>self-help</option>
            <option>lifestyle</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>

          {/* <ReactQuill
          type="text"
          value={blogPost.text}
          onChange={(e) => handleChange(e.target.value, "text")}
          className="new-blog-content"
          /> */}
          <Form.Control
            type="text"
            value={blogPost.text}
            onChange={(e) => handleChange(e.target.value, "text")}
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em"
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default NewBlogPost
