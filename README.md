<h1 align="center">Blog Post App using Redux</h1>

<p align="center">
<a href="https://github.com/ArindamPal-0/blog-post-react-redux/actions/workflows/deploy.yml"><img src="https://github.com/ArindamPal-0/blog-post-react-redux/actions/workflows/deploy.yml/badge.svg?branch=main" alt="Deploy static content to Github Pages"></a>
</p>

## Deployed Site

[https://arindampal-0.github.io/blog-post-react-redux/](https://arindampal-0.github.io/blog-post-react-redux/)

## Setup

```powershell
# installing dependencies
pnpm install

# building the vite project
pnpm build

# previewing the built vite project
pnpm preview

# or

# installing dependencies
npm install
# building the vite project
npm run build

# previewing the built vite project
npm run preview
```

## Dev Setup

```powershell
# installing dependencies
pnpm install
# running vite dev server
pnpm dev
# formatting src files using prettier
pnpm format

# or

# installing dependencies
npm install
# running vite dev server
npm run dev
# formatting src files using prettier
npm run format
```

## Todo

- [x] create vite react app
- [x] add tooling: eslint, prettier
- [x] add tailwindcss
- [x] add react router and setup basic routes
- [x] basic header and main styling
- [x] add Blog context
- [ ] display all the blog posts in home page
- [ ] add individual blog posts (or details) route
- [ ] add new blog post route
- [ ] edit, like and delete blog post functionality in details route
- [ ] add responsiveness to the UI
- [ ] convert react context into redux store
