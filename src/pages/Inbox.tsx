import { useEffect, useState } from 'react';
import { Email, getEmails } from '../data/emails';
import { useHistory } from 'react-router-dom';

import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonList,
    IonMenuButton,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    IonNavLink,
    useIonViewWillEnter
} from '@ionic/react';
import EmailList from '../components/EmailList';
import './Inbox.css';
import { arrowBack, searchOutline, fingerPrintOutline } from 'ionicons/icons';
import ToolBar_Footer from "../components/ToolBar_Footer";
import customIcon from '../pages/daveSelfie.jpeg'; // Import the custom icon



const Inbox: React.FC = () => {
    const [emails, setEmails] = useState<Email[]>([]); // State to hold our emails
    const [allEmails, setAllEmails] = useState<Email[]>([]); // State to hold all emails ( used for filtering in search )
    const [searchText, setSearchText] = useState(''); // State to hold the search text
    const [showSearch, setShowSearch] = useState(false); // State to toggle the search bar

    const history = useHistory(); // Use useHistory hook


    useIonViewWillEnter(() => {
        const mails = getEmails();
        setAllEmails(mails);
        setEmails(mails);
    }); // This hook will run when the component is mounted

    useEffect(() => {
        if (searchText.trim() === '') {
            setEmails(allEmails);
        } else {
            const filteredEmails = allEmails.filter(email => {
                return email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
                    email.from.toLowerCase().includes(searchText.toLowerCase()) ||
                    email.message.toLowerCase().includes(searchText.toLowerCase());
            });
            setEmails(filteredEmails);
        }
    }, [searchText, allEmails]); // This hook will run when the searchText or allEmails state changes

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    }; // This function will run when the user pulls down to refresh the page


    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchText('');
        }
    }; // This function will toggle the search bar


    const handleDelete = (emailId: number) => {
        console.log('Deleting email with ID:', emailId);
    };

    const handleArchive = (emailId: number) => {
        console.log('Archiving email with ID:', emailId);
    };

    const handleIconClick = () => {
        history.push('/UserAccount');
    }

    return (
        <IonPage id="main">
            <IonHeader>
                <IonToolbar color={'danger'}>
                    {/*if showSearch is true, show the search bar, else show title and icon to toggle search*/}
                    {showSearch ? (
                        <>
                            <IonButtons slot="start">
                                <IonButton onClick={handleSearchToggle}>
                                    <IonIcon icon={arrowBack}/>
                                </IonButton>
                            </IonButtons>
                            <IonSearchbar
                                value={searchText}
                                onIonChange={(e) => setSearchText(e.detail.value!)}
                                placeholder="PCC"
                            />
                        </>
                    ) : (
                        <>
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonTitle>Inbox</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={handleSearchToggle}>
                                    <IonIcon icon={searchOutline}/>
                                </IonButton>


                                <IonButton onClick={handleIconClick}>
                                    <img src={customIcon} alt="Custom Icon" style={{ width: '45px', height: '45px', borderRadius: '50%' }}/>
                                </IonButton>




                            </IonButtons>
                        </>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Inbox
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent scrollY={false}>

                    <div className="ion-content-scroll-host ion-padding">

                        {/* Our list of emails ( each email is an EmailList component  */}
                        <IonList lines='full' className='ion-no-padding'>
                            {emails.map(email => <EmailList key={email.id} email={email} handleDelete={handleDelete}
                                                            handleArchive={handleArchive}/>)}
                        </IonList>
                    </div>
                </IonContent>
            </IonContent>
            <ToolBar_Footer/>
        </IonPage>


    );
};

export default Inbox;
