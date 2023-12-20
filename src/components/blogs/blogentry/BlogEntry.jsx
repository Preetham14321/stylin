import React from 'react'
import Navheader from '../../Navheader'
import BlogCard from '../../../ui/BlogCard'

const BlogEntry = () => {

    const recBlog= [1,2,3]
  return (
    <div className=''>
        <Navheader custClass='bg-white text-[#020202]'/>
        <div className="px-20 py-24">
            <h1 className="text-[#020202] text-3xl font-semibold  font-lexend pb-5">
            Lorem ipsum dolor amet consectetur (Blog title)
            </h1>
            <div className="bg-[#D9D9D9] h-[381px] ">

            </div>
            <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur. Scelerisque ultricies dignissim sit donec nisl. Semper tristique a  <br />quis est ut est nec ac. Commodo morbi enim neque tincidunt.
            </p>

            <p className="py-5">
            Lorem ipsum dolor sit amet consectetur. Ipsum id neque vivamus tempus tortor. Ornare a ut eget consectetur mi iaculis nisi turpis. Pulvinar gravida in morbi ac. Morbi eget sed velit nisi orci arcu. Posuere eu fermentum lorem sed nulla vitae suspendisse. Interdum erat venenatis sed massa quam potenti suspendisse morbi. Facilisi enim morbi est faucibus sit. Odio vel ut lectus nibh nibh. Cras scelerisque eu tempus nam. Vestibulum viverra auctor interdum ligula mauris. Luctus pharetra id purus interdum. Blandit duis molestie sagittis sed. Risus nec scelerisque iaculis arcu nec ipsum non bibendum. Sed parturient lectus fusce faucibus pellentesque bibendum proin. Consequat in vivamus mauris et nulla ut consequat blandit neque. Est pretium pretium arcu felis mauris leo lorem leo. Pretium nibh dolor maecenas amet sit urna. Lacinia lectus in id ut. Nisi vestibulum mus tincidunt neque donec ipsum vestibulum venenatis. Fames vitae faucibus commodo non. Vitae purus ornare id purus feugiat pharetra. Fringilla suspendisse tortor dignissim lectus etiam duis ipsum mi tempus. In pretium mauris blandit rutrum accumsan cursus purus ut. Pharetra pellentesque enim tellus adipiscing felis arcu vel.
            </p>
            <p className="py-5">
            Lorem ipsum dolor sit amet consectetur. Ipsum id neque vivamus tempus tortor. Ornare a ut eget consectetur mi iaculis nisi turpis. Pulvinar gravida in morbi ac. Morbi eget sed velit nisi orci arcu. Posuere eu fermentum lorem sed nulla vitae suspendisse. Interdum erat venenatis sed massa quam potenti suspendisse morbi. Facilisi enim morbi est faucibus sit. Odio vel ut lectus nibh nibh. Cras scelerisque eu tempus nam. Vestibulum viverra auctor interdum ligula mauris. Luctus pharetra id purus interdum. Blandit duis molestie sagittis sed. Risus nec scelerisque iaculis arcu nec ipsum non bibendum. Sed parturient lectus fusce faucibus pellentesque bibendum proin. Consequat in vivamus mauris et nulla ut consequat blandit neque. Est pretium pretium arcu felis mauris leo lorem leo. Pretium nibh dolor maecenas amet sit urna. Lacinia lectus in id ut. Nisi vestibulum mus tincidunt neque donec ipsum vestibulum venenatis. Fames vitae faucibus commodo non. Vitae purus ornare id purus feugiat pharetra. Fringilla suspendisse tortor dignissim lectus etiam duis ipsum mi tempus. In pretium mauris blandit rutrum accumsan cursus purus ut. Pharetra pellentesque enim tellus adipiscing felis arcu vel.
            </p>
            <p className="py-5">
            Lorem ipsum dolor sit amet consectetur. Ipsum id neque vivamus tempus tortor. Ornare a ut eget consectetur mi iaculis nisi turpis. Pulvinar gravida in morbi ac. Morbi eget sed velit nisi orci arcu. Posuere eu fermentum lorem sed nulla vitae suspendisse. Interdum erat venenatis sed massa quam potenti suspendisse morbi. Facilisi enim morbi est faucibus sit. Odio vel ut lectus nibh nibh. Cras scelerisque eu tempus nam. Vestibulum viverra auctor interdum ligula mauris. Luctus pharetra id purus interdum. Blandit duis molestie sagittis sed. Risus nec scelerisque iaculis arcu nec ipsum non bibendum. Sed parturient lectus fusce faucibus pellentesque bibendum proin. Consequat in vivamus mauris et nulla ut consequat blandit neque. Est pretium pretium arcu felis mauris leo lorem leo. Pretium nibh dolor maecenas amet sit urna. Lacinia lectus in id ut. Nisi vestibulum mus tincidunt neque donec ipsum vestibulum venenatis. Fames vitae faucibus commodo non. Vitae purus ornare id purus feugiat pharetra. Fringilla suspendisse tortor dignissim lectus etiam duis ipsum mi tempus. In pretium mauris blandit rutrum accumsan cursus purus ut. Pharetra pellentesque enim tellus adipiscing felis arcu vel.
            </p>

            <div className="py-10">
                <h3 className="text-[#020202] text-3xl font-semibold ">
                Recommended for you
                </h3>
      <div className="grid grid-cols-3 gap-14  pt-7">

                {recBlog.map((_)=>(
          
          <BlogCard/>
          ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default BlogEntry