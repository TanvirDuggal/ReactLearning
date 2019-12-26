import React from 'react'

function functionClick() {

    function clickEvent(){
        alert("Button Clicked")
    }

    return (
        <div>
            <button onClick={() => clickEvent()}> Click Me </button>
        </div>
    )
}

export default functionClick