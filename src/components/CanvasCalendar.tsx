/*

import React, { useRef, useEffect, useState } from 'react';
import { IonDatetime, IonButton } from '@ionic/react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
} from '@ionic/react';
import { arrowUndoOutline } from "ionicons/icons";
import ToolBar_Footer from "../components/ToolBar_Footer";
import CanvasSlideUp from "../components/CanvasSlideUp";
import '../pages/Canvas.css'; // Import your custom CSS file here
import customIcon from "../pages/daveSelfie.jpeg";
import { useHistory } from "react-router-dom";

const assignments = [
    { course: 'ARCH024B', dueDate: '2022-06-03', color: 'tertiary' },
    { course: 'ARCH024B', dueDate: '2022-06-10', color: 'tertiary' },
    { course: 'CS008', dueDate: '2022-06-05', color: 'success' },
    { course: 'MATH05C', dueDate: '2022-06-13', color: 'primary' },
    // Add more assignments here
];

const CanvasCalendar: React.FC = () => {
    const datetime = useRef<null | HTMLIonDatetimeElement>(null);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [filteredAssignments, setFilteredAssignments] = useState(assignments);
    // Define course colors with default values
    const [courseColors, setCourseColors] = useState<{ [key: string]: string }>({
        ARCH024B: 'tertiary',
        CS008: 'success',
        MATH05C: 'primary',
        // Define colors for other courses here
    });

    const history = useHistory();

    useEffect(() => {
        if (!datetime.current) return;

        const filtered = selectedCourse
            ? assignments.filter(assignment => assignment.course === selectedCourse)
            : assignments;

        const dates = filtered.map(assignment => assignment.dueDate);
        setFilteredAssignments(filtered);

        datetime.current.value = dates;
    }, [selectedCourse]);

    useEffect(() => {
        if (!datetime.current) return;

        const updateDots = () => {
            const ionItems = datetime.current?.shadowRoot?.querySelectorAll('ion-item');

            ionItems?.forEach(item => {
                const date = item.getAttribute('data-date');
                item.querySelectorAll('.highlighted-date').forEach(dot => dot.remove());

                if (date) {
                    const assignment = filteredAssignments.find(a => a.dueDate === date);
                    if (assignment) {
                        const dot = document.createElement('div');
                        // Get the color of the selected course
                        const selectedCourseColor = selectedCourse ? courseColors[selectedCourse] : '';
                        dot.classList.add('highlighted-date', `highlight-${selectedCourseColor}`);
                        item.appendChild(dot);
                    }
                }
            });
        }

        // Adding a small delay to ensure DOM is fully rendered
        setTimeout(updateDots, 100);
    }, [filteredAssignments, selectedCourse, courseColors]);


    const handleIconClick = () => {
        history.push('/UserAccount');
    };

    const handleGoBackClick = () => {
        history.push('/Canvas');
    };

    const handleSelectCourse = (course: string) => {
        setSelectedCourse(course === 'All' ? null : course);
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle color="light">
                        Canvas
                        <IonButton onClick={handleGoBackClick} fill="clear" color="light">
                            <IonIcon icon={arrowUndoOutline} style={{ marginLeft: '100px', fontSize: '25px' }} />
                        </IonButton>

                        <IonButton onClick={handleIconClick} fill='clear'>
                            <img src={customIcon} alt="Custom Icon" style={{ marginLeft: '10px', width: '45px', height: '45px', borderRadius: '50%' }} />
                        </IonButton>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>

                <IonDatetime ref={datetime} presentation="date" multiple={true}
                             className="full-screen-datetime">
                </IonDatetime>


                <div className="button-wrapper">
                    <IonButton id="open-modal" expand="block" color="warning" className="custom-button">
                        My Assignments
                    </IonButton>
                </div>

                <CanvasSlideUp onSelectCourse={handleSelectCourse} />
            </IonContent>
            <ToolBar_Footer />
        </IonPage>
    );
};

export default CanvasCalendar;
*/
import React, { useRef, useEffect, useState } from 'react';
import { IonDatetime, IonButton } from '@ionic/react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
} from '@ionic/react';
import { arrowUndoOutline } from "ionicons/icons";
import ToolBar_Footer from "../components/ToolBar_Footer";
import CanvasSlideUp from "../components/CanvasSlideUp";
import '../pages/Canvas.css'; // Import your custom CSS file here
import customIcon from "../pages/daveSelfie.jpeg";
import { useHistory } from "react-router-dom";

const assignments = [
    { course: 'ARCH024B', dueDate: '2022-06-03', color: 'tertiary' },
    { course: 'ARCH024B', dueDate: '2022-06-10', color: 'tertiary' },
    { course: 'CS008', dueDate: '2022-06-05', color: 'success' },
    { course: 'MATH05C', dueDate: '2022-06-13', color: 'primary' },
    // Add more assignments here
];

const CanvasCalender: React.FC = () => {
    const datetime = useRef<null | HTMLIonDatetimeElement>(null);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [filteredAssignments, setFilteredAssignments] = useState(assignments);
    // Define course colors with default values
    const [courseColors, setCourseColors] = useState<{ [key: string]: string }>({
        ARCH024B: 'tertiary',
        CS008: 'success',
        MATH05C: 'primary',
        // Define colors for other courses here
    });

    const history = useHistory();

    useEffect(() => {
        if (!datetime.current) return;

        const filtered = selectedCourse
            ? assignments.filter(assignment => assignment.course === selectedCourse)
            : assignments;

        const dates = filtered.map(assignment => assignment.dueDate);
        setFilteredAssignments(filtered);

        datetime.current.value = dates;
    }, [selectedCourse]);

    useEffect(() => {
        if (!datetime.current) return;

        const updateDots = () => {
            const ionItems = datetime.current?.shadowRoot?.querySelectorAll('ion-item');

            ionItems?.forEach(item => {
                const date = item.getAttribute('data-date');


                if (date) {
                    const assignment = filteredAssignments.find(a => a.dueDate === date);
                    if (assignment) {
                        let dot = item.querySelector('.highlighted-date');
                        if (!dot) {
                            dot = document.createElement('div');
                            dot.classList.add('highlighted-date');
                            item.appendChild(dot);
                        }
                        // Update the color of the dot based on the selected course
                        const selectedCourseColor = selectedCourse ? courseColors[selectedCourse] : '';
                        dot.className = `highlighted-date highlight-${selectedCourseColor}`;
                    }
                }
            });
        }

        // Adding a small delay to ensure DOM is fully rendered
        setTimeout(updateDots, 100);
    }, [filteredAssignments, selectedCourse, courseColors]);


    const handleIconClick = () => {
        history.push('/UserAccount');
    };

    const handleGoBackClick = () => {
        history.push('/Canvas');
    };

    const handleSelectCourse = (course: string) => {
        setSelectedCourse(course === 'All' ? null : course);
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle color="light">
                        Canvas
                        <IonButton onClick={handleGoBackClick} fill="clear" color="light">
                            <IonIcon icon={arrowUndoOutline} style={{ marginLeft: '100px', fontSize: '25px' }} />
                        </IonButton>

                        <IonButton onClick={handleIconClick} fill='clear'>
                            <img src={customIcon} alt="Custom Icon" style={{ marginLeft: '10px', width: '45px', height: '45px', borderRadius: '50%' }} />
                        </IonButton>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>

                <IonDatetime ref={datetime} presentation="date" multiple={true}
                             className="full-screen-datetime">
                </IonDatetime>


                <div className="button-wrapper">
                    <IonButton id="open-modal" expand="block" color="warning" className="custom-button">
                        My Assignments
                    </IonButton>
                </div>

                <CanvasSlideUp onSelectCourse={handleSelectCourse} />
            </IonContent>
            <ToolBar_Footer />
        </IonPage>
    );
};

export default CanvasCalender;
