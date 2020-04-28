import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import allActions from '../store/actions'

export default function CardDish(props){
    const dispatch = useDispatch()
    let detailDish = useHistory()

    const openRecipe = (id) => {
        dispatch(allActions.homePageActions(false))
        detailDish.push("/recipe/" + id)
    }

    const addToFavorite = ((event) => {
        dispatch(allActions.addFavorite(event))
    })

    return(
        <div className="d-flex flex-fluid justify-content-center flex-wrap m-3">
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img className="card-image" variant="top" src={props.dish.strMealThumb} />
                <Card.Img onClick={() => addToFavorite(props.dish.idMeal)} className="favorite-icon" variant="top" src="https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-PNG-715x715.png" />
                <Card.Body>
                    <Card.Title className="card-title">{props.dish.strMeal}</Card.Title>
                    <Button className="button-recipe" onClick={() => openRecipe(props.dish.idMeal)}>See recipe</Button>
                </Card.Body>
            </Card>
        </div>   
    )       
}