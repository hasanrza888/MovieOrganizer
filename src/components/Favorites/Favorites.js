import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import apidenGelenData from '../../state/actions/apidenGelenDataAction';
import sebetdenSil from '../../state/actions/sebetdenSil';
import './Favorites.css';


function Favorites(){

    const [titlevalue, setTitle] = useState({
        titlee: '',
        class1: 'none',
        class2: 'notactive',
        class3: "favorites__save",
        class4: 'block',
        clicked: false,
    });
    
    const favdata = useSelector(state=>state.favorites)

    const dispatch4 = useDispatch()

    const favInputTitle = (e)=>{
        setTitle({titlee: e.target.value})

    }


    const SubmitHandle=()=>{
        
        setTitle({clicked: true})

        let object1 = {
            "title": titlevalue.titlee,
            "movies": [{

            }]
        }

        const obj = favdata.map((favdata,index) =>{
            object1.movies[index] = {
                "Title": favdata.Title,
                "Year": favdata.Year,
                "imdbID": favdata.imdbID,
                "Type": favdata.Type,
                "Poster": favdata.Poster  
            }

        })


        fetch('https://acb-api.algoritmika.org/api/movies/list',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object1)
        })
        .then(response => response.json())
        .then(data => dispatch4(apidenGelenData(data)))
        .catch(err => console.log(err))
    }

    const Lnk = useSelector(state=>state.api)

    
    const dispatch = useDispatch()
        return (
            
            <div className="favorites">
                <input className="favorites__name" placeholder='Новый список' onChange={favInputTitle} value = {titlevalue.titlee}/>
                <ul className="favorites__list">
                    {favdata ?  favdata.map((item) => {
                        return <li key={item.imdbID} className = "filmadi">{item.Title} ({item.Year}) <button onClick={()=>{dispatch(sebetdenSil(item.imdbID))}}>X</button></li>;
                    }) : null}
                </ul>
                {/* {titlevalue.clicked ? <Link to= {`/list/${Lnk.data.id}`}>Перейти к списку</Link> : favdata.length>0 && titlevalue.titlee ? <button type="button" disabled ={titlevalue.cll} className={titlevalue.titlee && favdata.length>0 ? "favorites__save" : "notactive"} onClick = {SubmitHandle}>Сохранить список</button> : null} */}
                
                {titlevalue.clicked ? <Link to= {`/list/${Lnk.data.id}`}>Перейти к списку</Link> : favdata.length>0 && titlevalue.titlee ? <button type="button" className={titlevalue.titlee && favdata.length>0 ? "favorites__save" : "notactive"} onClick = {SubmitHandle}>Сохранить список</button> : null}

            </div>
        );

}
 
export default Favorites;