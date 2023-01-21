import React from "react";
import Badge from 'react-bootstrap/Badge';


function Stats (props) {
    return (
        <div>
            <div style={ {marginLeft: "25%", height: "170px", width: "250px", backgroundColor: "white",
            borderRadius: "18px"} }>
                <p style={ {fontSize: "30px", color: "black", fontFamily: "Alfa Slab One", 
                textAlign: "center"} }>
                    {props.textOne} <Badge bg="light" style={{color: "black", weight: "bold", fontSize: "45px"}}>{props.number}</Badge> {props.textTwo}
                </p>
            </div>
        </div>
    );
}

export default Stats;