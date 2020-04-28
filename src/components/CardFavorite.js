import React from 'react'
import useFetcher from '../useFetcher'
import Loading from './Loading'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function CardFavorite(props) {
    const detailDish = useHistory()
    const { favorite } = props
    const idDish = favorite.idMeal

    const {data : dish, loading: isLoading, error: isError } = useFetcher('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idDish)
    const favoriteDish = dish.meals

    const openRecipe = ((event) => {
        console.log(event)
        detailDish.push('/recipe/' + event)
    })

    if (isLoading) return <Loading/>
    if (isError) return <p>Error!</p>

    return (
        <>
            { favoriteDish && (<div className="d-flex flex-fluid justify-content-center flex-wrap m-3">
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img className="card-image" variant="top" src={favoriteDish[0].strMealThumb} />
                    {/* <Card.Img onClick={() => addToFavorite(props.dish.idMeal)} className="favorite-icon" variant="top" src="https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-PNG-715x715.png" /> */}
                    <Card.Body>
                        <Card.Title className="card-title">{favoriteDish[0].strMeal}</Card.Title>
                        <Button className="button-recipe" onClick={() => openRecipe(favoriteDish[0].idMeal)}>See recipe</Button>
                    </Card.Body>
                </Card>
            </div>)}
        </>
    
    )
}