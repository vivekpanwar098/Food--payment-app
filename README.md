# React + Vite

# Food Delivery App

A modern, responsive food delivery web application built with React and Tailwind CSS. This project demonstrates a complete e-commerce shopping flow with cart management, search functionality, and payment processing.

## Features

- Browse 18+ food items across multiple categories
- Real-time search functionality
- Category-based filtering (Breakfast, Soups, Pasta, Pizza, Burger, Main Course)
- Shopping cart with add, remove, and quantity management
- Real-time price calculation
- Responsive design for mobile, tablet, and desktop
- Complete checkout flow with payment page
- Toast notifications for user actions

## Technologies Used

### Frontend
- React 18 (Hooks: useState, useContext, createContext)
- Tailwind CSS for styling
- JavaScript ES6+

### State Management
- Context API for global state
- React State for component-level state

### Design Approach
- Mobile-first responsive design
- Component-based architecture
- Conditional rendering for page navigation

## Project Structure

```
src/
├── components/
│   ├── Card (Food item display)
│   ├── CartItem (Cart item component)
│   ├── PaymentMethods (Payment options)
│   └── App (Main component)
├── data/
│   ├── food_items (Array of 18 food items)
│   └── Categories (7 categories)
└── context/
    └── DataContext (Global state management)
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

2. Install dependencies
```bash
npm install
```

3. Install required packages
```bash
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
```

4. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

5. Configure tailwind.config.js
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. Start development server
```bash
npm start
```

The app will open at http://localhost:3000

## Usage

### Browsing Items
- View all available food items on the home page
- Use the search bar to find specific items
- Click on category icons to filter by food type

### Managing Cart
- Click "Add to Dish" to add items to cart
- Click the cart icon to view cart sidebar
- Use plus and minus buttons to adjust quantities
- Click delete icon to remove items
- View total amount at the bottom of cart

### Checkout Process
- Click "Proceed to Payment" from cart
- Review order summary
- Select payment method
- Complete purchase
- View success confirmation

## Key Functions

### Cart Management
```javascript
addItem(item)          // Add item to cart or increase quantity
removeItem(id)         // Remove item from cart
incrementQty(id)       // Increase item quantity
decrementQty(id)       // Decrease item quantity
```

### Filtering
```javascript
filteredItems          // Filter items by search and category
totalAmount            // Calculate total cart value
```

## React Concepts Implemented

- useState Hook for state management
- useContext Hook for accessing global state
- Context API for state sharing across components
- Conditional rendering for multi-page flow
- Event handling (onClick, onChange)
- Array methods (map, filter, reduce, find)
- Props and component composition
- Event propagation control

## Data Structure

### Food Item Object
```javascript
{
  id: 1,
  food_name: "Pancakes",
  food_category: "breakfast",
  food_type: "veg",
  food_image: "image_url",
  price: 499
}
```

### Cart Item Object
```javascript
{
  id: 1,
  name: "Pancakes",
  price: 499,
  image: "image_url",
  qty: 2
}
```

## Responsive Breakpoints

- Mobile: Below 768px
- Tablet: 768px to 1024px
- Desktop: Above 1024px

Grid layout adapts based on screen size:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Large Desktop: 4 columns

## Code Quality

- No external routing library (React Router not used)
- No Redux (Context API for state management)
- No icon libraries (Using native emojis)
- Immutable state updates
- Clean component architecture
- ES6+ JavaScript features

## Challenges Solved

- Managing cart state with duplicate item handling
- Implementing dual filtering (search + category)
- Real-time total calculation using reduce
- Event propagation for modal close behavior
- Responsive design across all devices
- State synchronization across components

## Future Improvements

- User authentication system
- Backend API integration
- Persistent cart using local storage or database
- Real payment gateway integration
- Order history tracking
- User reviews and ratings
- Delivery address management
- Coupon and discount system

## Known Limitations

- Frontend only (no backend)
- Cart data resets on page refresh
- No actual payment processing
- Static food items data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Your Name
- GitHub: github.com/yourusername
- Email: your.email@example.com

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

- Food images from Unsplash
- Tailwind CSS documentation
- React documentation
