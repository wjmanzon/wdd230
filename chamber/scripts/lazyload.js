function callback(entries, observer) {
  entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
          const image = entry.target
      const src = image.getAttribute('data-src')
      image.setAttribute('src', src)
      image.onload = () => {
          image.removeAttribute("data-src");
      }
      observer.unobserve(image)
      }
  })
}

const observer = new IntersectionObserver(callback)

const images = document.querySelectorAll('img[data-src]')
images.forEach(image => {
  observer.observe(image)
})