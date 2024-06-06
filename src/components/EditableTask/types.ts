import type { TToDo_Item } from '../ToDoItem/types';

export interface IProps_EditableTask {
    item?: TToDo_Item;
    indeterminate?: boolean;
    isAllChecked?: boolean;
    onChangeChecked?: () => void;
    onEdit: (params: { desc: string; id?: string }) => void;
}
