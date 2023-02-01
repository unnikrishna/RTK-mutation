import { useAddContactMutation, useUpdateContactMutation, useDeleteContactMutation } from './services/contactsApi';

const AddContact = () => {
  const contact = {
    "id": "3",
    "name": "Maximum",
    "email": "max@yahoo.com"
  };
  const contactUpdate = {
    "id": "3",
    "name": "Maximum New",
    "email": "max@yahoo.com"
  };
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  
  const addHandler = async () => {
    await addContact(contact);
  }
  const updateHandler = async () => {
    await updateContact(contactUpdate);
  }
  const deleteHandler = async () => {
    await deleteContact(contact.id);
  }

  return (
    <>
      <button onClick={addHandler}>Add Contact</button>
      <button onClick={ updateHandler }>Update Contact</button>
      <button onClick={ deleteHandler }>Delete Contact</button>
    </>
    )
}
export default AddContact;
