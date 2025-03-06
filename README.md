# React Hooks 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A simple yet powerful demonstration of React's useState hook functionality.

## Features

- Interactive examples demonstrating React state management
- Clean and minimal UI
- Easy to understand implementation
- Vite-powered development environment

## Mini Projects

### Login Form

A form that allows users to log in by entering their username and password. It includes validation to ensure that the fields are filled out before submission and logs the user data to the console upon submission.

### Registration Form

A form that allows users to register by entering their name, email, and password. It includes validation to ensure all fields are filled out before submission.

### Challenge

A simple React component that allows users to increment and decrement a counter using two buttons. It includes:
- A reset button to set the count back to zero.
- Maximum and minimum limits for the counter, disabling the increment button when the count exceeds 99 and the decrement button when the count is less than 1.
- An input field to allow users to set the step value by which the counter should increment or decrement.

### Counter

A simple counter that increments and decrements a value, demonstrating basic useState hook usage.

### Users List

Displays a list of users with their details, showing how to manage arrays of objects in state.

### LiftStateUp Input

Demonstrates lifting state up between components by managing input value in parent component.

### Toggle Button

A switch that toggles between on/off states, showing state management with boolean values.

### UseStateObject

Demonstrates how to manage an object in state, providing an example of using useState with complex data structures.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-states-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-states-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Start the development server as shown in the installation steps
2. Open your browser and navigate to `http://localhost:5173`
3. Interact with the various mini-projects
4. Explore the code in `src/components/hooks/useState/` to understand useState implementation

## Project Structure
```
states/
├── src/
│   ├── components/
│   │   ├── hooks/
│   │   │   ├── useState/
│   │   │   │   ├── Challenge.jsx
│   │   │   │   ├── Counter.jsx
│   │   │   │   ├── LiftStateUp.jsx
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegistrationForm.jsx
│   │   │   │   ├── ToggleSwitch.jsx
│   │   │   │   └── UseStateObject.jsx
│   │   │   └── hook-css/
│   │   │       └── toggle-swich.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js

```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
