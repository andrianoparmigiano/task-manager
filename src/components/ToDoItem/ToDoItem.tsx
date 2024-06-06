import { Button, Checkbox, Flex } from 'antd';
import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import EditableTask from '../EditableTask';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import type { IProps_ToDoItem } from './types';

import './styles.scss';

const ToDoItem = ({ checked, description, id, onDelete, onCheck, onEdit }: IProps_ToDoItem) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        onDelete(id);
    };

    const handleCheck: () => void = () => {
        onCheck(id);
    };

    const handleChangeIsEditing = () => setIsEditing((prev) => !prev);

    const handleEdit: IProps_ToDoItem['onEdit'] = (params) => {
        onEdit(params);
        setIsEditing(false);
    };

    const ref = useOutsideClick<HTMLDivElement>(handleChangeIsEditing);

    const className = ['todo-item', checked && 'checked'].filter((el) => el).join(' ');

    return !isEditing ? (
        <Checkbox className={className} checked={checked} onChange={handleCheck}>
            <Flex justify='space-between' align='center'>
                <span className='desc'>{description}</span>
                <div>
                    <Button type='text' icon={<DeleteFilled />} onClick={handleDelete} />
                    <Button type='text' icon={<EditOutlined />} onClick={handleChangeIsEditing} />
                </div>
            </Flex>
        </Checkbox>
    ) : (
        <div ref={ref}>
            <EditableTask item={{ checked, description, id }} onEdit={handleEdit} />
        </div>
    );
};

export default ToDoItem;
