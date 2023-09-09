import styled from "styled-components";
import { useState, useEffect } from "react";
import { Navbar } from "../components";
import EditUserShippingAddress from "../components/EditUserShippingAddress";


import UserSideBar from "../components/UserSidebar";
import UserPurchaseHistory from "../components/UserPurchaseHistory";
import UserProfileUpdate from "../components/UserProfileUpdate";

const UserHomePage = () => {
  const [CurrentScreen, setCurrentScreen] = useState(1);
  
  const handleValueUpdate = (newValue) => {
    setCurrentScreen(newValue);
  };
  

  function ScreenDisplay() {
    if (CurrentScreen === 1) {
      return <UserPurchaseHistory />;
    }
    if (CurrentScreen === 2) {
      return <UserProfileUpdate />;
    }
    if (CurrentScreen === 3) {
      return <EditUserShippingAddress />;
    }
    
  }


  return (
    <Wrapper>
      <Navbar />

        <div className="FlexRowDiv">
          <UserSideBar updateParentValue={handleValueUpdate} />
          {ScreenDisplay()}
          <div className="LightEffect"></div>
        </div>
    
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f9f9f9;
  
  font-family: "Century Gothic", sans-serif;
  .LightEffect {
    border-radius: 150px 0 0 150px; /* The first two values (150px 150px) define the top-left and top-right radii, while the last two (0 0) define the bottom-left and bottom-right radii, making them 0 to create a straight edge */
    opacity: 0.800000011920929;
    background:  #a6705d;
    filter: blur(100px);
    width: 150px;
    z-index: 1;
    height: 350px;
    position: absolute;
    right: 0px;
    top: 75%;
  }

  .FlexRowDiv {
    display: flex;
    flex-direction: row;
    width:100%;
    height:100%;
  }
  
  @media (max-width: 767px) {
    margin-top:80px;
    .FlexRowDiv {
      display: flex;
      flex-direction: column;
    }
    .LightEffect {
      display: none;
    }
  }
  @media (min-width: 800px) and (max-width: 950px){
    margin-top:80px;
  }
`;
export default UserHomePage;
