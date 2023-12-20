import React,{useState} from 'react'
import BlogCard from '../../ui/BlogCard'

const Section2 = () => {
    const [activeBlog, setActiveBlog] = useState(1)

    const blogButton = [
        {
            id:1,
            name:'All Categories'
        },
        {
            id:2,
            name:'Hairstyle'
        },
        {
            id:3,
            name:'Makeup'
        },
        {
            id:4,
            name:'Haircare'
        },
        {
            id:5,
            name:'Skincare'
        },
      ]
      const blogContent = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='lg:py-20'>
        <div className="flex items-center gap-10">

        {blogButton.map((item,key)=>(
            
            <div className={`${activeBlog===key+1?' border border-[#020202] rounded-full ':""}w-max px-5 py-1`} onClick={(()=>[setActiveBlog(key+1)])}>
    <button id={key} className="text-[#020202] lg:text-lg font-lexend">
    {item.name}
    </button>
  </div>
      ))}
      </div>
      <div className="grid grid-cols-3 gap-14 lg:pt-20">

      {blogContent.map((_)=>(
          
          <BlogCard/>
          ))}
    </div>
          </div>
  )
}

export default Section2