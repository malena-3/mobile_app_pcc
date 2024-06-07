//
// import React, { useState } from 'react';
// import { IonPage, IonContent, IonButton, IonCard } from '@ionic/react';
//
// import App from "../App";
// import { createRoot } from "react-dom/client";
// import './OnboardingProcess.css';
//
//
// const OnboardingScreen: React.FC = () => {
//     const [step, setStep] = useState(1);
//     const totalSteps = 4;
//
//     const handleNextStep = () => {
//         if (step < totalSteps) {
//             setStep(step + 1);
//         } else {
//             // Handle navigation to main app
//             const container = document.getElementById('root');
//             const root = createRoot(container!);
//             root.render(
//                 <React.StrictMode>
//                     <App />
//                 </React.StrictMode>
//             );
//         }
//     };
//
//     const getBackgroundImage = () => {
//         switch (step) {
//             case 1:
//                 return '/App-StartingSlide.jpg';
//             case 2:
//                 return 'url(/path-to-your-image2.jpg)';
//             case 3:
//                 return 'url(/path-to-your-image3.jpg)';
//             case 4:
//                 return 'url(/path-to-your-image4.jpg)';
//             default:
//                 return 'url(/default-background.jpg)';
//         }
//     };
//
//     return (
//         <IonPage>
//             <IonContent fullscreen style={{ backgroundImage: getBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center' }}>
//                 <IonCard className="hover-card">
//                     <div className="center-text">
//                         <h1>PCC Mobile App</h1>
//                         {step === 1 && (
//                             <>
//                                 <p>This is the first step of the onboarding.</p>
//                                 <p>Highlight some features here...</p>
//                             </>
//                         )}
//                         {step === 2 && (
//                             <>
//                                 <p>This is the second step of the onboarding.</p>
//                                 <p>Highlight some other features here...</p>
//                             </>
//                         )}
//                         {step === 3 && (
//                             <>
//                                 <p>This is the second to last step of the onboarding.</p>
//                                 <p>Highlight final features here...</p>
//                             </>
//                         )}
//                         {step === totalSteps && (
//                             <>
//                                 <p>This is the last step of the onboarding.</p>
//                                 <p>Highlight final features here...</p>
//                             </>
//                         )}
//                         <IonButton onClick={handleNextStep} className="custom-button">
//                             {step === 1 ? 'Start' : step === totalSteps ? 'Get Started' : '>'}
//                         </IonButton>
//                     </div>
//                 </IonCard>
//             </IonContent>
//         </IonPage>
//     );
// };
//
// export default OnboardingScreen;
//
import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonCard } from '@ionic/react';
import App from "../App";
import { createRoot } from "react-dom/client";
import './OnboardingProcess.css';
import customIcon from '../components/PCC.jpg'; // Import the custom icon


import startingSlide from '../pages/daveSelfie.jpeg';
// import image2 from './pet.png';
// import image3 from './components/path-to-your-image3.jpg';
// import image4 from './components/path-to-your-image4.jpg';
// import defaultBackground from './components/default-background.jpg';

const OnboardingScreen: React.FC = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const handleNextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            // Handle navigation to main app
            const container = document.getElementById('root');
            const root = createRoot(container!);
            root.render(
                //<React.StrictMode>
                <App />
                //</React.StrictMode>
            );
        }
    };

    const getBackgroundImage = () => {
        switch (step) {
            case 1:
                return `url(${startingSlide})`;
            // case 2:
            //     return `url(${image2})`;
            // case 3:
            //     return `url(${image3})`;
            // case 4:
            //     return `url(${image4})`;
            // default:
            //     return `url(${defaultBackground})`;
            default:
                return '';
        }
    };

    return (
        <IonPage>
            <IonContent
                fullscreen
                style={{
                    backgroundImage: getBackgroundImage(),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <IonCard className="hover-card">
                    <div className="center-text">
                        {/*<h1>PCC Mobile App</h1>*/}
                        <img src={customIcon} alt="Custom Icon"
                             style={{width: '225px', height: '125px'}}/>

                        {step === 1 && (
                            <>
                                <h1>Welcome to the PCC App!</h1>
                                <p>Let's take a tour of the app.</p>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <p>This is the second step of the onboarding.</p>
                                <p>Highlight some other features here...</p>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <p>This is the second to last step of the onboarding.</p>
                                <p>Highlight final features here...</p>
                            </>
                        )}
                        {step === totalSteps && (
                            <>
                                <p>This is the last step of the onboarding.</p>
                                <p>Highlight final features here...</p>
                            </>
                        )}
                        {/*<IonButton onClick={handleNextStep} className="custom-button">*/}
                        {/*    {step === 1 ? 'Start' : step === totalSteps ? 'Get Started' : '>'}*/}
                        {/*</IonButton>*/}

                        <IonButton
                            onClick={handleNextStep}
                            className={`custom-button ${step === 1 ? 'thick-font' : ''}`}
                        >
                            {step === 1 ? 'Start' : step === totalSteps ? 'Get Started' : '>'}
                        </IonButton>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default OnboardingScreen;
