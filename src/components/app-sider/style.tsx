import styled from 'styled-components'


export const AppSiderWrapper = styled.div`
    display: block;
    transition: all 0.3s ease-in-out;
    box-shadow: 1px 0 20px 0 #3f4d67;
    width: 100%;
    height: 100vh;
    background: #3f4d67;
    color: #a9b7d0;
    .header {
        padding:10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo svg {
            width: 35px;
            height: 35px;
        }
        .title {
            margin-left: 10px;
            font-weight: 100;
            color: #fff;
            font-size: 18px;
        }
    }
    .menu {
        width: 100%;
        height: 100%;
        .ant-menu {
          background: #3f4d67;
          color: #fff;
        }
    }
`