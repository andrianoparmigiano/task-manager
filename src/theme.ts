import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
    components: {
        Checkbox: {
            borderRadiusSM: 25,
            colorBgContainer: 'rgb(255, 255, 255)',
            colorBgContainerDisabled: 'rgba(255, 255, 255, 0.04)',
            colorPrimary: 'rgba(0, 0, 0, 0.1)',
            colorPrimaryHover: 'rgb(228, 228, 228)',
            colorWhite: 'rgb(41, 191, 43)',
            colorPrimaryBorder: 'rgb(68, 255, 103)',
        },
    },
    token: {
        colorPrimary: '#29cf59',
        colorInfo: '#29cf59',
    },
};
