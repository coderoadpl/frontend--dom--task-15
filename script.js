(function () {

    const offset = 50

    function onWindowScroll(event) {

        const navbar = document.querySelector('.navbar')
        const square = document.querySelector('.square')

        const viewportHeight = window.innerHeight

        const squarePosition = square.getBoundingClientRect()

        const squareBottom = squarePosition.bottom
        const squareTop = squarePosition.top

        if (squareBottom < offset) {
            navbar.innerText = 'Square is out (above) of viewport'
        } else if (squareTop > viewportHeight) {
            navbar.innerText = 'Square is out (below) of viewport'
        } else {
            navbar.innerText = 'Square is in the viewport'
        }

    }

    onWindowScroll()
    window.addEventListener(
        'scroll',
        onWindowScroll
    )

})()