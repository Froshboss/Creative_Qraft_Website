// Navigation
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")
const navbar = document.querySelector(".navbar")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Sticky navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".service-card, .portfolio-item, .blog-card, .testimonial-card").forEach((el) => {
  observer.observe(el)
})

// Contact Form Validation
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("formMessage")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  // Validation
  if (!name) {
    showMessage("Please enter your name", "error")
    return
  }

  if (!email || !isValidEmail(email)) {
    showMessage("Please enter a valid email", "error")
    return
  }

  if (!message) {
    showMessage("Please enter your message", "error")
    return
  }

  // Success
  showMessage("Thank you! Your message has been sent successfully.", "success")
  contactForm.reset()

  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = ""
    formMessage.classList.remove("success", "error")
  }, 5000)
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showMessage(text, type) {
  formMessage.textContent = text
  formMessage.classList.remove("success", "error")
  formMessage.classList.add(type)
}

// Smooth scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})

// Add scroll animations
window.addEventListener("load", () => {
  document.querySelectorAll(".service-card, .portfolio-item, .blog-card, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  })
})

// Blog Functionality
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Design Principles for Modern Websites",
    excerpt: "Discover the fundamental design principles that can transform your website from good to great. Learn how to create visually appealing and user-friendly interfaces.",
    content: "Design principles are the foundation of creating effective and beautiful websites. In this comprehensive guide, we'll explore ten essential principles that every web designer should know.\n\n1. **Visual Hierarchy**: Guide users' attention through your design using size, color, and spacing.\n\n2. **Balance**: Create visual equilibrium through symmetrical or asymmetrical layouts.\n\n3. **Contrast**: Use contrasting elements to create emphasis and improve readability.\n\n4. **Repetition**: Establish consistency through repeated design elements.\n\n5. **Alignment**: Create order and organization through proper alignment.\n\n6. **Proximity**: Group related elements together to show relationships.\n\n7. **White Space**: Use negative space effectively to improve readability.\n\n8. **Color Theory**: Understand how colors work together and affect emotions.\n\n9. **Typography**: Choose fonts that enhance readability and convey your brand.\n\n10. **User Experience**: Always prioritize the user's needs and goals.\n\nBy applying these principles, you can create websites that are not only beautiful but also functional and user-friendly.",
    category: "design",
    date: "2025-01-15",
    author: "Sarah Johnson",
    authorInitials: "SJ",
    image: "assets/digital product launch.png",
    readingTime: 5,
    status: "published"
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with insights into the latest web development trends. From AI integration to progressive web apps, explore what's shaping the future.",
    content: "The web development landscape is constantly evolving. As we move through 2025, several key trends are shaping how we build and interact with websites.\n\n**Artificial Intelligence Integration**: AI is becoming increasingly integrated into web development workflows. From automated code generation to intelligent content recommendations, AI is transforming how developers work.\n\n**Progressive Web Apps (PWAs)**: PWAs continue to gain traction, offering app-like experiences through web browsers. They provide offline functionality, push notifications, and fast loading times.\n\n**Serverless Architecture**: More developers are adopting serverless computing, which allows them to build and run applications without managing servers.\n\n**Micro-Frontends**: This architectural approach allows teams to work independently on different parts of a frontend application.\n\n**WebAssembly**: This technology enables high-performance applications on the web, opening new possibilities for complex applications.\n\n**Enhanced Security**: With increasing cyber threats, security is becoming a top priority in web development.\n\nThese trends represent the future of web development, and staying informed will help you build better, more modern applications.",
    category: "development",
    date: "2025-01-12",
    author: "Michael Chen",
    authorInitials: "MC",
    image: "assets/SaaS Development Company.jpeg",
    readingTime: 7,
    status: "published"
  },
  {
    id: 3,
    title: "Digital Marketing Strategies That Actually Work",
    excerpt: "Learn proven digital marketing strategies that drive real results. From SEO to social media, discover tactics that can grow your online presence.",
    content: "Digital marketing is essential for any business looking to succeed online. Here are strategies that have proven effective:\n\n**Content Marketing**: Create valuable, relevant content that attracts and engages your target audience. Blog posts, videos, and infographics can establish your authority.\n\n**Search Engine Optimization (SEO)**: Optimize your website to rank higher in search results. Focus on keyword research, on-page optimization, and quality backlinks.\n\n**Social Media Marketing**: Engage with your audience on platforms where they spend time. Each platform requires a tailored approach.\n\n**Email Marketing**: Despite being one of the oldest digital marketing channels, email remains highly effective for nurturing leads and maintaining customer relationships.\n\n**Pay-Per-Click (PPC) Advertising**: Use targeted ads to reach specific audiences. Google Ads and social media advertising can provide immediate visibility.\n\n**Analytics and Data**: Track your marketing efforts to understand what works and what doesn't. Use data to make informed decisions.\n\n**Influencer Partnerships**: Collaborate with influencers who align with your brand to reach new audiences.\n\nRemember, the best strategy is one that's tailored to your specific business and audience. Test, measure, and refine your approach continuously.",
    category: "marketing",
    date: "2025-01-10",
    author: "Emily Rodriguez",
    authorInitials: "ER",
    image: "assets/Digital marketing poster.jpeg",
    readingTime: 6,
    status: "published"
  },
  {
    id: 4,
    title: "5 Quick Tips to Improve Your Website's Performance",
    excerpt: "Speed up your website with these simple but effective performance optimization tips. Learn how to reduce load times and improve user experience.",
    content: "Website performance directly impacts user experience and search engine rankings. Here are five quick tips to improve your site's speed:\n\n**1. Optimize Images**: Compress images before uploading them. Use modern formats like WebP and implement lazy loading.\n\n**2. Minimize HTTP Requests**: Reduce the number of files your site needs to load by combining CSS and JavaScript files.\n\n**3. Enable Browser Caching**: Configure your server to cache static resources, so returning visitors don't need to download them again.\n\n**4. Use a Content Delivery Network (CDN)**: CDNs distribute your content across multiple servers worldwide, reducing load times for users.\n\n**5. Minimize Code**: Remove unnecessary code, comments, and whitespace. Minify your CSS and JavaScript files.\n\n**Bonus Tip**: Regularly test your website's performance using tools like Google PageSpeed Insights or GTmetrix. These tools provide specific recommendations for improvement.\n\nEven small improvements can make a significant difference. Start with the easiest optimizations and work your way up to more complex changes.",
    category: "tips",
    date: "2025-01-08",
    author: "David Kim",
    authorInitials: "DK",
    image: "assets/Saas.png",
    readingTime: 4,
    status: "published"
  },
  {
    id: 5,
    title: "Creating Memorable Brand Identities",
    excerpt: "Explore the art of brand identity design. Learn how to create visual identities that resonate with audiences and stand the test of time.",
    content: "A strong brand identity is crucial for business success. It's more than just a logo—it's the visual representation of your brand's values and personality.\n\n**Understanding Your Brand**: Before designing, understand your brand's mission, values, and target audience. This foundation guides all design decisions.\n\n**Logo Design**: Your logo should be simple, memorable, and versatile. It needs to work across various applications, from business cards to billboards.\n\n**Color Palette**: Colors evoke emotions and associations. Choose a palette that reflects your brand's personality and resonates with your audience.\n\n**Typography**: Select fonts that complement your brand's character. Typography can convey professionalism, playfulness, or innovation.\n\n**Visual Elements**: Icons, patterns, and illustrations should be consistent with your brand identity. They add personality and help differentiate your brand.\n\n**Brand Guidelines**: Create comprehensive guidelines that ensure consistent application of your brand identity across all touchpoints.\n\n**Case Studies**: Study successful brand identities to understand what makes them effective. Learn from both successes and failures.\n\nRemember, a great brand identity is timeless yet adaptable. It should evolve with your business while maintaining its core essence.",
    category: "design",
    date: "2025-01-05",
    author: "Sarah Johnson",
    authorInitials: "SJ",
    image: "assets/Inspark- Branding I Brand Identity I Visual Design I Business Card.jpeg",
    readingTime: 6,
    status: "published"
  },
  {
    id: 6,
    title: "JavaScript Best Practices for Modern Development",
    excerpt: "Master JavaScript with these essential best practices. Write cleaner, more maintainable code that follows industry standards.",
    content: "JavaScript is a powerful language, but writing good JavaScript requires understanding best practices and modern patterns.\n\n**Use Modern ES6+ Features**: Take advantage of arrow functions, destructuring, template literals, and async/await to write more concise code.\n\n**Follow Naming Conventions**: Use descriptive names for variables and functions. Follow consistent naming patterns (camelCase for variables, PascalCase for classes).\n\n**Avoid Global Variables**: Keep your code modular and avoid polluting the global scope. Use modules and proper scoping.\n\n**Handle Errors Properly**: Implement proper error handling with try-catch blocks. Don't silently fail—log errors appropriately.\n\n**Write Readable Code**: Code is read more often than it's written. Write code that's easy to understand, even if it means a few extra lines.\n\n**Use Comments Wisely**: Comment why, not what. Good code should be self-explanatory, but complex logic may need explanation.\n\n**Optimize Performance**: Be mindful of performance. Avoid unnecessary DOM manipulations, use event delegation, and optimize loops.\n\n**Test Your Code**: Write tests for your code. Unit tests, integration tests, and end-to-end tests help ensure your code works correctly.\n\n**Stay Updated**: JavaScript evolves rapidly. Stay informed about new features and best practices in the community.\n\nBy following these practices, you'll write better JavaScript that's easier to maintain and debug.",
    category: "development",
    date: "2025-01-03",
    author: "Michael Chen",
    authorInitials: "MC",
    image: "assets/terminal-hacker-computer-ubuntu-wallpaper-preview.jpg",
    readingTime: 5,
    status: "published"
  },
  {
    id: 7,
    title: "Social Media Marketing: A Complete Guide",
    excerpt: "Navigate the world of social media marketing with this comprehensive guide. Learn how to build your presence and engage your audience.",
    content: "Social media marketing is essential for modern businesses. Here's how to create an effective strategy:\n\n**Choose the Right Platforms**: Not every platform is right for every business. Research where your target audience spends time and focus your efforts there.\n\n**Create a Content Calendar**: Plan your content in advance. A calendar helps maintain consistency and ensures you're posting regularly.\n\n**Engage with Your Audience**: Social media is a two-way conversation. Respond to comments, messages, and mentions promptly.\n\n**Use Visual Content**: Images and videos perform better than text-only posts. Invest in quality visual content.\n\n**Leverage User-Generated Content**: Encourage your customers to share their experiences. User-generated content builds trust and authenticity.\n\n**Run Targeted Ads**: Use the powerful targeting options available on social platforms to reach specific audiences.\n\n**Analyze Your Performance**: Track metrics like engagement rate, reach, and conversions. Use this data to refine your strategy.\n\n**Stay Authentic**: Authenticity resonates with audiences. Be genuine in your communications and show your brand's personality.\n\n**Collaborate with Influencers**: Partner with influencers who align with your brand values to expand your reach.\n\n**Monitor Trends**: Stay aware of trending topics and hashtags, but only participate if they're relevant to your brand.\n\nRemember, social media marketing is about building relationships, not just promoting products. Focus on providing value to your audience.",
    category: "marketing",
    date: "2025-01-01",
    author: "Emily Rodriguez",
    authorInitials: "ER",
    image: "assets/Instagram.jpeg",
    readingTime: 8,
    status: "published"
  },
  {
    id: 8,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "Understand the differences between CSS Grid and Flexbox and learn when to use each layout method for optimal results.",
    content: "CSS Grid and Flexbox are both powerful layout tools, but they serve different purposes. Understanding when to use each is key to effective CSS.\n\n**CSS Grid**: Best for two-dimensional layouts where you need to control both rows and columns simultaneously. Use Grid for:\n- Complex page layouts\n- Card grids\n- Dashboard layouts\n- Any layout where you need precise control over both dimensions\n\n**Flexbox**: Best for one-dimensional layouts where you're working with either rows or columns. Use Flexbox for:\n- Navigation bars\n- Centering content\n- Distributing space within a container\n- Aligning items along a single axis\n\n**Key Differences**:\n- Grid is 2D (rows and columns), Flexbox is 1D (row OR column)\n- Grid is better for overall page structure\n- Flexbox is better for component-level layouts\n\n**When to Use Both**: You can use Grid for the overall layout and Flexbox for individual components. They complement each other well.\n\n**Browser Support**: Both have excellent modern browser support, but always test in your target browsers.\n\n**Best Practice**: Start with Flexbox for simple layouts, and use Grid when you need more complex two-dimensional control. Often, you'll use both in the same project.",
    category: "development",
    date: "2024-12-28",
    author: "David Kim",
    authorInitials: "DK",
    image: "assets/wallpaperflare.com_wallpaper.jpg",
    readingTime: 5,
    status: "published"
  },
  {
    id: 9,
    title: "Typography Tips for Better Web Design",
    excerpt: "Master the art of web typography. Learn how to choose fonts, set hierarchy, and create readable, beautiful text layouts.",
    content: "Typography is one of the most important aspects of web design. Good typography enhances readability and user experience.\n\n**Choose the Right Fonts**: Select fonts that match your brand personality. Consider readability, especially for body text. Sans-serif fonts are often more readable on screens.\n\n**Establish Hierarchy**: Use different font sizes, weights, and styles to create visual hierarchy. Headings should be clearly distinguishable from body text.\n\n**Line Length**: Optimal line length is 50-75 characters. Lines that are too long or too short are harder to read.\n\n**Line Height**: Set appropriate line height (leading). For body text, 1.5-1.6 is usually comfortable. Headings can have tighter line height.\n\n**Letter Spacing**: Adjust letter spacing for headings and uppercase text to improve readability.\n\n**Contrast**: Ensure sufficient contrast between text and background. This is crucial for accessibility.\n\n**Font Pairing**: Pair fonts that complement each other. Typically, pair a serif with a sans-serif, or use different weights of the same font family.\n\n**Responsive Typography**: Use relative units (rem, em) and media queries to ensure typography scales appropriately across devices.\n\n**Limit Font Families**: Don't use too many different fonts. Stick to 2-3 font families maximum for consistency.\n\n**Test Readability**: Always test your typography choices with real users. What looks good to you might not be readable for others.\n\nRemember, typography should enhance your content, not distract from it. When in doubt, prioritize readability over style.",
    category: "design",
    date: "2024-12-25",
    author: "Sarah Johnson",
    authorInitials: "SJ",
    image: "assets/ecommerce rebrand.png",
    readingTime: 6,
    status: "published"
  },
  {
    id: 10,
    title: "Quick Wins: 10 Ways to Improve Your Website Today",
    excerpt: "Implement these quick improvements to enhance your website's usability, performance, and user experience immediately.",
    content: "Sometimes small changes can make a big difference. Here are 10 quick wins you can implement today:\n\n**1. Add Alt Text to Images**: Improve accessibility and SEO by adding descriptive alt text to all images.\n\n**2. Improve Button Contrast**: Ensure buttons have sufficient contrast and are clearly clickable.\n\n**3. Add a Search Function**: If you have lots of content, add a search feature to help users find what they need.\n\n**4. Optimize Forms**: Reduce form fields to only what's necessary. Use clear labels and helpful error messages.\n\n**5. Add Breadcrumbs**: Help users navigate your site with breadcrumb navigation.\n\n**6. Improve Mobile Experience**: Test your site on mobile devices and fix any issues.\n\n**7. Add Social Proof**: Include testimonials, reviews, or trust badges to build credibility.\n\n**8. Speed Up Load Times**: Compress images, enable caching, and minimize code.\n\n**9. Add Clear CTAs**: Make sure your call-to-action buttons are prominent and clear.\n\n**10. Fix Broken Links**: Regularly check for and fix broken links on your site.\n\nThese improvements don't require major overhauls but can significantly enhance user experience. Start with the easiest ones and work your way through the list.",
    category: "tips",
    date: "2024-12-22",
    author: "David Kim",
    authorInitials: "DK",
    image: "assets/A High-Impact Visual Identity for \"Compacta\".jpeg",
    readingTime: 4,
    status: "published"
  }
]

// Blog state
let currentPage = 1
const postsPerPage = 6
let allBlogPosts = [...blogPosts]
let filteredPosts = [...blogPosts]
let currentCategory = "all"
let currentSearch = ""
let editingPostId = null

// Load posts from localStorage on page load
function loadPostsFromStorage() {
  const storedPosts = localStorage.getItem("blogPosts")
  if (storedPosts) {
    try {
      const parsedPosts = JSON.parse(storedPosts)
      // Merge with default posts, avoiding duplicates by ID
      const defaultIds = new Set(blogPosts.map(p => p.id))
      const newPosts = parsedPosts.filter(p => !defaultIds.has(p.id))
      allBlogPosts = [...blogPosts, ...newPosts]
      // Sort by date (newest first)
      allBlogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
      filteredPosts = [...allBlogPosts]
    } catch (e) {
      console.error("Error loading posts from storage:", e)
    }
  }
}

// Save posts to localStorage
function savePostsToStorage() {
  // Only save user-created posts (those not in default blogPosts)
  const defaultIds = new Set(blogPosts.map(p => p.id))
  const userPosts = allBlogPosts.filter(p => !defaultIds.has(p.id))
  localStorage.setItem("blogPosts", JSON.stringify(userPosts))
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content) {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes || 1
}

// Generate author initials from name
function generateInitials(name) {
  if (!name) return "??"
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

// Initialize blog
function initBlog() {
  try {
    loadPostsFromStorage()
    renderBlogPosts()
    setupEventListeners()
    setupPagination()
  } catch (error) {
    console.error("Error initializing blog:", error)
  }
}

// Render blog posts
function renderBlogPosts() {
  const blogGrid = document.getElementById("blogGrid")
  if (!blogGrid) return

  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const postsToShow = filteredPosts.slice(startIndex, endIndex)

  if (postsToShow.length === 0) {
    blogGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No posts found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `
    return
  }

  blogGrid.innerHTML = postsToShow.map(post => `
    <article class="blog-card" data-id="${post.id}">
      <div class="blog-card-image">
        ${post.image ? `<img src="${escapeHtmlAttribute(post.image)}" alt="${escapeHtmlAttribute(post.title)}" onerror="this.parentElement.innerHTML='📝'">` : '📝'}
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-date">${formatDate(post.date)}</span>
          <span class="blog-category">${escapeHtml(post.category)}</span>
          <span class="blog-reading-time">⏱ ${post.readingTime} min read</span>
        </div>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.excerpt)}</p>
        <div class="blog-author">
          <div class="blog-author-avatar">${escapeHtml(post.authorInitials)}</div>
          <div class="blog-author-info">
            <div class="blog-author-name">${escapeHtml(post.author)}</div>
          </div>
        </div>
        <a href="#" class="read-more" data-id="${post.id}">Read More →</a>
      </div>
    </article>
  `).join("")

  // Add click listeners
  document.querySelectorAll(".blog-card, .read-more").forEach(card => {
    card.addEventListener("click", (e) => {
      e.preventDefault()
      const postId = parseInt(card.dataset.id || card.closest(".blog-card")?.dataset.id)
      if (postId) {
        openPostModal(postId)
      }
    })
  })
}

// Setup event listeners
function setupEventListeners() {
  // Search
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase()
      filterPosts()
    })
  }

  // Category filters
  const filterButtons = document.querySelectorAll(".filter-btn")
  if (filterButtons.length === 0) {
    console.error("Filter buttons not found!")
  }
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"))
      btn.classList.add("active")
      currentCategory = btn.dataset.category || "all"
      currentPage = 1
      filterPosts()
    })
  })

  // Modal close
  const closeModal = document.getElementById("closeModal")
  const modalOverlay = document.getElementById("postModal")
  
  if (closeModal) {
    closeModal.addEventListener("click", closePostModal)
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closePostModal()
      }
    })
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePostModal()
      closeCreatePostModal()
    }
  })

  // Create post button
  const createPostBtn = document.getElementById("createPostBtn")
  if (createPostBtn) {
    createPostBtn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      try {
        openCreatePostModal()
      } catch (error) {
        console.error("Error opening create post modal:", error)
        alert("Error opening create post form. Please check the console for details.")
      }
    })
  } else {
    console.error("Create Post button not found! Make sure the button exists in the HTML.")
  }

  // Close create post modal
  const closeCreateModal = document.getElementById("closeCreateModal")
  const createPostModal = document.getElementById("createPostModal")
  
  if (closeCreateModal) {
    closeCreateModal.addEventListener("click", closeCreatePostModal)
  }
  
  if (createPostModal) {
    createPostModal.addEventListener("click", (e) => {
      if (e.target === createPostModal) {
        closeCreatePostModal()
      }
    })
  }

  // Create post form
  const createPostForm = document.getElementById("createPostForm")
  if (createPostForm) {
    createPostForm.addEventListener("submit", (e) => {
      e.preventDefault()
      publishPost()
    })
  }

  // Save draft button
  const saveDraftBtn = document.getElementById("saveDraftBtn")
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener("click", () => {
      savePostAsDraft()
    })
  }
}

// Filter posts
function filterPosts() {
  filteredPosts = allBlogPosts.filter(post => {
    // Only show published posts (not drafts)
    if (post.status === "draft") return false
    
    const matchesCategory = currentCategory === "all" || post.category === currentCategory
    const matchesSearch = !currentSearch || 
      post.title.toLowerCase().includes(currentSearch) ||
      post.excerpt.toLowerCase().includes(currentSearch) ||
      post.content.toLowerCase().includes(currentSearch) ||
      post.category.toLowerCase().includes(currentSearch)
    
    return matchesCategory && matchesSearch
  })

  currentPage = 1
  renderBlogPosts()
  setupPagination()
}

// Setup pagination
function setupPagination() {
  const pagination = document.getElementById("pagination")
  if (!pagination) return

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  if (totalPages <= 1) {
    pagination.innerHTML = ""
    return
  }

  let paginationHTML = ""

  // Previous button
  paginationHTML += `
    <button class="pagination-btn" ${currentPage === 1 ? "disabled" : ""} data-page="${currentPage - 1}">
      ← Prev
    </button>
  `

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `
        <button class="pagination-btn ${i === currentPage ? "active" : ""}" data-page="${i}">
          ${i}
        </button>
      `
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += `<span class="pagination-ellipsis">...</span>`
    }
  }

  // Next button
  paginationHTML += `
    <button class="pagination-btn" ${currentPage === totalPages ? "disabled" : ""} data-page="${currentPage + 1}">
      Next →
    </button>
  `

  pagination.innerHTML = paginationHTML

  // Add click listeners
  pagination.querySelectorAll(".pagination-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!btn.disabled) {
        currentPage = parseInt(btn.dataset.page)
        renderBlogPosts()
        setupPagination()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    })
  })
}

// Open post modal
function openPostModal(postId) {
  const post = allBlogPosts.find(p => p.id === postId)
  if (!post) return

  const modalBody = document.getElementById("modalBody")
  const modalOverlay = document.getElementById("postModal")

  if (!modalBody || !modalOverlay) return

  const contentParagraphs = post.content.split("\n\n").filter(p => p.trim())

  modalBody.innerHTML = `
    ${post.image ? `<img src="${escapeHtmlAttribute(post.image)}" alt="${escapeHtmlAttribute(post.title)}" class="modal-image" onerror="this.style.display='none'">` : ""}
    <div class="modal-header">
      <div class="modal-meta">
        <span class="blog-date">${formatDate(post.date)}</span>
        <span class="blog-category">${escapeHtml(post.category)}</span>
        <span class="blog-reading-time">⏱ ${post.readingTime} min read</span>
      </div>
      <h2 class="modal-title">${escapeHtml(post.title)}</h2>
      <div class="blog-author">
        <div class="blog-author-avatar">${escapeHtml(post.authorInitials)}</div>
        <div class="blog-author-info">
          <div class="blog-author-name">${escapeHtml(post.author)}</div>
        </div>
      </div>
    </div>
    <div class="modal-content-text">
      ${contentParagraphs.map(p => `<p>${formatContent(p)}</p>`).join("")}
    </div>
    <div class="modal-share">
      <button class="share-btn" data-post-id="${post.id}" data-share-type="post">
        📤 Share
      </button>
      <button class="share-btn" data-share-type="link">
        🔗 Copy Link
      </button>
    </div>
    <div class="comments-section">
      <h3 class="comments-title">Comments</h3>
      <div class="comment-form">
        <div class="comment-input-group">
          <input type="text" id="commentName" placeholder="Your Name" />
        </div>
        <div class="comment-input-group">
          <textarea id="commentText" rows="4" placeholder="Write a comment..."></textarea>
        </div>
        <button class="submit-button" data-post-id="${post.id}">Post Comment</button>
      </div>
      <div id="comments-${post.id}" class="comments-list">
        ${getCommentsHTML(post.id)}
      </div>
    </div>
  `

  // Add event listeners for share buttons
  const shareButtons = modalBody.querySelectorAll(".share-btn")
  shareButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.shareType === "post") {
        const postId = parseInt(btn.dataset.postId)
        const post = allBlogPosts.find(p => p.id === postId)
        if (post) {
          sharePost(post.title, window.location.href)
        }
      } else if (btn.dataset.shareType === "link") {
        copyLink(window.location.href)
      }
    })
  })

  // Add event listener for comment submit button
  const commentSubmitBtn = modalBody.querySelector(".submit-button")
  if (commentSubmitBtn) {
    commentSubmitBtn.addEventListener("click", () => {
      const postId = parseInt(commentSubmitBtn.dataset.postId)
      addComment(postId)
    })
  }

  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close post modal
function closePostModal() {
  const modalOverlay = document.getElementById("postModal")
  if (modalOverlay) {
    modalOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

// Format content (markdown-like formatting)
// First escape HTML to prevent XSS, then apply formatting
function formatContent(text) {
  // First escape all HTML entities
  const escaped = escapeHtml(text)
  // Then apply markdown-like formatting (safe because text is already escaped)
  return escaped
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^(\d+)\.\s/gm, "<strong>$1.</strong> ")
}

// Share post
function sharePost(title, url) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(err => console.log("Error sharing", err))
  } else {
    copyLink(url)
    alert("Link copied to clipboard!")
  }
}

// Copy link
function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard!")
  }).catch(err => {
    console.log("Error copying link", err)
  })
}

// Comments functionality
let comments = JSON.parse(localStorage.getItem("blogComments") || "{}")

function getCommentsHTML(postId) {
  const postComments = comments[postId] || []
  if (postComments.length === 0) {
    return "<p style='color: var(--text-light);'>No comments yet. Be the first to comment!</p>"
  }
  return postComments.map(comment => `
    <div class="comment">
      <div class="comment-author">${escapeHtml(comment.name)}</div>
      <div class="comment-date">${formatDate(comment.date)}</div>
      <div class="comment-text">${escapeHtml(comment.text)}</div>
    </div>
  `).join("")
}

function addComment(postId) {
  const nameInput = document.getElementById("commentName")
  const textInput = document.getElementById("commentText")
  const commentsList = document.getElementById(`comments-${postId}`)

  if (!nameInput || !textInput || !commentsList) return

  const name = nameInput.value.trim()
  const text = textInput.value.trim()

  if (!name || !text) {
    alert("Please fill in both name and comment fields.")
    return
  }

  if (!comments[postId]) {
    comments[postId] = []
  }

  comments[postId].push({
    name: name,
    text: text,
    date: new Date().toISOString()
  })

  localStorage.setItem("blogComments", JSON.stringify(comments))
  commentsList.innerHTML = getCommentsHTML(postId)
  nameInput.value = ""
  textInput.value = ""
}

function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

// Escape HTML for use in attributes (handles quotes and special chars)
function escapeHtmlAttribute(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/`/g, "&#x60;")
}

// Open create post modal
function openCreatePostModal(postId = null) {
  const modal = document.getElementById("createPostModal")
  const form = document.getElementById("createPostForm")
  const title = document.getElementById("createPostTitle")
  
  if (!modal) {
    console.error("Create post modal not found! Check HTML for id='createPostModal'")
    alert("Error: Create post modal not found. Please refresh the page.")
    return
  }
  if (!form) {
    console.error("Create post form not found! Check HTML for id='createPostForm'")
    return
  }

  editingPostId = postId
  const formTitle = document.getElementById("postTitle")
  const formCategory = document.getElementById("postCategory")
  const formExcerpt = document.getElementById("postExcerpt")
  const formContent = document.getElementById("postContent")
  const formAuthor = document.getElementById("postAuthor")
  const formImage = document.getElementById("postImage")

  if (postId) {
    // Editing existing post
    const post = allBlogPosts.find(p => p.id === postId)
    if (post) {
      title.textContent = "Edit Blog Post"
      formTitle.value = post.title
      formCategory.value = post.category
      formExcerpt.value = post.excerpt
      formContent.value = post.content
      formAuthor.value = post.author
      formImage.value = post.image || ""
    }
  } else {
    // Creating new post
    title.textContent = "Create New Blog Post"
    form.reset()
  }

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close create post modal
function closeCreatePostModal() {
  const modal = document.getElementById("createPostModal")
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""
    editingPostId = null
    const form = document.getElementById("createPostForm")
    if (form) {
      form.reset()
    }
  }
}

// Publish post
function publishPost() {
  const form = document.getElementById("createPostForm")
  if (!form) return

  const formData = {
    title: document.getElementById("postTitle").value.trim(),
    category: document.getElementById("postCategory").value,
    excerpt: document.getElementById("postExcerpt").value.trim(),
    content: document.getElementById("postContent").value.trim(),
    author: document.getElementById("postAuthor").value.trim(),
    image: document.getElementById("postImage").value.trim() || null
  }

  // Validation
  if (!formData.title || !formData.category || !formData.excerpt || !formData.content || !formData.author) {
    alert("Please fill in all required fields.")
    return
  }

  const readingTime = calculateReadingTime(formData.content)
  const authorInitials = generateInitials(formData.author)
  const currentDate = new Date().toISOString().split("T")[0]

  if (editingPostId) {
    // Update existing post
    const postIndex = allBlogPosts.findIndex(p => p.id === editingPostId)
    if (postIndex !== -1) {
      allBlogPosts[postIndex] = {
        ...allBlogPosts[postIndex],
        ...formData,
        readingTime,
        authorInitials,
        date: currentDate,
        status: "published"
      }
    }
  } else {
    // Create new post
    const newId = Math.max(...allBlogPosts.map(p => p.id), 0) + 1
    const newPost = {
      id: newId,
      ...formData,
      readingTime,
      authorInitials,
      date: currentDate,
      status: "published"
    }
    allBlogPosts.unshift(newPost) // Add to beginning
  }

  // Save to localStorage
  savePostsToStorage()
  
  // Refresh the display
  filterPosts()
  
  // Close modal
  closeCreatePostModal()
  
  // Show success message
  alert(editingPostId ? "Post updated successfully!" : "Post published successfully!")
}

// Save post as draft
function savePostAsDraft() {
  const form = document.getElementById("createPostForm")
  if (!form) return

  const formData = {
    title: document.getElementById("postTitle").value.trim(),
    category: document.getElementById("postCategory").value,
    excerpt: document.getElementById("postExcerpt").value.trim(),
    content: document.getElementById("postContent").value.trim(),
    author: document.getElementById("postAuthor").value.trim(),
    image: document.getElementById("postImage").value.trim() || null
  }

  // Validation - drafts can have empty fields
  if (!formData.title) {
    alert("Please at least enter a title for the draft.")
    return
  }

  const readingTime = formData.content ? calculateReadingTime(formData.content) : 1
  const authorInitials = formData.author ? generateInitials(formData.author) : "??"
  const currentDate = new Date().toISOString().split("T")[0]

  if (editingPostId) {
    // Update existing draft
    const postIndex = allBlogPosts.findIndex(p => p.id === editingPostId)
    if (postIndex !== -1) {
      allBlogPosts[postIndex] = {
        ...allBlogPosts[postIndex],
        ...formData,
        readingTime,
        authorInitials,
        date: currentDate,
        status: "draft"
      }
    }
  } else {
    // Create new draft
    const newId = Math.max(...allBlogPosts.map(p => p.id), 0) + 1
    const newPost = {
      id: newId,
      ...formData,
      readingTime,
      authorInitials,
      date: currentDate,
      status: "draft"
    }
    allBlogPosts.unshift(newPost)
  }

  // Save to localStorage
  savePostsToStorage()
  
  // Close modal
  closeCreatePostModal()
  
  // Show success message
  alert("Draft saved successfully!")
}

// Initialize blog when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBlog)
} else {
  initBlog()
}