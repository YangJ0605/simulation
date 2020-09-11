import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
    position: relative;
    display: flex;
    min-height: 50px;
    padding: 0;
    color: #3f4d67;
    width: 100%;
    transition: all 0.3s ease-in-out;
    /* background: #f4f7fa; */
    padding: 0 20px;
    box-sizing: border-box;
    height: 100%;

    .left {
        display: flex;
        svg {
            width: 16px;
            height: 16px;
        }
        .toggle {
            margin:0 20px;
        }
        .drop-down {
            margin-left: 20px;
            margin-right: 20px;
            span {
                display: flex;
                align-items: center;
                svg {
                    width: 14px;
                    height: 14px;
                }
            }
        }
    }
` 