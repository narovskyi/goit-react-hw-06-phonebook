import { Title, List, Button, ListItem } from "./Contacts.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { getContacts, getFilter } from "../../redux/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const stateContacts = useSelector(getContacts);
    const stateFilter = useSelector(getFilter);
    const normilizedFilter = stateFilter.toLowerCase();
    const visibleContacts = stateContacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <>
            <Title>Contacts</Title>
            <List>
                {visibleContacts.map(({ name, id, number }) => (
                    <ListItem key={id}>
                        <Button onClick={() => {
                            console.log(id);
                            return handleDeleteContact(id);
                        }}>
                            Delete
                        </Button>
                        {name}: <span>{number}</span>
                    </ListItem>
                ))}
            </List>
        </>
    );
}