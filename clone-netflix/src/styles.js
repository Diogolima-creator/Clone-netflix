import styled from "styled-components";


export const Container = styled.div`
  width:1980px;
  height:100%;
  background-color: #111;
  color: #FFF;
 
  
}
`
export const Header = styled.div(({black}) => (`
  

  header{
    position: fixed;
    z-index: 999;
    height:70px;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: ${black ? 'black' : 'transparent'};
    transition: all ease 0.5s;
  }

  .header-logo{
    height:25px;
  }

  .header-logo img{
    height:100%;
  }

  .header-user{
    height:35px;
  }

  .header-user img{
    height:100%;
  }
`));

export const SpotLight = styled.div`

`

export const List = styled.section`
  width:100%;
  height:100%;
  margin-top:-150px;
`

export const Footer = styled.div`
  margin: 0px;
  text-align:center;
`