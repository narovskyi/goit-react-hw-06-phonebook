import { Input } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/actions";

export default function Filter() {
    const dispatch = useDispatch();
    const stateFilter = useSelector(getFilter);

    const filterValueHandler = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <>
            <Input
                type="text"
                name='filter'
                placeholder="Filter"
                onChange={filterValueHandler}
                value={stateFilter}
            />
        </>
    );
}