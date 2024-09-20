import styled from 'styled-components'

export const HeaderContent = styled.header`
    background: #0D99FF;
    height: 6rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding-inline: 10px;
    justify-content: space-between;

    .menu {
        display: none;
    }
    
    img{
        width: 4.5rem;
        border-radius: 50%;
        margin-left: .5rem;
        border: solid 4px #ffffff;
    }
    @media (max-width: 450px) {
        img{
            width: 2.5rem;
        }
        .menu {
            display: flex;
        }
    }
`

export const Links = styled.nav `
    width: 100%;
    display: flex;
    justify-content: space-around;

    a{
        border-bottom: 2px solid transparent;
        font-size: 1.2rem;
    }

    a:hover{
        border-bottom: 2px solid #ffffff;
        transition: all.5s;
    }


    @media (max-width: 450px) {
        display: none;        
        a {
            font-size: 0.8rem;
        }

        flex-wrap: wrap;
        gap: 20px;
    }
`


export const LinksMobile = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0D99FF;
    gap: 8px;
    position: absolute;
    right: 0px;
    top: 6rem;

`