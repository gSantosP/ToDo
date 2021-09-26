function renderLoadAnimation(){
    
    var load = document.createElement("div")
    load.id = "load"
    load.style.backgroundColor = "white"
    load.style.position = "fixed"
    load.style.height = "100vh"
    load.style.width = "100vw"
    load.style.top = "0"
    load.style.zIndex = "10"
    load.style.display = "flex"
    load.style.alignItems = "center"
    load.style.justifyContent = "center"
    

    var img = document.createElement("div")
    img.id = "dragao-spin"
    img.style.backgroundSize = "cover"
    img.style.height = "100px"
    img.style.width  = "100px"
    img.style.transform = "rotate(360deg)"
    img.style.animation = "rotate 2.5s infinite linear"
    img.style.animation = "spin .9s infinite linear"
    load.appendChild(img)


    document.body.appendChild(load)

    setTimeout(_=>{

        document.body.removeChild(load)
    }, 1500)



}