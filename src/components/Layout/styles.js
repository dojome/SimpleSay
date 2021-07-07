import styled from "styled-components"

export const screenLayout = styled.div`   
  width: 100%;  
  margin: 0 auto; 

  // XXS Small devices Galaxy Android S9 (phones, 375px and up)
  @media (min-width: 360px) { 
    max-width: 345px;
   }

  // XS Small devices iPhone (phones, 375px and up)
  @media (min-width: 375px) { 
    max-width: 360px;
   }

  // Small devices (phones, 576px and up)
  @media (min-width: 576px) { 
    max-width: 550px;
   }

   // Small devices (landscape phones, 736px and up)
   @media (min-width: 667px) and (orientation: landscape) { 
     max-width: 730px;
    }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    max-width: 750px;
   }

   // Medium devices (landscape tablets, 768px and up)
   @media (min-width: 1024px) and (orientation: landscape) { 
     max-width: 1000px;
    }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 992px;  
   }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    max-width: 1400px;  
    min-height: 800px;   
   }
   
`

export const pageLayout = styled.div`     
  width: inherit;  
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;  
`

export const headerLayout = styled.div`
 
`

export const bodyLayout = styled.div`  
  background-color: #F9FAFA;
  box-shadow: 1px 1px 2px #E4E9E9;    
  border-bottom: 1px solid #DEE4E4;  

  // XXS Small devices Galaxy Android S9 (phones, 375px and up)
  @media (min-width: 360px) { 

   }

  // XS Small devices iPhone (phones, 375px and up)
  @media (min-width: 375px) { 

   }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 

   }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    min-height: 900px;
   }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {

   }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { 
    min-height: 820px;
   }
`

export const bodyInnerLayout = styled.div` 
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;  
`

export const footerLayoutClear = styled.div`    
  clear: both;  
`

export const footerLayoutMenu = styled.div`
  font-size: 14px;    
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  span {
    padding-left: 10px;
  }
`

export const footerLayoutCopyright = styled.div`    
  font-size: 12px;
  text-align: center;

`