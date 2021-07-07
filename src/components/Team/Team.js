import React from 'react';
import './Team.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Team = (props) => {
    const {name,price,img} = props.football;
    const handleTeam = props.handleTeam;
    
    return (
    <div className="team-container">
            
            <Card  className="header-card">
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Button variant="primary" onClick={()=>handleTeam(props.football)} ><FontAwesomeIcon icon={faCheck} />Hire Player</Button>
           </Card.Body>
            </Card>
         </div>
    );
};

export default Team;