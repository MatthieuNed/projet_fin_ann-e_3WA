import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };
    return (
        
        <form id='search'
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <div class="block">
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Recherchez le test correspondant
                </span>
            </label>
            <div id ='margin'>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                class='input is-large'
                id="header-search"
                placeholder="Liste de sites sur le WEBRTC"
                name="s"
            />
            </div>
            </div>
        </form>
    );
};

export default SearchBar;
