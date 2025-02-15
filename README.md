# React States Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A simple yet powerful demonstration of React's useState hook functionality.

## Features

- Interactive examples demonstrating React state management
- Clean and minimal UI
- Easy to understand implementation
- Vite-powered development environment

## Mini Projects

### Counter <!-- className='text-6xl absolute top-[4rem]' -->

A simple counter that increments and decrements a value, demonstrating basic useState hook usage.

### Users List <!-- className='text-6xl relative top-[4rem]' -->

Displays a list of users with their details, showing how to manage arrays of objects in state.

### LiftStateUp Input <!-- className='text-6xl relative top-[4rem]' -->

Demonstrates lifting state up between components by managing input value in parent component.

### Toggle Button <!-- className='text-6xl relative top-[4rem]' -->

A switch that toggles between on/off states, showing state management with boolean values.

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
3. Interact with the counter component
4. Explore the code in `src/hooks/` to understand useState implementation

## Project Structure

```
states/
├── src/
│   ├── components/
│   │   └── hooks/
│   │       ├── UseState.jsx
│   │       ├── UseStateObject.jsx
│   │       ├── LiftStateUp.jsx
│   │       ├── ToggleSwich.jsx
│   │       └── hook-css/
│   │           └── toggle-swich.css
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
