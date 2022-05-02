export interface NavListItem {
    name: string;
    path: string;
}

export const navList: NavListItem[] = [
    {
        name: 'Articles',
        path: '/articles'
    },
    {
        name: 'Essays',
        path: '/essays',
    },
    {
        name: 'Notes',
        path: '/notes',
    },
    {
        name: 'Thoughts',
        path: '/thoughts',
    },
    {
        name: 'Diary',
        path: '/diary',
    }
];