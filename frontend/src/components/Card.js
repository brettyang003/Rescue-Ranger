import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
    return (
        <Card style={{ width: '15rem', marginLeft:"20%", marginTop:"10%" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title style={{fontSize: "25px", fontFamily: "Oswald", weight: "bold"}}>{props.name}</Card.Title>
                <Card.Text style={{fontSize: "15px", fontFamily: "Oswald"}}>
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;