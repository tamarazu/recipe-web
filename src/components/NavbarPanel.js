import React, { useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { fakeAxios, setDataMakanan, setCategoryName, setSearchWord, setSearch, fetchDishes, fetchCategories } from '../store/actions/RecipeActions'

export default function NavbarPanel() {
    const dispatch = useDispatch()
    const homePage = useSelector(state => state.homePageReducers.status)
    const searchFromCategory = useSelector(state => state.homePageReducers.category)
    const searchFromInput = useSelector(state => state.homePageReducers.search)
    const categories = useSelector(state => state.homePageReducers.categories)

    const changeSearchFromCategory = (event) => dispatch(setCategoryName(event.target.value))
    const changeSearchFromInput = (event) => dispatch(setSearchWord(event.target.value))

    const searchDishFromSelector = (event) => {
        event.preventDefault()
        dispatch(fetchDishes({url : 'https://www.themealdb.com/api/json/v1/1/filter.php?c=', params: searchFromCategory}))
      }
    
      const searchDishFromInput = (event) => {
        event.preventDefault()
        dispatch(fetchDishes({ url : 'https://themealdb.com/api/json/v1/1/search.php?s=', params: searchFromInput}))
      }  

    return(
        <Navbar className="d-flex justify-content-between m-1">
            <Navbar className="title" >ChopChop!</Navbar>
            {homePage && 
                <div className="row">
                <form className="form-inline m-3" onSubmit={(event) => 
                    searchDishFromInput(event)}>
                    <input class="form-control m-2" type="text" placeholder="Find a recipe" onChange={(event) => 
                        changeSearchFromInput(event)}/>
                    <button type="submit" className="btn my-1 button-find">Find!</button>
                </form>
                
                <form className="form-inline m-3" onSubmit={(event) => 
                    searchDishFromSelector(event)}>
                    <select className="my-1 mr-sm-2"  onChange={(event) => 
                        changeSearchFromCategory(event)} style={{width : '392px', height: '55px', fontsize: '20px'}}>
                        <option defaultValue>Choose By Category</option>
                        {
                            categories && 
                            categories.map((category) => 
                            <option 
                            key={category.idCategory} 
                            value={category.strCategory}
                            >
                            {category.strCategory}
                            </option>
                        )}
                    </select>
                    <button type="submit" className="btn my-1 button-find">Find!</button>
                </form>
                </div>
                }
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item  >
                    <Link className="option" to="/" >Home</Link>
                </Nav.Item>
                <Nav.Item >
                    <Link className="option" to="/favorite">Favorite</Link>
                </Nav.Item>
            </Nav>  
        </Navbar>
    )
}