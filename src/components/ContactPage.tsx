import {
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonTextarea
} from '@ionic/react';

import React, { Component } from 'react'

export class ContactPage extends Component {
    render() {
        return (


            <IonContent>
                <IonHeader>
                    <IonToolbar >
                        <IonTitle>Send Us a Email </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>

                    <IonItem>
                        <IonLabel position="floating" >Your Name</IonLabel>
                        <IonInput clearInput ></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating" >Your Email</IonLabel>
                        <IonInput clearInput ></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Your Message</IonLabel>
                        <IonTextarea rows={6}></IonTextarea>
                    </IonItem>


                </IonList>
            </IonContent>


        )
    }
}

export default ContactPage
