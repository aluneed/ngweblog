export interface SidenavListItem {
    name: string;
    path: string;
}

export const sidenavList: SidenavListItem[] = [
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