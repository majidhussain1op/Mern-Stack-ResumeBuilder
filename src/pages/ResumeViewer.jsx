import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import UserDataField from './UserDataField'
import AtlanticTemplate from '../templates/AtlanticTemplate'
import ExecutiveTemplates from '../templates/ExecutiveTemplate'

const ResumeViewer = () => {
    const {id} = useParams()
    const [resumeData, setResumeData] = useState(null)

    const renderTemplate = () =>{
      switch (id) {
        case "atlantic":
          return <AtlanticTemplate user={resumeData} />
        case "executive":
          return <ExecutiveTemplates user={resumeData} />

      }
    }
  return (
        <div>
      <div className='flex gap-6'>
      <div className='w-1/2'>
        <UserDataField onChange={(data) => setResumeData(data)} />
      </div>
    </div>
    <div className='w-1/2'>
      {renderTemplate()}
    </div>
    </div>
  )
}

export default ResumeViewer
