export interface Canvas {
    id: number;
    title: string;
    course: string;
    dueDate: string;
}

const canvas: Canvas[] = [
    {
        id: 1,
        title: 'Unit 7 Assignment 1',
        course: 'Spr24 MATH 005C #36418 MULTIVARIABLE CALCULUS III',
        dueDate: '2024-05-16T10:00:00',
    },
    {
        id: 2,
        title: 'Graphs',
        course: 'Spr24 CS 008 #36335 DATA STRUCTURES C++',
        dueDate: '2024-05-21T10:00:00',
    },
    {
        id: 3,
        title: 'Frank Lloyd Wright Analysis',
        course: 'Spr24 ARCH 024B 38799',
        dueDate: '2024-05-17T10:00:00',
    },
    {
        id: 4,
        title: 'Unit 3 Assignment 2',
        course: 'Spr24 MATH 005C #36418 MULTIVARIABLE CALCULUS III',
        dueDate: '2024-05-22T10:00:00',
    },
    {
        id: 5,
        title: 'Linked List Animation',
        course: 'Spr24 CS 008 #36335 DATA STRUCTURES C++',
        dueDate: '2024-05-29T10:00:00',
    },
];

export const getAssigments = () => canvas;

export const getAssigment = (id: number) => canvas.find(m => m.id === id);
