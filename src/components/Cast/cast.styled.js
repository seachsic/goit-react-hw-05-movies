import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 26px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const Span = styled.span`
    font-weight:600;
`;