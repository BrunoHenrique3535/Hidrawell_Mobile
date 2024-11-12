import styled from 'styled-components';

export const MateriaisContainer = styled.div`
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding-bottom: 7rem;

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2.5rem;
        color: #DFE6E9;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;
        h1 {
            font-size: 2rem;
        }
    }
`;

export const PecasGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const Pecas = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    img {
        width: 12rem;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-bottom: 1rem;
        background-color: #FFF;
    }

    h2 {
        font-size: 1.2rem;
        color: #DFE6E9;
        margin: 0.5rem 0;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        color: #DFE6E9;
        font-size: 1rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        img {
            width: 10rem;
        }

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;
