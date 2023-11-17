import {Contact} from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, handleDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} handleDeleteContact={handleDeleteContact} />
        ))
      )}
    </ul>
  );
};