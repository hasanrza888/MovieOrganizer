import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../../state/actions/searchActions';
import './SearchBox.css';

function SearchBox(){

    const [value, setValue] = useState({
        searchLine: ''
    })


    const searchLineChangeHandler = (e) => {
        setValue({ searchLine: e.target.value });
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getData(value.searchLine));
        // console.log(value.searchLine)
    }

    const dispatch = useDispatch()
    
    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={value.searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!value.searchLine}
                    
                >
                    Искать
                </button>
            </form>
            {/* <button onClick={hadle}>get data</button> */}
        </div>
    );
    
}
 
export default SearchBox;