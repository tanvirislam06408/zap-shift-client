# Zap Shift Client

A modern, responsive delivery and parcel management web application built with React and Vite. Zap Shift Client provides a seamless user experience for managing parcels, tracking shipments, and connecting with delivery riders.

## 🚀 Live Demo

Deployed on Vercel: [Visit Live App](https://zap-shift-client-lilac.vercel.app/)

## 📋 Project Overview

Zap Shift Client is the frontend application for the Zap Shift delivery platform. It enables users to:
- Register and authenticate securely via Firebase
- Create and manage parcel shipments
- Track delivery status in real-time
- View delivery coverage areas on interactive maps
- Browse merchant partners and services
- Access customer support and FAQs
- Manage user profiles and preferences

## 🛠️ Technology Stack

### Core Framework
- **React** (v19.2.4) - UI library for building interactive components
- **React Router** (v7.14.1) - Client-side routing and navigation
- **Vite** (v8.0.4) - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** (v4.2.2) - Utility-first CSS framework
- **DaisyUI** (v5.5.19) - Component library built on Tailwind CSS
- **@tailwindcss/vite** (v4.2.2) - Vite plugin for Tailwind CSS

### State Management & Forms
- **React Hook Form** (v7.72.1) - Efficient form state management
- **Firebase** (v12.12.0) - Authentication and backend services

### UI Components & Animations
- **Lucide React** (v1.8.0) - Beautiful SVG icons
- **React Icons** (v5.6.0) - Icon library with multiple icon sets
- **React Spinners** (v0.17.0) - Loading spinner components
- **AOS** (v2.3.4) - Animate On Scroll library for scroll animations
- **SweetAlert2** (v11.26.24) - Beautiful alert dialogs

### Carousel & Marquee
- **Swiper** (v12.1.3) - Touch slider library for carousels
- **React Fast Marquee** (v1.6.5) - Marquee component for scrolling content

### Maps & Geolocation
- **Leaflet** (v1.9.4) - Interactive maps library
- **React Leaflet** (v5.0.0) - React wrapper for Leaflet
- **react-responsive-carousel** (v3.2.23) - Responsive carousel component

### Development Tools
- **ESLint** (v9.39.4) - Code linting and quality
- **@eslint/js** (v9.39.4) - ESLint JavaScript config
- **@vitejs/plugin-react** (v6.0.1) - Vite plugin for React fast refresh
- **TypeScript** types for React and React DOM

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanvirislam06408/zap-shift-client.git
   cd zap-shift-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com)
   - Get your Firebase configuration credentials
   - Update `src/firebase/firebase.init.js` with your credentials

4. **Create environment file** (if needed)
   ```bash
   cp .env.example .env.local
   ```

## 🚀 Available Scripts

### Development Server
Start the Vite development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```
Output will be in the `dist` folder

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── assets/                      # Static assets (images, JSON data, etc.)
│   ├── banner/                  # Banner images
│   ├── brands/                  # Brand logos
│   ├── json/                    # Static JSON data (animations, forms)
│   └── warehouses.json          # Warehouse location data
├── context/                     # React Context for state management
│   └── AuthContext/             # Authentication context
├── firebase/                    # Firebase configuration
│   └── firebase.init.js         # Firebase initialization
├── hooks/                       # Custom React hooks
│   └── useAuth.jsx              # Authentication hook
├── Layouts/                     # Layout components
│   ├── AuthLayout.jsx           # Authentication page layout
│   └── RootLayout.jsx           # Main app layout
├── pages/                       # Page components
│   ├── AddParcelForm/           # Parcel creation form
│   ├── Authentication/          # Login, Register, Social Login
│   ├── Coverage/                # Coverage area display
│   ├── HomePage/                # Home page with multiple sections
│   │   ├── Banner/              # Hero banner
│   │   ├── BrandMarquee/        # Brand carousel
│   │   ├── Faq/                 # FAQ section with accordion
│   │   ├── Home/                # Main home component
│   │   ├── Marchent/            # Merchant section
│   │   ├── Services/            # Services display
│   │   ├── Support/             # Support section
│   │   └── Testimonial/         # Customer testimonials slider
│   └── shared/                  # Shared components
│       ├── Footer/              # Footer component
│       ├── Loading/             # Loading indicator
│       ├── Navbar/              # Navigation bar
│       └── ProFirstLogo/        # Logo component
├── PrivetRoutes/                # Protected/Private routes
│   └── PrivetRoutes.jsx         # Route protection logic
├── router/                      # Routing configuration
│   └── routes.jsx               # Route definitions
├── App.jsx                      # Root app component
├── main.jsx                     # Entry point
├── App.css                      # Global styles
└── index.css                    # Base styles
```

## 🔐 Authentication

The application uses Firebase Authentication for secure user management:
- Email/Password authentication
- Social login support
- Protected routes for authenticated users
- User context available throughout the app via `useAuth()` hook

## 🎨 Styling

- **Tailwind CSS** with custom configuration via `@tailwindcss/vite`
- **DaisyUI** components for pre-built UI elements
- Custom CSS files for component-specific styles
- Responsive design for all screen sizes

## 🗺️ Features

- **User Authentication**: Secure login and registration with Firebase
- **Parcel Management**: Create and manage parcel shipments
- **Real-time Tracking**: Track delivery status with maps
- **Coverage Maps**: View service coverage areas using Leaflet
- **Merchant Directory**: Browse and filter merchant partners
- **Testimonials**: Customer reviews and feedback
- **FAQ Section**: Comprehensive help documentation
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Smooth Animations**: Scroll animations with AOS
- **Beautiful UI**: Modern design with DaisyUI components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure:
- Your code follows the ESLint configuration
- Components are properly documented
- Changes are tested locally

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Firebase Configuration Issues
Ensure your Firebase credentials are correctly set in `src/firebase/firebase.init.js`

### Build Errors
Clear the node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@zapshift.com or open an issue on the GitHub repository.

## 🙏 Acknowledgments

- React and Vite communities for excellent tools and documentation
- Firebase for secure authentication and backend services
- Tailwind CSS and DaisyUI for beautiful styling components
- All contributors and users of Zap Shift