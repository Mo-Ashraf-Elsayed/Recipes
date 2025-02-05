# Recipe - Display Meals Through Categories

## Overview

Recipe is an Angular project that allows users to explore meals based on categories. The categories are dynamically fetched from TheMealDB API and displayed in the navbar. Users can navigate through different categories to see meals related to their selection. The project also includes a persistent sidebar for easy navigation.

## Features

- **Dynamic Navbar**: Categories are fetched from TheMealDB API and displayed as links.
- **Sidebar Navigation**: The sidebar is always visible (as part of the `AppComponent`) and there is on it a **Meals** link to navigate back to categories Navbar.
- **Meal Display**: Clicking on a category in the navbar loads meals related to that category.
- **Routing & Not Found Page**: If a user enters an incorrect URL, a "Not Found" component is displayed.
- **API Integration**: Uses TheMealDB API to fetch both meal categories and meals within a selected category.
- **Tailwind CSS & Flowbite**: The project is styled using Tailwind CSS and Flowbite to ensure a modern and responsive UI.
- **Footer**: Includes the app's logo and a link to the developer's LinkedIn profile and it is always visible (as part of the `AppComponent`).

## How It Works

1. **Sidebar Navigation**:

   - The sidebar contains a "Meals" link that allows users to navigate back to the categories.
   - The sidebar is part of `AppComponent`, meaning it remains visible on all pages.

2. **Navbar Categories**:
   - The categories are dynamically retrieved from TheMealDB API.
   - Clicking on a category link updates the displayed meals accordingly.
3. **Meal Display**:

   - When a category is selected, a request is sent to TheMealDB API with the category as a query parameter.
   - The response contains meals belonging to that category, which are then displayed.

4. **Handling Invalid URLs**:
   - If a user enters a wrong URL, a "Not Found" component is displayed.
   - The "Meals" link in the sidebar allows the user to return to the available categories.

## API Usage

All API requests are made using TheMealDB:

- **Fetch Categories:** `https://www.themealdb.com/api/json/v1/1/categories.php`
- **Fetch Meals by Category:** `https://www.themealdb.com/api/json/v1/1/filter.php?c={CATEGORY_NAME}`

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Mo-Ashraf-Elsayed/Recipes.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Technologies Used

- Angular 19
- TypeScript
- Tailwind CSS
- Flowbite
- HTML/SCSS
- TheMealDB API

## Future Enhancements

- Add search functionality to find meals by name.
- Improve UI design with better styling.
- Implement a favorites feature to save favorite meals.
- Display meal details on click on it

This project is open-source and free to use under the MIT License.

---

Feel free to modify this file as your project evolves!

### [Live Demo](https://recipes-iota-dun.vercel.app/)

### [LinkedIn](https://www.linkedin.com/in/mohammed-ashraf0/)
