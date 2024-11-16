const bodyElement = document.querySelector("body")

bodyElement.addEventListener("mousemove", (e) => {
    const xCord = e.offsetX
    const yCord = e.offsetY

    // console.log(xCord, yCord)

    const spanElement = document.createElement("span")

    spanElement.style.left = `${xCord}px`
    spanElement.style.top = `${yCord}px`

    const size = Math.random() * 100

    spanElement.style.width = `${size}px`
    spanElement.style.height = `${size}px`

    bodyElement.appendChild(spanElement)

    setTimeout(() => {
        spanElement.remove()
    }, 3000);
})