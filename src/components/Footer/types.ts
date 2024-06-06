export interface IProps_Footer {
    filter: TFilter;
    count: number;
    onFilter: (filter: TFilter) => void;
    onDeleteComplited: () => void;
}

export type TFilter = 'All' | 'Active' | 'Complited';
