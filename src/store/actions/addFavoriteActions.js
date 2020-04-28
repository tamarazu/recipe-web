const addFavoriteActions = (idMeal) => {
    return {
        type: "ADD_FAVORITE",
        value: idMeal
    }
}

export default addFavoriteActions