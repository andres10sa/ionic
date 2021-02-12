import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'


export interface AllActivitiesProps {
    
}
 
const AllActivities: React.FC<AllActivitiesProps> = () => {
    return ( 
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>
                         All activities
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                           <IonCol>
                               <h1>All activities work!</h1>
                           </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
     );
}
 
export default AllActivities;