import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='text-[#020202] space-y-3'>
        <div className="bg-[#D9D9D9] h-[210px]">

        </div>
<h1 className="font-lexend  lg:text-lg font-medium lg:leading[1.5]">
Blog Headline 1: Lorem ipsum dolor sit <br /> amet consectetur.
</h1>
<p className="font-mukta text-sm leading-[1.7]">
Lorem ipsum dolor sit amet consectetur. Adipiscing senectus <br /> aliquet adipiscing est lacus. Turpis blandit elementum sagittis <br /> sed. Lorem velit nibh enim magna euismod. Sagittis integer<br /> diam elementum lacus viverra id. Pharetra odio pretium quam <br /> purus nunc sem. Imperdiet quisque non porttitor nisl.
</p>
<Link to='/blog/Entry' >
<button className="font-bold font-mukta">{`Read Now >`}</button>
</Link>
    </div>
  )
}

export default BlogCard