function handleRestaurantClick() {
	const restaurants = ["Chik Chak", "Casa Mía", "Summer Restaurant", "Bin Bin", "Mesón Sur"];
  const chosenRestaurant = Math.floor(Math.random() * restaurants.length);

  restaurantMessage = `Let\'s go to ${restaurants[chosenRestaurant]}!`;
  
  const restaurantText = document.querySelector('#restaurant-text');
  restaurantText.textContent = restaurantMessage;

  alert(restaurantMessage);
}

let restaurant = document.querySelector('#restaurant');

restaurant.addEventListener('click', handleRestaurantClick);