import React from 'react'
import { useContactsQuery, useContactQuery, useAddContactMutation, useUpdateContactMutation, useDeleteContactMutation } from './services/contactsApi';


const ContactDetail = ({ id }:{id:string}) => {
  const { data } = useContactQuery(id);
  return (
    <pre>{ JSON.stringify(data, undefined, 2)}</pre>
  )
}

export default ContactDetail