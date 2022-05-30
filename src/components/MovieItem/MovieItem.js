import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sendFavorite from '../../state/actions/favoritesActions';
import './MovieItem.css';

function MovieItem(props){
    const dispatch1 = useDispatch()

    const { Title, Year, Poster } = props;

    const favdata = useSelector(state=>state.favorites)

    const addFavoriteList=()=>{
        dispatch1(sendFavorite(props))
    }

    
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={addFavoriteList}>Добавить в список</button>
            </div>
        </article>
    );

}
 
export default MovieItem;