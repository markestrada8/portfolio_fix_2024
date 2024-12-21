import React, { Component } from "react"
import { Link } from "react-router-dom"
import BlogItem from "../blog/blog-item"
import BlogModal from "../modals/blog-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false,
    }

    this.getBlogItems = this.getBlogItems.bind(this)
    this.onScroll = this.onScroll.bind(this)
    window.addEventListener("scroll", this.onScroll, false)
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleSuccessfulBlogSubmission =
      this.handleSuccessfulBlogSubmission.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick(blog) {
    axios
      .delete(
        `https:///api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log("handleDeleteClick blog response: ", response)
        this.setState({
          blogItems: this.state.blogItems.filter((blogItem) => {
            return blogItem.id !== blog.id
          }),
        })
      })
      .catch((error) => {
        console.log("delete blog error: ", error)
      })
    return response.data
  }

  handleSuccessfulBlogSubmission(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems),
    })
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true,
    })
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false,
    })
  }

  onScroll() {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return
    }

    // console.log(document.documentElement.offsetHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(window.innerHeight);
    // console.log(window.innerHeight + document.documentElement.scrollTop + 1);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 ===
      document.documentElement.offsetHeight
      // window.innerHeight + window.pageYOffset >=
      // document.body.offsetHeight
    ) {
      // alert("scroll");
      this.getBlogItems()
    }
  }

  // testScroll() {
  //   window.onscroll = function (ev) {
  //     if (
  //       window.innerHeight + window.pageYOffset >=
  //       document.body.offsetHeight
  //     ) {
  //       alert("you're at the bottom of the page");
  //     }
  //   };
  // }

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1,
      // isLoading: false,
    })

    axios
      .get(
        `https://markestrada.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log("getting", response.data)
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log("getBlogItems error", error)
      })
  }

  componentDidMount() {
    this.getBlogItems()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    const blogRecords = this.state.blogItems.map((blogItem) => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return (
          <div key={blogItem.id} className="admin-blog-wrapper">
            <BlogItem blogItem={blogItem} />
            <a onClick={() => this.handleDeleteClick(blogItem)}>
              <FontAwesomeIcon icon={"circle-minus"} />
            </a>
          </div>
        )
      } else {
        return <BlogItem key={blogItem.id} blogItem={blogItem} />
      }
    })

    return (
      <div className="blog-container">
        <BlogModal
          modalIsOpen={this.state.blogModalIsOpen}
          handleModalClose={this.handleModalClose}
          handleSuccessfulBlogSubmission={this.handleSuccessfulBlogSubmission}
        />
        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <div className="new-blog-link">
            <a onClick={this.handleNewBlogClick}>
              <FontAwesomeIcon icon={"plus-circle"} />
            </a>
          </div>
        ) : null}

        <div className="content-container">{blogRecords}</div>

        {this.state.isLoading && (
          <div className="content-loader">
            <FontAwesomeIcon icon={"spinner"} spin />
          </div>
        )}
      </div>
    )
  }
}

export default Blog

