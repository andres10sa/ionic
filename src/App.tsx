import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivity from "./pages/AddActivity/AddActivity";
import { bodyOutline,newspaperOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="last-app">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Schedule App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/all-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={bodyOutline} />
                <IonLabel>All Activities</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem
                routerLink="/add-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={newspaperOutline} />
                <IonLabel>Add Activitiy</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="last-app">
        <Route exact path="/all-activities" component={AllActivities} />
        <Route exact path="/add-activity" component={AddActivity} />
        <Redirect to="/all-activities" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
