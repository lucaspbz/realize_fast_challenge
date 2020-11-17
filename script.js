window.addEventListener('load', () => {
    const form = document.getElementById('form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const columns = document.getElementById('columns').value
        const rows = document.getElementById('row').value

        const quantityOfDivs = columns * rows

        const rectangle = document.getElementById('rectangle')

        rectangle.innerHTML = ''
        rectangle.setAttribute('style', `height: 80%;display: grid;grid-template-columns: repeat(${columns},auto);background-color: #2196F3;`)

        for (let i = 0; i < quantityOfDivs; i++) {
            rectangle.innerHTML = rectangle.innerHTML + '<div>'
        }

    }
    )
}
)

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target.value)
}