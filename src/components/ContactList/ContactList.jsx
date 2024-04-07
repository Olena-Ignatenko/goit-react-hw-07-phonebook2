import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectNameFilter,
  selectFilteredContacts,
} from "../../redux/selectors";

const ContactList = () => {
  // const contactsData = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => {
        if (contact.name.toLowerCase().includes(search.toLowerCase().trim())) {
          return <Contact key={contact.id} contact={contact} />;
        }
        return null;
      })}
    </ul>
  );
};

export default ContactList;
