import './directory.styles.scss'

import MenuItem from '../MenuItem'
import React from 'react'
import { Link } from 'react-router-dom'

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl:
          'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        id: 1,
        linkUrl: 'hats'
      },
      {
        title: 'jackets',
        imageUrl:
          'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        id: 2,
        linkUrl: 'hats'
      },
      {
        title: 'sneakers',
        imageUrl:
          'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        id: 3,
        linkUrl: 'hats'
      },
      {
        title: 'women',
        imageUrl:
          'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
        size: 'large',
        id: 4,
        linkUrl: 'hats'
      },
      {
        title: 'men',
        imageUrl:
          'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80',
        size: 'large',
        id: 5,
        linkUrl: 'hats'
      }
    ]
  }

  render() {
    return (
      <div className="directory-wrapper">
        <h2>
          New season <span>SPRING - SUMMER / 2020</span>
        </h2>
        <Link className="button-link" to="/shop">
          Discover the collection
        </Link>
        <div className="directory-menu">
          {this.state.sections.map(
            ({ id, ...optionProps }) => (
              <MenuItem key={id} {...optionProps} />
            )
          )}
        </div>
      </div>
    )
  }
}

export default Directory
