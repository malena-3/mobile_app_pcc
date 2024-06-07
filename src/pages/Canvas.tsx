
import React, { useState, useRef } from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonDatetime,
    IonHeader,
    IonIcon,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    IonItem,
    useIonViewWillEnter,
} from "@ionic/react";
import { calendarOutline, optionsOutline } from "ionicons/icons";
import { Canvas, getAssigments } from "../data/canvas";
import AssignmentList from "../components/AssignmentList";
import './Canvas.css';
import ToolBar_Footer from "../components/ToolBar_Footer";
import { useHistory } from "react-router-dom";
import customIcon from "./daveSelfie.jpeg";

type CourseKey = 'MATH' | 'CS' | 'ARCH';
type CourseColor = 'blue' | 'green' | 'purple' | 'black';

const CanvasPage: React.FC = () => {
    const [assignments, setAssignments] = useState<Canvas[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<string>('All Courses');
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | string[]>([]);
    const datetime = useRef<null | HTMLIonDatetimeElement>(null);
    const history = useHistory();

    const [selectedFilter, setSelectedFilter] = useState<string>('Option1');

    const handleFilterChange = (value: string) => {
        setSelectedFilter(value);
        if (value === '') {
            setSelectedCourse('All Courses');
        }
    };

    useIonViewWillEnter(() => {
        const assignments_fetch = getAssigments();
        setAssignments(assignments_fetch);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const handleDateChange = (value: string | string[]) => {
        setSelectedDate(value);
    };

    const handleCalenderClick = () => {
        history.push('/CanvasCalendar');
    }

    const handleIconClick = () => {
        history.push('/UserAccount');
    }

    function getColorForCourse(courseName: string): CourseColor {
        const courseColors: Record<CourseKey, CourseColor> = {
            MATH: 'blue',
            CS: 'green',
            ARCH: 'purple'
        };

        const keys = Object.keys(courseColors) as CourseKey[];
        for (const key of keys) {
            if (courseName.includes(key)) {
                return courseColors[key];
            }
        }
        return 'black';
    }

    const filteredAssignments = selectedCourse === 'All Courses'
        ? assignments
        : assignments.filter(a => a.course.includes(selectedCourse));

    const sortedAssignments = filteredAssignments.slice().sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        const isDueTomorrowA = dateA.getDate() === new Date().getDate() + 1;
        const isDueTomorrowB = dateB.getDate() === new Date().getDate() + 1;

        const isDueTodayA = dateA.getDate() === new Date().getDate();
        const isDueTodayB = dateB.getDate() === new Date().getDate();

        const isDueYesterdayA = dateB.getDate() === new Date().getDate();

        if (selectedFilter === 'Due Date') {
            // Assignments due tomorrow or today should be at the top
            if (isDueTomorrowA || isDueTodayA) return -1;
            if (isDueTomorrowB || isDueTodayB) return 1;

            // Sort by due date
            return dateA.getTime() - dateB.getTime();
        } else if (selectedFilter === 'Course') {
            // If not filtering by due date, sort alphabetically by course
            return a.course.localeCompare(b.course);
        } else {
            return 0;
        }
    });



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='danger'>
                    <IonTitle slot="start">Canvas</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleCalenderClick} fill="clear" color="light">
                            <IonIcon icon={calendarOutline} style={{ marginLeft: '100px', fontSize: '25px' }} />
                        </IonButton>
                        <IonButton onClick={handleIconClick} fill='clear'>
                            <img src={customIcon} alt="Custom Icon"
                                 style={{ marginLeft: '10px', width: '45px', height: '45px', borderRadius: '50%' }} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonHeader>
                <IonToolbar>
                    <div className="toolbar-flex-container">
                        <IonSelect
                            value={selectedCourse}
                            placeholder="All Courses"
                            interface="popover"
                            className="flex-item"
                            style={{ width: '25%', fontWeight: 'bold', marginLeft: '10px'}}
                            onIonChange={e => setSelectedCourse(e.detail.value)}
                        >
                            <IonSelectOption value="All Courses">All Courses</IonSelectOption>
                            <IonSelectOption value="ARCH 024B">ARCH 024B</IonSelectOption>
                            <IonSelectOption value="CS 008">CS 008</IonSelectOption>
                            <IonSelectOption value="MATH 005C">MATH 005C</IonSelectOption>
                        </IonSelect>

                          <IonList>
                            <IonItem>
                                <IonSelect
                                    toggleIcon={optionsOutline}
                                    style={{marginRight: '5px', marginLeft: '10px', width: '88px', fontWeight: 'bold'}}
                                    onIonChange={e => handleFilterChange(e.detail.value)}
                                >
                                    <IonSelectOption value="Course">Course</IonSelectOption>
                                    <IonSelectOption value="Due Date">Due Date</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                          </IonList>

                    </div>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                {showCalendar ? (
                    <div className="center-calendar">
                        <IonDatetime
                            presentation="date"
                            value={selectedDate}
                            onIonChange={e => handleDateChange(e.detail.value!)}
                        />
                    </div>


                ) : (
                    <IonList lines='full' className='ion-no-padding'>
                        {sortedAssignments.map(assignment => (
                            <AssignmentList
                                key={assignment.id}
                                assignment={assignment}
                                getColorForCourse={getColorForCourse}
                            />
                        ))}
                    </IonList>
                )}
            </IonContent>
            <ToolBar_Footer/>
        </IonPage>
    );
};

export default CanvasPage;
