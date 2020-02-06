import React from 'react'
import './menu-item.styles.scss'

type IProps = { title: string; img: string; size?: string }

const MenuItem = ({ title, img, size }: IProps) => (
  <div className={`${size} menu-item`}>
    <div
      className="bg-image"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span>shop now</span>
    </div>
  </div>
)

export default MenuItem
