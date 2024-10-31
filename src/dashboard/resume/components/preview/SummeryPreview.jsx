import React from 'react'


function SummeryPreview({resumeInfo}) {
  return (
    <p className='text_xs'>
        {resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview