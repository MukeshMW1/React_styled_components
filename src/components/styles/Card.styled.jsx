import styled from "styled-components";


export const StyledCard = styled.div`
display: flex;
align-items: center;
background-color: #EBC23D;   
color:#1D1D1B;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
padding: 60px; 
margin: 40px 0;
flex-direction: ${({layout}) => layout || 'row'};

h2{
font-size: 2rem;
font-weight: 800;
}


p{

font-size: 13px;
}
img{

width:80%;
}

& > div{
flex: 1;
}


@media(max-width:${({theme}) => theme.mobile}){

flex-direction: column;


}


`