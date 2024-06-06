export type TToDo_Item = {
    description: string;
    checked?: boolean;
    id: string;
};

export interface IProps_ToDoItem extends TToDo_Item {
    onDelete: (id: string) => void;
    onCheck: (id: string) => void;
    onEdit: (params: { desc: string; id?: string }) => void;
}
