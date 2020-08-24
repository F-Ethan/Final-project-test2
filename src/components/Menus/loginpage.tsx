
import {
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
  } from '@ionic/react';
  
  
  import React from 'react';
  import './Menu.css';
  




const Login: React.FC = () => {

    const [text] = React.useState<string>();

    return (

        <IonMenu side="end" type="overlay" menuId="login" contentId="main">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle>Admin Login</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
        <IonList>

        <IonItem>
            <IonLabel position="floating" >Username</IonLabel>
            <IonInput value={text} clearInput ></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={text} clearInput></IonInput>
        </IonItem>

          {/* <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem> */}
        </IonList>
      </IonContent>
        </IonMenu>



);
};

export default Login;