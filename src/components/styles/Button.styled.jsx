import styled from "styled-components";



export const Button = styled.button`


border-radius:50px;
border:none;
box-shadow:0 2px 10px rgba(0,0,0,0.15);
cursor:pointer;
font-size:16px;
foont-weight:700;
padding:15px 60px;
background-color:${({bg})=>bg || 'white'};
color:${({color})=>color || '#333'};


&:hover{
opacity:0.9;
scale:0.90;
transition:all 0.3s ease-in-out;
background-color:${({hbg})=>hbg || 'black'};
color:white;
}
@media(max-width:${({theme})=>theme.mobile}){

font-size:12px;
padding:10px 20px;

}

` 