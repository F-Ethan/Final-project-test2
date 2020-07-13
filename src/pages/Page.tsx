import { IonButtons, IonContent, IonHeader, IonMenuButton, IonFooter, IonPage, IonTitle, IonToolbar, IonMenuToggle, IonIcon, IonItem, IonButton } from '@ionic/react';
import { keyOutline } from 'ionicons/icons';

import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>




      <IonFooter>
        <IonToolbar>
          <IonTitle>{name}</IonTitle>
          <IonButton slot="end" color="none" size="small">
            <IonMenuToggle menu="end" autoHide={false}>
              <IonItem >
                  <IonIcon slot="end" ios={keyOutline} md={keyOutline}  />                  
              </IonItem>
            </IonMenuToggle>
            
          </IonButton>

          
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Page;
