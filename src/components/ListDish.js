import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import CardDish from './CardDish'
import homePageActions from '../store/actions/RecipeActions'

export default function ListDish(props) { 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(homePageActions(true))
    })
    return (
        <Row className="row justify-content-center board-list m-3 p-3">
            {props.dishes && (props.dishes.map((dish) => <CardDish key={dish.idMeal} dish={dish}/>))}
        </Row>
    )
} 