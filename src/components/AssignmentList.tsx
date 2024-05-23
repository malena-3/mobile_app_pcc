import {
    IonItem,
    IonItemSliding,
    IonLabel
} from '@ionic/react';
import { Canvas } from '../data/canvas';
import './AssignmentList.css';
import { format, isToday, isTomorrow, parseISO } from 'date-fns';

function formatDueDate(dueDateString: string): string {
    const dueDate = parseISO(dueDateString);
    const timeString = format(dueDate, 'h:mm a');

    if (isToday(dueDate)) {
        return `Due Today at ${timeString}`;
    } else if (isTomorrow(dueDate)) {
        return `Due Tomorrow at ${timeString}`;
    } else {
        return `${format(dueDate, 'd MMM')} at ${timeString}`;
    }
}

interface AssignmentListProps {
    assignment: Canvas;
    getColorForCourse: (courseName: string) => string;
}

const AssignmentList: React.FC<AssignmentListProps> = ({ assignment, getColorForCourse }) => {
    const color = getColorForCourse(assignment.course);
    const dueDateFormatted = formatDueDate(assignment.dueDate);

    return (
        <IonItemSliding key={assignment.id}>
            <IonItem routerLink={`/assignment/${assignment.id}`} detail={false}>
                <IonLabel className="ion-text-wrap ion-padding-horizontal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h2 style={{ color: color, fontWeight: 500 }}>{assignment.course}</h2>
                        <h3>{assignment.title}</h3>
                    </div>
                    <div style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>
                        <p>{dueDateFormatted}</p>
                    </div>
                </IonLabel>
            </IonItem>
        </IonItemSliding >

    );
};

export default AssignmentList;
