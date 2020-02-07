import './directory.styles.scss'

import MenuItem from '../MenuItem'
import React from 'react'

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
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'hats'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'hats'
      }
    ]
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ id, ...optionProps }) => (
            <MenuItem key={id} {...optionProps} />
          )
        )}
      </div>
    )
  }
}

export default Directory
