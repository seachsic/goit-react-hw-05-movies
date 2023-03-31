import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
`

export const Header = styled.div`
    display: flex;
    padding: 30px 20px;
    box-shadow: 0px 0px 10px 2px #000000;

`

export const Link = styled(NavLink) `
    text-decoration: none;
    margin-right: 10px;
`