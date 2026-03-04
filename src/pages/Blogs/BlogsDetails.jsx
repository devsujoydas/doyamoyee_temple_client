import React from 'react'
import BlogDetailsLeft from './BlogDetailsLeft'
import SharedPageHeading from '../../shared/SharedPageHeading'

const BlogsDetails = () => {
    return (
        <div>
            <SharedPageHeading
                title="Blog Details"
                path="Blog"
                path2="Blog Details"
            />

            <div className="max-w-7xl xl:mx-auto mx-3 md:mx-0 py-10 md:py-20">

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5'>
                    <div className='col-span-2 border rounded-md border-gray-500 p-6 bg-[#ffffffd7]'>
                        <BlogDetailsLeft />
                    </div>

                    <div className='border rounded-md border-gray-500 p-6 bg-[#FFFFFF]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsDetails