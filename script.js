function Test () {
    const div = document.createElement('div');
    div.innerText = "none"

    document.body.append(div)

    const hoo = document.querySelector('.hoo')
    document.body.appendChild(hoo)
}
    
Test();