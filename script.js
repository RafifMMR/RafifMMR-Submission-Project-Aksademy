const scrollBtn = document.getElementById("scrollToTopBtn")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const menuIcon = document.getElementById("menuIcon")

// Scroll to top functionality
window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
      scrollBtn.classList.add("show")
   } else {
      scrollBtn.classList.remove("show")
   }
})

scrollBtn.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" })
})

mobileMenuBtn.addEventListener("click", () => {
   const isOpen = mobileMenu.classList.contains("hidden")

   if (isOpen) {
      // Open menu - show X icon
      menuIcon.src = "image/x.svg"
      menuIcon.alt = "Close"
   } else {
      // Close menu - show menu icon
      menuIcon.src = "image/menu.svg"
      menuIcon.alt = "Menu"
   }

   mobileMenu.classList.toggle("hidden")
})

const mobileMenuLinks = mobileMenu.querySelectorAll("a")
mobileMenuLinks.forEach((link) => {
   link.addEventListener("click", () => {
      menuIcon.src = "image/menu.svg"
      menuIcon.alt = "Menu"
      mobileMenu.classList.add("hidden")
   })
})

document.addEventListener("click", (e) => {
   if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuIcon.src = "image/menu.svg"
      menuIcon.alt = "Menu"
      mobileMenu.classList.add("hidden")
   }
})
