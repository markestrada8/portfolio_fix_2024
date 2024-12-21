import React, { Component } from "react"
import ReactModal from "react-modal"
import BlogForm from "../blog/blog-form"

ReactModal.setAppElement(".app-wrapper")

export default class BlogModal extends Component {
  constructor(props) {
    super(props)

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        minHeight: "200px",
        transform: "translate(-50%, -50%)",
        width: "800px",
      },
      overlay: {
        background: "rgba(1, 1, 1, 0.75)",
      },
    }
    this.handleSuccessfulFormSubmission =
      this.handleSuccessfulFormSubmission.bind(this)
  }

  handleSuccessfulFormSubmission(blog) {
    this.props.handleSuccessfulBlogSubmission(blog)
  }

  render() {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose()
        }}
        isOpen={this.props.modalIsOpen}
      >
        <BlogForm
          handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        />
      </ReactModal>
    )
  }
}
