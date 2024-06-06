import { type ChangeEventHandler, useState } from 'react';
import { Button, Checkbox, Input } from 'antd';
import { DownOutlined, EnterOutlined } from '@ant-design/icons';
import type { IProps_EditableTask } from './types';
import './styles.scss';

const EditableTask = ({
    indeterminate,
    isAllChecked,
    item,
    onEdit,
    onChangeChecked,
}: IProps_EditableTask) => {
    const [desc, setDesc] = useState(item?.description ?? '');

    const handleAdd = () => {
        onEdit({ desc: desc, id: item?.id });
        if (!item) setDesc('');
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
        setDesc(value);
    };

    return (
        <Input
            autoFocus
            className='input-desc'
            prefix={
                item ? (
                    <DownOutlined />
                ) : (
                    <Checkbox
                        indeterminate={!isAllChecked && indeterminate}
                        checked={isAllChecked}
                        onChange={onChangeChecked}
                    />
                )
            }
            placeholder='What needs to be done?'
            value={desc}
            variant='borderless'
            onPressEnter={handleAdd}
            onChange={handleChange}
            suffix={<Button type='text' icon={<EnterOutlined />} onClick={handleAdd} />}
        />
    );
};

export default EditableTask;
