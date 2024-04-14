
import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div className='px-4 border-t border-gray-300 border-b-0 font-serif py-8'>
        <div className='text-xl'>
           {contact.name}
        </div>
        
        <div className='py-2'>
            <span className='block uppercase text-xs'>email</span>
            <div className='text-base'> {contact.email}</div>
        </div>
        <div className='py-2'>
            <span className='block uppercase text-xs'>phone</span>
            <div className='text-base'> {contact.phone}</div>
        </div>
        <div className='py-2'>
            <span className='block uppercase text-xs'>region</span>
            <div className='text-base'> {contact.region}</div>
        </div>
        
       
        
        
    </div>
  )
}

export default ContactCard