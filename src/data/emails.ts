export interface Email {
    id: number;
    from: string;
    subject: string;
    message: string;
    profile: string;
    date: string;

    //booleans
    starred?: boolean;
    draft?: boolean;
    sent?: boolean;
    trash?: boolean;
    to?: boolean;

}

const emails: Email[] = [
    {
        id: 0,
        from: 'Matt Chorsey',
        subject: 'New event: Trip to Vegas',
        message: 'Hey, I just wanted to let you know that I have a trip to Vegas coming up.',
        profile: 'https://randomuser.me/api/portraits',
        date: 'Monday',

        starred: true,
        draft: false,
        sent: false,
        trash: false
    },
    {
        id: 1,
        from: 'Lauren Ruthford',
        subject: 'Long time no chat',
        message: 'Hey, we haven\'t talked in a while. How have you been?',
        profile: 'https://randomuser.me/api/portraits',
        date: '05/03/24',

        starred: false,
        draft: true,
        sent: false,
        trash: false
    },
    {
        id: 2,
        from: 'Jordan Firth',
        subject: 'Report Results',
        message: 'Hey, I just wanted to let you know that the report results are in.',
        profile: 'https://randomuser.me/api/portraits',
        date: '04/13/24',

        starred: false,
        draft: false,
        sent: true,
        trash: false
    },
    {
        id: 3,
        from: 'Bill Thomas',
        subject: 'The situation',
        message: 'Hey, I just wanted to let you know about the situation.',
        profile: 'https://randomuser.me/api/portraits',
        date: '03/27/24',

        starred: false,
        draft: false,
        sent: false,
        trash: true
    },
    {
        id: 4,
        from: 'Joanne Pollan',
        subject: 'Updated invitation: Swim lessons',
        message: 'Hey, I just wanted to let you know that I have updated the invitation for the swim lessons.',
        profile: 'https://randomuser.me/api/portraits',
        date: '02/15/24',

        starred: false,
        draft: true,
        sent: false,
        trash: true
    },
    {
        id: 5,
        from: 'Andrea Cornerston',
        subject: 'Last minute ask',
        message: 'Hey, I just wanted to let you know that I have a last minute ask.',
        profile: 'https://randomuser.me/api/portraits',
        date: '12/09/23',

        starred: true,
        draft: false,
        sent: true,
        trash: false
    },
    {
        id: 6,
        from: 'Moe Chamont',
        subject: 'Family Calendar - Version 1',
        message: 'Hey, I just wanted to let you know that I have a new version of the family calendar.',
        profile: 'https://randomuser.me/api/portraits',
        date: '10/28/23',

        starred: true,
        draft: true,
        sent: false,
        trash: false
    },
    {
        id: 7,
        from: 'Kelly Richardson',
        subject: 'Placeholder Headshots',
        message: 'Hey, I just wanted to let you know that I have some placeholder headshots.',
        profile: 'https://randomuser.me/api/portraits',
        date: '08/28/23',

        starred: false,
        draft: false,
        sent: false,
        trash: true
    }
];

export const getEmails = () => emails;

export const getEmail = (id: number) => emails.find(m => m.id === id);
