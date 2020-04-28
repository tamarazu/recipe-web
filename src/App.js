import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './style.css'

import NavbarPanel from './components/NavbarPanel'
import DetailDish from './components/DetailDish'
import ListDish from './components/ListDish'
import Favorite from './views/Favorite'
import Loading from './components/Loading'
import { fetchDishes, fetchCategories, fetchDishData } from './store/actions/RecipeActions'


export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.homePageReducers.loading)
  const error = useSelector(state => state.homePageReducers.error)
  const dishes = useSelector(state => state.homePageReducers.dishes)
  // const home= useHistory()

  useEffect(() => {
    // dispatch(fetchDishData(52772))
    dispatch(fetchCategories())
    dispatch(fetchDishes({ url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=', params: 'American'}))
  }, [])

  // const homeClick = () => {
  //   home.push("/favorite")
  // }
 
   if(loading) return <Loading/>
   if ( error) return <div>
      <h1>{error}</h1>
      <Button className="button-find" href="http://localhost:3000/">Home</Button>
   </div>
   
    return (
        <>
          <Router>
            <div>
              <NavbarPanel/>

              <Switch>
                <Route path="/favorite">
                  <Favorite />
                </Route>
                <Route path="/recipe/:id">
                  <DetailDish /> 
                </Route>
                <Route path="/">
                  <ListDish dishes={dishes} />
                </Route >
              </Switch>
            </div>
          </Router>
        </>
    )
}