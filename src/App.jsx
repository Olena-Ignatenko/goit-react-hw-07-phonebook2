import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoading, selectError } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default App;
