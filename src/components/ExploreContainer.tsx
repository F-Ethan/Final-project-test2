import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider
} from '@ionic/react';

import React from 'react';
import './ExploreContainer.css';
import MenuItems from './MenuItems';
import ContactPage from './ContactPage'


interface ContainerProps {
  name: string;
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if (name === "Menu") {
    return (

      <MenuItems name={name} />
    )
  } else if (name === "Contact Page") {
    return (
      <ContactPage />
    )
  } else {
    return (
      <IonItem> {name}</IonItem>
    )
  }
};

export default ExploreContainer;
