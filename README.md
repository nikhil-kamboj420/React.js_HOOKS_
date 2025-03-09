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

## useRef Hook

The `useRef` hook is used to create mutable object references that persist for the full lifetime of the component. It allows direct access to DOM elements without causing re-renders. 

In this project, `useRef` is utilized in the following ways:
- **Example Component**: Demonstrates how to manage input fields for username and password, logging their values upon form submission.
- **ForwardRef Component**: Shows how to use `useRef` in conjunction with `forwardRef` to pass refs to child components, allowing for a more modular approach to handling input fields.

## useEffect Hook

The `useEffect` hook is used to perform side effects in function components. It allows you to synchronize a component with an external system, such as timers, API calls, or subscriptions.

In this project, `useEffect` is utilized in the following way:
- **Timer Component**: Demonstrates how to set up a timer that increments a count every second. The timer is started when the component mounts and cleaned up when the component unmounts to prevent memory leaks.

## useId Hook

The `useId` hook is used to generate unique IDs for elements in a component. This is particularly useful for accessibility, as it allows labels to be associated with their corresponding input fields.

In this project, `useId` is utilized in the following way:
- **UseId Component**: Demonstrates how to generate unique IDs for form elements, ensuring that the `htmlFor` attribute of labels matches the `id` of the corresponding input fields.

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
│   │   │   ├── useRef/
│   │   │   │   ├── Example.jsx
│   │   │   │   └── ForwardRef.jsx
│   │   │   ├── useEffect/
│   │   │   │   └── Timer.jsx
│   │   │   ├── useId/
│   │   │   │   └── UseId.jsx
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
