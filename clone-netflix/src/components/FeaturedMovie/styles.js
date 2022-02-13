import styled from "styled-components";

export const Container = styled.div`
    color:white;
    

    .featured{
        height:100vh;
    }

    .featured-vertical{
        width:inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }

    .featured-horizontal{
        width:inherit;
        height:inherit;
        background: linear-gradient(to right, #111, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom:150px;
        padding-top:70px;
    }

    .featured-name{
        font-size: 60px;
        font-weight: bold;
    }

    .featured-info{
        font-size:18px;
        font-weight: bold;
        margin-top: 15px;
    }

    .featured-points, .featured-year, .featured-seasons{
        display:inline-block;
        margin-right:15px;
    }

    .featured-points{
        color: #46d369;
    }
  
    .featured-description{
        margin-top:15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
    }

    .featured-buttons{
        margin-top:15px;
    }

    .featured-watchbutton,
    .featured-mylistbutton{
        display: inline-block;
        font-size:20px;
        font-weight: bold;
        padding:15px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity:1;
        transition: all ease 0.2s;
    }

    .featured-watchbutton,
    .featured-mylistbutton:hover{
        opacity:0.7;
    }
    .featured-watchbutton{
        background-color: #FFF;
        color: #000;
    }

    .featured-mylistbutton{
        background-color: #333;
        color: #FFF;
    }

    .featured-genres{
        margin-top: 15px;
        font-size: 18px;
        color: #999;
    }

    @media(max-width:760px){

        .featured {
            height: 70vh;
        }

        .featured-name {
            font-size:32px;
        }

        .featured-info {
            font-size:16px;
        }

        .featured-description {
            font-size:14px;
            max-width:10%;
            margin-right:30px;
        }
        
        .featured-watchbutton,
        .featured-mylistbutton{
            font-size:16px;
        }
        
        .featured-genres{
            font-size: 14px;
        }
    }
`;