function movieScroll() {
  const container = [...document.querySelectorAll('.movie-container')]
  const prevBtn = [...document.querySelectorAll('.prev-btn')]
  const nextBtn = [...document.querySelectorAll('.next-btn')]
  container.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect()
    let containerWidth = containerDimensions.width

    nextBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth
    })

    prevBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth
    })
  }) 
  
}

movieScroll()