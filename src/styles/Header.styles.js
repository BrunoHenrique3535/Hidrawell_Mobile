import styled from 'styled-components'

export const HeaderContent = styled.header`
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
    @media (max-width: 450px) {
        img{
            width: 2.5rem;
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
        a {
            font-size: 0.8rem;
        }

        flex-wrap: wrap;
        gap: 20px;
    }
`