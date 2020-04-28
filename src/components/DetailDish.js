import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import axios from 'axios'
import Loading from './Loading'
import allActions from '../store/actions'


export default function DetailDish() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const [dishDetail, setDish] = useState({})
    const [loading, setStateLoading] = useState(false)
    const [error, setError] = useState(null)
    const [instructions, setInstruction] = useState([])
    
    useEffect(() => {
        setStateLoading(true)
        dispatch(allActions.homePageActions(false))
        axios({
          method: 'get',
          url: 'https://www.themealdb.com/api/json/v1/1/lookup.php',
          params :{
            i : id
          }
        })
          .then(({data}) => {
              if (data.meals) {
                  setDish(data.meals[0])
                  setInstruction(data.meals[0].strInstructions.split('. '))
              } else {
                  setError(`Data with id ${id} not found`)
              }
          })
          .catch(({ response }) => {
            setError(`Data with id ${id} not found`)
          })
          .finally(() => {
            setStateLoading(false)
          })
      }, [id])

    if(loading) return <Loading/>
    if(error) return <p>Error!</p>

    return (
        <div className="container container-fluid detail-board">
            <Row className="d-flex justify-content-left flex-fluid">
                <Image className="image-detail " src={dishDetail.strMealThumb && dishDetail.strMealThumb} fluid/>
            </Row>
            <Row className="d-flex justify-content-left title-detail">
                <h1 className=" title-detail">{dishDetail.strMeal}</h1>
            </Row>
            <Row className=" ">
                <Col className="col-4">
                    <h3>Ingridients</h3>
                    <ol>
                        {dishDetail.strIngredient1 && <li>{dishDetail.strIngredient1 && (dishDetail.strIngredient1)} ({dishDetail.strMeasure1 && (dishDetail.strMeasure1)}) </li>}
                        {dishDetail.strIngredient2 && <li>{dishDetail.strIngredient2 && (dishDetail.strIngredient2)} ({dishDetail.strMeasure2 && (dishDetail.strMeasure2)}) </li>}
                        {dishDetail.strIngredient3 && <li>{dishDetail.strIngredient3 && (dishDetail.strIngredient3)} ({dishDetail.strMeasure3 && (dishDetail.strMeasure3)}) </li>}
                        {dishDetail.strIngredient4 && <li>{dishDetail.strIngredient4 && (dishDetail.strIngredient4)} ({dishDetail.strMeasure4 && (dishDetail.strMeasure4)}) </li>}
                        {dishDetail.strIngredient5 && <li>{dishDetail.strIngredient5 && (dishDetail.strIngredient5)} ({dishDetail.strMeasure5 && (dishDetail.strMeasure5)}) </li>}
                        {dishDetail.strIngredient6 && <li>{dishDetail.strIngredient6 && (dishDetail.strIngredient6)} ({dishDetail.strMeasure6 && (dishDetail.strMeasure6)}) </li>}
                        {dishDetail.strIngredient7 && <li>{dishDetail.strIngredient7 && (dishDetail.strIngredient7)} ({dishDetail.strMeasure7 && (dishDetail.strMeasure7)}) </li>}
                        {dishDetail.strIngredient8 && <li>{dishDetail.strIngredient8 && (dishDetail.strIngredient8)} ({dishDetail.strMeasure8 && (dishDetail.strMeasure8)}) </li>}
                        {dishDetail.strIngredient9 && <li>{dishDetail.strIngredient9 && (dishDetail.strIngredient9)} ({dishDetail.strMeasure9 && (dishDetail.strMeasure9)}) </li>}
                        {dishDetail.strIngredient10 &&<li>{dishDetail.strIngredient10 && (dishDetail.strIngredient10)} ({dishDetail.strMeasure10 && (dishDetail.strMeasure10)}) </li>}
                        {dishDetail.strIngredient11 &&<li>{dishDetail.strIngredient11 && (dishDetail.strIngredient11)} ({dishDetail.strMeasure11 && (dishDetail.strMeasure11)}) </li>}
                        {dishDetail.strIngredient12 &&<li>{dishDetail.strIngredient12 && (dishDetail.strIngredient12)} ({dishDetail.strMeasure12 && (dishDetail.strMeasure12)}) </li>}
                        {dishDetail.strIngredient13 &&<li>{dishDetail.strIngredient13 && (dishDetail.strIngredient13)} ({dishDetail.strMeasure13 && (dishDetail.strMeasure13)}) </li>}
                        {dishDetail.strIngredient14 &&<li>{dishDetail.strIngredient14 && (dishDetail.strIngredient14)} ({dishDetail.strMeasure14 && (dishDetail.strMeasure14)}) </li>}
                        {dishDetail.strIngredient15 &&<li>{dishDetail.strIngredient15 && (dishDetail.strIngredient15)} ({dishDetail.strMeasure15 && (dishDetail.strMeasure15)}) </li>}
                        {dishDetail.strIngredient16 &&<li>{dishDetail.strIngredient16 && (dishDetail.strIngredient16)} ({dishDetail.strMeasure16 && (dishDetail.strMeasure16)}) </li>}
                        {dishDetail.strIngredient17 &&<li>{dishDetail.strIngredient17 && (dishDetail.strIngredient17)} ({dishDetail.strMeasure17 && (dishDetail.strMeasure17)}) </li>}
                        {dishDetail.strIngredient18 &&<li>{dishDetail.strIngredient18 && (dishDetail.strIngredient18)} ({dishDetail.strMeasure18 && (dishDetail.strMeasure18)}) </li>}
                        {dishDetail.strIngredient19 &&<li>{dishDetail.strIngredient19 && (dishDetail.strIngredient19)} ({dishDetail.strMeasure19 && (dishDetail.strMeasure19)}) </li>}
                        {dishDetail.strIngredient20 &&<li>{dishDetail.strIngredient20 && (dishDetail.strIngredient20)} ({dishDetail.strMeasure20 && (dishDetail.strMeasure20)}) </li>}
                    </ol>
                </Col>
                <Col className="col-8">
                    <h3>Instructions</h3>
                    <ol>
                        {instructions.map(instruction => <li>{instruction} </li>)}
                    </ol>
                </Col>
            </Row>
            {dishDetail.strYoutube && (
            <Row className="m-3" >
                <h3>Watch this for more tutorial!</h3>
                <ReactPlayer url={dishDetail.strYoutube} controls width='80%'/>
            </Row>  
            )}
        </div>
    )
}