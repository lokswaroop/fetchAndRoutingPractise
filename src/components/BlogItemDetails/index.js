// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imgUrl: data.img_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
