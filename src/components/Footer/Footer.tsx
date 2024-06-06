import { Button, Flex, Tag } from 'antd';
import type { IProps_Footer, TFilter } from './types';

const filters: TFilter[] = ['All', 'Active', 'Complited'];

const Footer = ({ filter, count, onFilter, onDeleteComplited }: IProps_Footer) => {
    const handleChange = (filter: TFilter) => () => {
        onFilter(filter);
    };

    return (
        <Flex justify='space-between' align='center' gap={5} wrap='wrap'>
            <span>{count} items left</span>
            <Flex>
                {filters.map((el) => (
                    <Tag.CheckableTag key={el} checked={filter === el} onChange={handleChange(el)}>
                        {el}
                    </Tag.CheckableTag>
                ))}
            </Flex>
            <Button size='small' onClick={onDeleteComplited}>
                Clear complited
            </Button>
        </Flex>
    );
};

export default Footer;
