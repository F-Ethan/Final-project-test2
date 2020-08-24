import {
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonItemDivider
  } from '@ionic/react';

import React from 'react';


interface ContainerProps {
    name: string;
  }


const MenuItems: React.FC<ContainerProps> = ({ name }) => {

return(
<IonContent>
<IonList>

<IonItem>{name}</IonItem>



   


{/* <IonMenu contentId="main" type="overlay" >
<IonContent>
<IonList id="inbox-list">
  <IonListHeader>That Food Truck</IonListHeader>
  <IonNote>ThatFoodTruck@inbox.com</IonNote>
  {appPages.map((appPage, index) => {
    return (
      <IonMenuToggle key={index} autoHide={false}>
        <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={true}>
          <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon}  />
          <IonLabel>{appPage.title}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    );
  })}
</IonList> */}

  <IonItemDivider>
    <IonLabel>
      Burittos
</IonLabel>
  </IonItemDivider>

  <IonItem><IonLabel>B1</IonLabel></IonItem>
  <IonItem><IonLabel>B2</IonLabel></IonItem>
  <IonItem><IonLabel>B3</IonLabel></IonItem>
  <IonItem><IonLabel>B4</IonLabel></IonItem>
  <IonItem><IonLabel>B5</IonLabel></IonItem>
</IonList>
</IonContent>

);
}


export default MenuItems;