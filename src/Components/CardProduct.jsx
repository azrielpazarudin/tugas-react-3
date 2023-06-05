import React from "react";


function CardProduct(props) {
    return (
        <>
            <div style={{
                width:'300px',
                padding:"5",
                textAlign:"center",
                backgroundColor:"brown",
                borderRadius:"6",
                fontFamily:"monospace",
                color : 'white',
                fontSize : '18px',
                fontWeight : 'bold',
                border : '10px solid white'
            }} onClick={props.myAlert}>
                <br/>
                <img src={props.imgUrl} style={{widt
                : '500px',height : '250px'}} />
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
        </>
    )
}
export default CardProduct