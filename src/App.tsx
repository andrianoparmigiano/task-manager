import { ConfigProvider } from 'antd';
import ToDo from './components/ToDo';
import { theme } from './theme';

import './App.scss';

function App() {
    return (
        <ConfigProvider theme={theme}>
            <ToDo />
        </ConfigProvider>
    );
}

export default App;
