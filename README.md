# Farooquei Rehan - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional dark theme with gradient accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML
- **Easy Customization**: Well-organized component structure

## 📋 Sections

- **Hero**: Eye-catching landing section with CTA buttons
- **About**: Personal introduction and key statistics
- **Skills**: Technical skills organized by category
- **Projects**: Featured projects with links to GitHub and live demos
- **Experience**: Work history and education timeline
- **Open Source**: Contributions to open-source projects
- **Contact**: Contact form and social links
- **Footer**: Quick links and newsletter signup

## 🛠️ Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Scrolling**: React Scroll

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/lineblood204-design/farooquei-rehan-portfolio.git

# Navigate to the project directory
cd farooquei-rehan-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and introduction
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update personal bio and statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skill categories
   - Update skill lists

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your own projects
   - Update project descriptions, links, and images

5. **Experience Section** (`src/components/Experience.jsx`):
   - Update work history
   - Add education and certifications

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure email/form handling

### Colors & Theme

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: '#6D28D9',      // Deep Purple
  secondary: '#0EA5E9',    // Tech Blue
  accent: '#06B6D4',       // Vibrant Cyan
  dark: '#0F172A',         // Deep Navy
  darker: '#1E293B',       // Almost Black
}
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

2. Deploy:
```bash
npm run build
```

3. Push `dist` folder to `gh-pages` branch

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Farooquei Rehan**
- Website: [farooquei.dev](https://farooquei.dev)
- GitHub: [@farooquei-rehan](https://github.com/farooquei-rehan)
- Email: rehan@farooquei.dev

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Made with ❤️ by Farooquei Rehan**