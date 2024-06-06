import { useEffect, useMemo, useState } from 'react';
import { Flex } from 'antd';
import { v4 } from 'uuid';
import { getTasks, setTasksToLocalStorage } from '../../helpers';
import ToDoItem from '../ToDoItem';
import EditableTask from '../EditableTask';
import Footer from '../Footer';

import type { IProps_EditableTask } from '../EditableTask/types';
import type { IProps_ToDoItem, TToDo_Item } from '../ToDoItem/types';
import type { TFilter } from '../Footer/types';

import './styles.scss';

const filters: Record<TFilter, (items: TToDo_Item[]) => TToDo_Item[]> = {
    All: (items) => items,
    Active: (items) => items.filter((item) => !item.checked),
    Complited: (items) => items.filter((item) => item.checked),
};

const ToDo = () => {
    const [tasks, setTasks] = useState<TToDo_Item[]>([]);
    const [filter, setFilter] = useState<TFilter>('All');

    useEffect(() => {
        setTasks(getTasks() || []);
    }, []);

    useEffect(() => {}, [tasks]);

    const indeterminate = useMemo(() => tasks.some((el) => el.checked), [tasks]);
    const isAllChecked = useMemo(() => !!tasks.length && tasks.every((el) => el.checked), [tasks]);

    const handleAdd: IProps_EditableTask['onEdit'] = ({ desc }) => {
        desc &&
            setTasks((prev) => {
                const newTasks = [...prev, { description: desc, id: v4() }];
                setTasksToLocalStorage(newTasks);
                return newTasks;
            });
    };

    const handleCheck = (id: string) => {
        setTasks((prev) => {
            const newTasks = prev.map((el) =>
                el.id === id ? { ...el, checked: !el.checked } : el
            );
            setTasksToLocalStorage(newTasks);
            return newTasks;
        });
    };

    const handleDelete = (id: string) => {
        setTasks((prev) => {
            const newTasks = prev.filter((el) => el.id !== id);
            setTasksToLocalStorage(newTasks);
            return newTasks;
        });
    };

    const handleEdit: IProps_ToDoItem['onEdit'] = ({ desc, id }) => {
        desc &&
            setTasks((prev) => {
                const newTasks = prev.map((el) =>
                    el.id === id ? { ...el, description: desc } : el
                );
                setTasksToLocalStorage(newTasks);
                return newTasks;
            });
    };

    const handleDeleteComplited = () => {
        setTasks((prev) => {
            const newTasks = prev.filter((el) => !el.checked);
            setTasksToLocalStorage(newTasks);
            return newTasks;
        });
    };

    const handleFilter = (filter: TFilter) => {
        setFilter(filter);
    };

    const handleChangeChecked = () => {
        setTasks((prev) => prev.map((el) => ({ ...el, checked: !isAllChecked })));
    };

    const filterItems: TToDo_Item[] = filters[filter](tasks);

    return (
        <Flex vertical className='todo-container'>
            <EditableTask
                indeterminate={indeterminate}
                isAllChecked={isAllChecked}
                onEdit={handleAdd}
                onChangeChecked={handleChangeChecked}
            />
            <ul className='tasks-list'>
                <li></li>
                {filterItems.map((el) => (
                    <li key={el.id}>
                        <ToDoItem
                            {...el}
                            onCheck={handleCheck}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    </li>
                ))}
            </ul>
            <Footer
                filter={filter}
                count={tasks.length}
                onDeleteComplited={handleDeleteComplited}
                onFilter={handleFilter}
            />
        </Flex>
    );
};

export default ToDo;
