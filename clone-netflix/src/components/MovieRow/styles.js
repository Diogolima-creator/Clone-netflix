import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;

    h2{
        margin: 0px 0px 0px 30px;
    }

    .list-area{
        
        padding-left:30px;
    }

   

    .item{
        display:inline-block;
        width:150px;

    }

    .item img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    
    .item img:hover{
        transform:scale(1)
    }

    .list{
        transition: all ease 0.5s;
    }

    .movieRow-left,
    .movieRow-right{
        position:absolute;
        width: 40px;
        height: 225px;
        z-index: 99;
        background-color: rgba(0,0,0, 0.6);
        display:flex;
        align-items:center;
        justify-content:center;
        overflow: hidden;
        cursor:pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    .movieRow-left{
        left: 0px;
    }

    .movieRow-right{
        right: 0px;
        
    }

    &:hover .movieRow-left,
    &:hover .movieRow-right{
        opacity: 1;
    }

    @media(max-width:760px){
        .movieRow-left,
        .movieRow-right{
            opacity:1;
        }
    }
`