import styled from 'styled-components'

export const HeaderContent = styled.header `
    background: #0D99FF;
    height: 6rem;
    width: 100%;
    display: flex;
    align-items: center;
    
    img{
        width: 4.5rem;
        border-radius: 50%;
        margin-left: .5rem;
        border: solid 4px #ffffff;
    }
`

export const Links = styled.nav `
    width: 100%;
    display: flex;
    justify-content: space-around;

    a{
        border-bottom: 2px solid transparent;
        font-size: 1.5rem;
    }

    a:hover{
        border-bottom: 2px solid #ffffff;
        transition: all.5s;
    }
`