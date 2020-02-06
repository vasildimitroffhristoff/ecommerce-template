import React from 'react'
import MenuItem from '../menu-item'
import './directory.styles.scss'

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl:
          'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl:
          'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        id: 2
      },
      {
        title: 'sneakers',
        imageUrl:
          'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        id: 3
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
      }
    ]
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ title, imageUrl, id, size }) => (
            <MenuItem
              key={id}
              title={title}
              img={imageUrl}
              size={size}
            />
          )
        )}
      </div>
    )
  }
}

export default Directory
