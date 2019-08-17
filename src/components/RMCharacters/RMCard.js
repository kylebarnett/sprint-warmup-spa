import React from 'react';
import '../../App.css';
import { Header, Icon, Image, Card } from 'semantic-ui-react';

export default function RMCard(props) {
  return (
    <div className="rm-card-container">
      <Card>
        <Image src={props.friend.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.friend.name}</Card.Header>
          <Card.Meta>{props.friend.species}</Card.Meta>
          <Card.Description>
            {props.friend.status}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
      </a>
        </Card.Content>
      </Card>
    </div>
  )
}