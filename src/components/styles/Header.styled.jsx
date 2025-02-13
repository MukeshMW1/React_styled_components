import styled from "styled-components";


export const  StyledHeader = styled.header`
background-color:lightblue;
padding:10px;
 `


 export const Nav = styled.nav`
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:10px ;
 margin-bottom:40px;

 @media(max-width:${({theme})=>theme.mobile}){

flex-direction:column;
gap:40px;
 }


 
 
 `



 export const Logo = styled.img`
 
 
 `

 
export const Image =  styled.img`
max-width:40%;
min-width:35%;



`