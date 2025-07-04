# Dataway Website

A modern, responsive website for Dataway - connecting smallholder farms to global tables with traceable, carbon-neutral produce.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean design with smooth animations and hover effects
- **Sustainability Focus**: Dedicated sustainability page highlighting environmental impact
- **Performance Optimized**: Fast loading with optimized images and CSS
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Cross-Browser Compatible**: Works on all modern browsers

## 📁 Project Structure

```
dataway-website/
├── index.html              # Main homepage
├── sustainability.html     # Sustainability page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── images/
│   ├── farm-plants.jpg     # Hero section farm image
│   └── market-produce.jpg  # Hero section produce image
├── assets/                 # Additional assets (if needed)
└── README.md              # This documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #22c55e (Dataway brand color)
- **Dark Green**: #16a34a (Hover states)
- **Text Colors**: #1a1a1a (headings), #666 (body text)
- **Background**: #ffffff (main), #f8fafc (sections)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Layout
- **Max Width**: 1200px container
- **Grid System**: CSS Grid for responsive layouts
- **Spacing**: Consistent 20px, 40px, 60px spacing scale

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project files
2. **Open terminal** in the project directory
3. **Start a local server**:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   
   # Using PHP (if you have it installed)
   php -S localhost:8000
   ```
4. **Open browser** and navigate to `http://localhost:8000`

### File Editing

You can edit the website using any code editor:
- **VS Code** (recommended)
- **Sublime Text**
- **Atom**
- **Notepad++**

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Create GitHub account** (if you don't have one)
2. **Create new repository** named `your-website-name`
3. **Upload all files** to the repository
4. **Go to Settings** → Pages
5. **Select source**: Deploy from a branch → main
6. **Your site will be available** at: `https://yourusername.github.io/your-website-name`

### Option 2: Netlify (Free)

1. **Create Netlify account** at netlify.com
2. **Drag and drop** your website folder to Netlify
3. **Get instant URL** (can customize later)
4. **Connect to GitHub** for automatic updates

### Option 3: Vercel (Free)

1. **Create Vercel account** at vercel.com
2. **Import project** from GitHub or upload files
3. **Automatic deployment** with custom domain support

### Option 4: Cloudflare Pages (Free)

1. **Create Cloudflare account**
2. **Connect GitHub repository**
3. **Automatic builds** and global CDN

## 🔧 Customization Guide

### Changing Colors

Edit `css/styles.css` and replace color values:
```css
/* Primary green color */
#22c55e → your-color

/* Dark green hover color */
#16a34a → your-hover-color
```

### Adding New Pages

1. **Create new HTML file** (e.g., `about.html`)
2. **Copy structure** from `sustainability.html`
3. **Update navigation** in all HTML files
4. **Add new styles** in `styles.css` if needed

### Updating Content

- **Homepage**: Edit `index.html`
- **Sustainability**: Edit `sustainability.html`
- **Styles**: Edit `css/styles.css`
- **Functionality**: Edit `js/script.js`

### Adding Images

1. **Add images** to `images/` folder
2. **Update HTML** with new image paths
3. **Optimize images** for web (recommended: WebP format, max 1920px width)

## 📊 Performance Tips

- **Optimize images**: Use WebP format when possible
- **Minimize CSS/JS**: Use minification tools for production
- **Enable compression**: Use gzip compression on server
- **Use CDN**: Consider using a CDN for faster global loading

## 🔍 SEO Optimization

The website includes:
- **Meta descriptions** for each page
- **Semantic HTML** structure
- **Alt text** for images
- **Proper heading hierarchy** (H1, H2, H3)
- **Open Graph** meta tags (can be added)

## 🛠 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📞 Support

For technical support or questions about the website:
1. Check this README file
2. Review the code comments
3. Test changes in a local environment first
4. Keep backups of working versions

## 🔄 Updates and Maintenance

### Regular Tasks
- **Update content** as needed
- **Check links** periodically
- **Monitor performance** with tools like Google PageSpeed Insights
- **Backup files** regularly

### Adding New Features
- **Test locally** before deploying
- **Maintain responsive design**
- **Follow existing code patterns**
- **Update documentation**

## 📈 Analytics (Optional)

To track website performance, you can add:
- **Google Analytics**
- **Google Search Console**
- **Hotjar** for user behavior
- **Cloudflare Analytics** (if using Cloudflare)

## 🎯 Next Steps

1. **Choose hosting platform** (GitHub Pages recommended for beginners)
2. **Purchase domain name** (optional, but recommended)
3. **Set up analytics** (optional)
4. **Create content strategy** for regular updates
5. **Consider adding blog functionality** (using a CMS like Forestry or Netlify CMS)

---

**Built with ❤️ for sustainable agriculture and environmental impact.**

