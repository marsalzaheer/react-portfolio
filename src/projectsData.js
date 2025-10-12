const projects = [
  {
    id: 1,
    title: 'React Portfolio Website',
    category: 'Frontend Development',
    date: '24 September, 2025',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759425488/portfolio-main_n7bk1w.mp4',
    github: 'https://github.com/marsalzaheer/react-portfolio/',
    shortDescription: 'A modern, responsive portfolio website built with React and Vite.',
    description: `
      This is a responsive Single-Page Application (SPA) portfolio website built using React and Vite. 
      It showcases my projects, skills, and contact information with a clean, modern UI and smooth user experience.
  
      Key Features:
      ➤ Single-Page Application (SPA) for seamless navigation without reloads.  
      ➤ Responsive design with Flexbox and Grid, optimized for desktop, tablet, and mobile.  
      ➤ Dynamic navigation using custom hooks and react-router-dom to highlight active sections.  
      ➤ Theme toggling (dark/light mode) with useState, useEffect, and CSS variables.  
      ➤ Smooth scrolling and scroll-triggered animations with ScrollReveal.js.  
      ➤ Modular, component-based structure (Header, Sidebar, Home, About, Services, Portfolio, Skills, Contact, Footer).  
      ➤ Interactive project cards with video previews and dedicated detail pages.  
  
      React Concepts Used:
      ➤ Functional components with useState, useEffect, and useRef hooks.  
      ➤ Client-side routing with react-router-dom (Routes, Link, useLocation).  
      ➤ Conditional rendering and dynamic class updates.  
      ➤ Prop drilling management for theme switching (with potential for Context API in larger apps).  
  
      Tech Stack:
      ➤ React + Vite (fast development and bundling).  
      ➤ HTML5, CSS3 (Flexbox, Grid, CSS variables).  
      ➤ ScrollReveal.js for animations.  
      ➤ Boxicons and Bootstrap Icons for UI elements.  
      ➤ Deployment-ready for platforms like Netlify, Vercel, or GitHub Pages.  
  
      Through this project, I gained practical experience in building scalable SPAs with React, managing state efficiently, 
      and creating an engaging, professional portfolio to showcase my work.
    `,
    completeVideo: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759425488/portfolio-main_n7bk1w.mp4'
  },  
  {
    id: 2,
    title: 'Blogging App',
    category: 'Full-Stack Development',
    date: '05 August, 2025',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1760267876/blog_p2aobk.mp4',
    github: 'https://github.com/marsalzaheer/Blog-',
    shortDescription: 'Full-stack app with blogs, micro-posts, media, and admin panel.',
    description: `
      This project started from a simple curiosity: how do platforms like Twitter or WordPress actually work behind the scenes? To find out, I built my own version a full-stack blogging and mini-Twitter style platform. It allows users to write and publish blog posts, share quick micro-updates, upload images, send messages through a contact form, and manage everything through a secure login/signup system with an admin dashboard.

      On the technical side, I used Django (Python) for the backend, Bootstrap + HTML/CSS/JavaScript for the frontend, and SQLite for the database. Along the way, I learned how the frontend, backend, and database layers connect in a real-world application, how to handle authentication and file uploads, and how to debug and maintain a system that feels like a small social platform.`,
    completeVideo: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1760267900/blog-complete_gjumsv.mp4'
  },
  {
    id: 3,
    title: 'Food App',
    category: 'E-commerce Platform',
    date: '25 August, 2025',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1760266969/store_dd8ifv.mp4',
    github: 'https://github.com/marsalzaheer/Food-Delivery-App',
    shortDescription: 'Prototype with cart, orders, and admin panel.',
    description: "This project came from a simple curiosity: what really happens when we add food to an online cart and place an order? To explore that, I built a food ordering web app prototype not to compete with Foodpanda 😅 but to understand how frontend, backend, and databases communicate. The app includes product listings, a shopping cart that remembers items, an order system powered by Django and SQLite, a working contact form, and an admin panel where I could step into the role of a restaurant manager.\n\nOn the technical side, I used HTML, CSS, Bootstrap, JavaScript, jQuery, Django, SQLite, and Django REST Framework. The focus was less on creating a polished UI and more on connecting the dots between user interactions, backend logic, and stored data. Building it gave me a hands-on understanding of how an e-commerce flow works, and it felt like engineering a small but complete ecosystem with clear paths to scale into payments, authentication, and real-time updates.",

    completeVideo: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1760266871/store-complete_u8gfds.mp4'

  },
  {
    id: 4,
    title: 'Real Estate Site',
    category: 'Frontend Development',
    date: 'September, 2024',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423968/realestate_hkqhwy.mp4',
    github: 'https://github.com/marsalzaheer/realestate-landingpage',
    shortDescription: 'Responsive real estate site with listings, deals, and modern UI.',
    description: `
      This project was built as a modern, responsive real estate website prototype. It showcases property listings, featured deals, and a smooth UI for exploring residential, commercial, and industrial properties. I focused heavily on user experience by adding structured sections like "How it Works," "Best Deals," "Featured Listings," and testimonials.
  
      The frontend is fully developed using HTML, CSS, and responsive grid layouts with custom media queries for mobile optimization. The design emphasizes a professional look with gradients, cards, and hover effects to mimic real-world real estate platforms.
  
      Through this project, I learned how to structure a multi-section landing page, manage layout responsiveness, use CSS grids and flexbox effectively, and create a professional presentation of a brand-style website. It's a strong example of applying frontend design principles to a real-world concept.`,
    completeVideo: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423968/realestate_hkqhwy.mp4'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Frontend Development',
    date: 'November, 2024',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759424090/portfolio_kstmmf.mp4',
    github: 'https://github.com/marsalzaheer/portfolio-1',
    shortDescription: 'Personal portfolio site showcasing projects, skills, and contact links.',
    description: `
      This project is my previous personal portfolio website, designed to showcase my work, skills, and ways to connect. It features a clean navigation bar, sections for WordPress, HTML/CSS, and JavaScript projects, along with a contact section linking to my social media, email, and phone. The site is fully responsive and built with semantic HTML and modern CSS practices.
  
      The goal was to create a professional online presence that highlights my projects in an organized and visually appealing manner. Each project tile links to live demos or source code, making it easy for visitors to explore my work.
  
      Through this project, I learned how to structure a multipage-like experience within a single-page site, apply responsive layouts using flexbox, and integrate external libraries like Font Awesome for icons. It serves as both a portfolio showcase and a practical demonstration of my frontend development skills.`,
    completeVideo: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759424090/portfolio_kstmmf.mp4'
  },
  {
  id: 6,
  title: 'React Mini Projects',
  category: 'Frontend Development',
  date: 'September, 2025',
  video: '/videos/React-Mini.mp4',
  github: 'https://github.com/marsalzaheer/react-learning',
  shortDescription: 'A collection of small React projects exploring hooks, state, routing, and context.',
  description: `
    This collection of React mini projects represents my learning journey while building with React + Vite. Each project focuses on specific concepts, gradually helping me piece together how React works in practice:

    ➤ Counter App
    My introduction to React, where I used the useState hook for state management, handled onClick events, and explored how React’s declarative UI updates instantly.

    ➤ Background Changer
    A playful project where buttons and a color picker updated the screen background. Here I learned conditional styling, state-driven UI, and user interaction handling.

    ➤ Password Generator
    A more practical project where I managed multiple inputs with useState, optimized with useCallback, automated tasks with useEffect, and used useRef to copy results to the clipboard.

    ➤ React Router Showcase
    Explored client-side navigation with React Router, learned to pass props across components, and combined useState and useEffect for dynamic single-page applications.

    ➤ Theme Switcher
    Introduced me to the Context API for managing global state without prop drilling, allowing smooth theme toggling across the entire app.

    These projects may look small, but each one taught me essential React concepts state, hooks, routing, and context that now form the foundation for building larger, more scalable applications.`,
    completeVideo: '/videos/React-Mini.mp4',
  },
  {
  id: 7,
  title: 'JavaScript Mini Projects',
  category: 'JavaScript Projects',
  date: '24 September, 2025',
  video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423916/Js-projects_gxhgdb.mp4',
  github: 'https://github.com/marsalzaheer/JS-projects/',
  shortDescription: 'A collection of interactive JavaScript mini projects including games and utilities.',
  description: `
    This collection combines four JavaScript mini projects that helped me practice DOM manipulation, event handling, and game logic. Each project is designed to strengthen JavaScript fundamentals while creating engaging user experiences:

    ➤ Snake Game  
    A classic snake game built with the canvas element. It features live scoring, food generation, arrow-key controls, collision detection, and options to start or restart the game.

    ➤ Rock Paper Scissors  
    A fun browser game where the user competes against the computer. It uses event listeners and conditional logic to track scores, display choices, and show results for each round.

    ➤ Tic Tac Toe  
    A two-player game with grid-based logic that checks for winning combinations and handles draws. Includes game reset functionality and real-time DOM updates to announce the winner.

    ➤ Currency Converter  
    A utility app that converts amounts between different currencies. It uses input fields, dropdown selectors, and dynamic updates to show conversion rates, styled with CSS and Font Awesome icons.

    Together, these projects gave me hands-on practice in JavaScript problem-solving, improving interactivity, and building small-scale yet functional web applications.
  `,
  completeVideo: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423916/Js-projects_gxhgdb.mp4',
  },
  {
    id: 8,
    title: 'Netflix Clone',
    category: 'Frontend Development',
    date: 'August, 2024',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423932/netflix_bz8vj8.mp4',
    github: 'https://github.com/marsalzaheer/netflix_clone',
    shortDescription: 'Responsive Netflix landing page with modern UI and sections.',
    description: `
      This project is a Netflix landing page clone built with pure HTML and CSS, focusing on responsive design and pixel-perfect layout replication. The website includes a hero section with email sign-up, feature highlights like TV streaming and offline downloads, a kids’ profile showcase, an FAQ section, and a professional footer.
  
      The main goal was to replicate Netflix’s clean, modern, and responsive UI while practicing layout building with Flexbox, grid, media queries, and background overlays. I also experimented with embedding autoplay videos inside section cards for a more realistic feel.
  
      Through this project, I strengthened my frontend skills in semantic HTML structure, responsive CSS design, and learned how to create visually polished landing pages inspired by real-world platforms.`,
    completeVideo:'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423932/netflix_bz8vj8.mp4',
  },
  {
    id: 9,
    title: 'Amazon Clone',
    category: 'Frontend Development',
    date: 'August, 2024',
    video: 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423935/amazon_otqxke.mp4',
    github: 'https://github.com/marsalzaheer/amazon_clone',
    shortDescription: 'Amazon homepage clone with responsive design and product showcase.',
    description: `
      This project is a clone of the Amazon homepage, built entirely with HTML and CSS. It replicates Amazon’s navigation bar, search functionality UI, hero banner, product category boxes, and footer. The project highlights product grids such as electronics, fashion, gaming, home décor, and deals, giving a realistic e-commerce look and feel.
  
      The main focus was on practicing structured layouts, using flexbox and CSS grid to build complex sections. The header includes a functional-style search bar and shopping cart icon, while the footer mirrors Amazon’s multi-column layout for links and customer support.
  
      Through this project, I gained experience in replicating large-scale website structures, organizing reusable CSS classes, and creating responsive designs that closely mimic professional e-commerce platforms.`,
    completeVideo:'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1759423935/amazon_otqxke.mp4',
  },




];

export default projects;
