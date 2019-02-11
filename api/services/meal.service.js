import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
    fetchAllMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id;
            newMeal.name = meal.name;
            newMeal.size = meal.size;
            newMeal.price = meal.price;
            return newMeal;
        });
        return validMeals;
    },
    addMeal(meal) {
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;
        dummyData.meals.push(meal);
        return meal;
    },
    getAMeal(id) {
        const meal = dummyData.meals.find(meal => meal.id == id);
        return meal || {};
    }
};

export default MealService;