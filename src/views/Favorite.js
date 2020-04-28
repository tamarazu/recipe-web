import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CardFavorite from '../components/CardFavorite'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import allActions from '../store/actions/index'


export default function Favorite() {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.addFavoriteReducers)
    
    useEffect(() => {
        dispatch(allActions.homePageActions(false))
    }, [])

    return (
        <div>
            <h1 className="favorite-title"> Your Favorite</h1>
            <Row className="row justify-content-center board-list m-3 p-3">
                {favorites.map((favorite) => <CardFavorite key={favorite.id} favorite={favorite}/>)}
            </Row>
        </div>
    )
}
