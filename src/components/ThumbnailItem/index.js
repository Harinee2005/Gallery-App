import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  onChangingThumbnail = () => {
    const {onClickFunction, imageDetails} = this.props
    onClickFunction(imageDetails)
  }

  render() {
    const {imageDetails, isActive} = this.props
    const {thumbnailUrl, thumbnailAltText} = imageDetails
    const classToStyle = isActive ? 'highlight-image' : ''
    return (
      <li>
        <button type="button" onClick={this.onChangingThumbnail}>
          <img
            className={`thumbnail-images ${classToStyle}`}
            src={thumbnailUrl}
            alt={thumbnailAltText}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
