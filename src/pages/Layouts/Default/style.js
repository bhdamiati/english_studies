import styled from 'styled-components'

export const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 100px auto 100px;
    grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`

export const Header = styled.header`
    grid-area: header;
    background-image: linear-gradient(269.83deg, hsl(229, 100%, 63%) 27.24%, hsl(188, 100%, 45%) 100%);
    display: flex;
    overflow: hidden;

    img {
        position: fixed;
        height: 90px;
        align-self: center;
        animation: 
            bobbing 5s infinite ease-in-out alternate-reverse,
            navigate 120s -12s infinite linear;

        @keyframes bobbing {
            from {transform: translateY(5px);}
            to {transform: translateY(-1px);}
        }

        @keyframes navigate {
            from {left: -20%;}
            to {left: 100%;}
        }
    }

    h1 {
        margin: 0 auto;
        align-self: center;
        color: #FFF;
        z-index: 10;
    }

`

export const Content = styled.main`
    grid-area: content;
    background-color: #FFF;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const Footer = styled.footer`
    grid-area: footer;
    background-color: #2D2D2D;
`
