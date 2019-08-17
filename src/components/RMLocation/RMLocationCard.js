import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function RMLocationCard(props) {
  return (
    <Card>
      <Card.Content header={props.spot.name} />
      <Card.Content description={props.spot.dimension} />
    </Card>
  )
}