import styled from "styled-components"

export const LayoutStepper = styled.div`
 width: 100%; 
 padding-top: 5px;
 // XXS Small devices Galaxy Android S9 (phones, 375px and up)
 @media (min-width: 360px) { 
   display: none;
  }

 // XS Small devices iPhone (phones, 375px and up)
 @media (min-width: 375px) { 
    display: none;
  }

 // Small devices (phones, 576px and up)
 @media (min-width: 576px) { 
    display: none;
  }

 // Medium devices (tablets, 1024px and up)
 @media (min-width: 1024px) { 
    display: block;
  }

`
export const LayoutMobileStepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  padding-top: 10px;
  
  // XXS Small devices Galaxy Android S9 (phones, 375px and up)
  @media (min-width: 360px) { 
    display: flex;
   }

  // Medium devices (landscape tablets, 768px and up)
  @media (min-width: 1024px) and (orientation: landscape) { 
    display: none;
   }

 // Large devices (desktops, 992px and up)
 @media (min-width: 992px) {
    display: none;
  }

 // Extra large devices (large desktops, 1200px and up)
 @media (min-width: 1200px) { 
    display: none;
  }

`

export const LayoutForm = styled.div`
 height: 100%; 
 padding-top: 5px; 
 
 // XXS Small devices Galaxy Android S9 (phones, 375px and up)
 @media (min-width: 360px) { 
   
  }

// Large devices (desktops, 992px and up)
  @media (min-width: 768px) {
    
 }

`

export const BckBtn = styled.div`
 padding-top: 8px;
 button {
  width: 80px;
} 
`

