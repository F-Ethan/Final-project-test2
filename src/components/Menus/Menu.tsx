import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';


import React from 'react';
import { useLocation } from 'react-router-dom';
import { bookmarkOutline, bookOutline, bookSharp, homeOutline, homeSharp, paperPlaneOutline, paperPlaneSharp, listOutline, listSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home Page',
    url: '/page/Home Page',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Menu',
    url: '/page/Menu',
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: 'About',
    url: '/page/About',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Blog',
    url: '/page/Blog',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
  {
    title: 'Contact Page',
    url: '/page/Contact Page',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
];

const labels = ['Family Outing', 'Friends Forge On', 'Note Taking in Class', 'Work Related Stress', 'Traveling Before your Thirty', 'Reminders of Your Age'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>That Food Truck</IonListHeader>
          <IonNote>ThatFoodTruck@inbox.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={true}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Most Popular Blogs</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
