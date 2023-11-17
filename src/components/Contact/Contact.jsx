import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number,}, handleDeleteContact }) => {
  return (
    <>
      <li key={id} className={css.contact} >
        <p >
          <span className={css.name}>{name}</span>
          <span className={css.number}>{number}</span>
        </p>
        <button
          type="button"
          onClick={() => handleDeleteContact(id)} className={css.button}>
          Delete
        </button>
      </li>
    </>
  )
}