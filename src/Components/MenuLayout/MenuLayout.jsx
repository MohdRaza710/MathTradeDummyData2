import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header'; 
import { allPaths } from '../../Utils/constants'; 
// setCollapsed import removed as it's no longer needed
import { setShowAlgoPage } from '../../Redux/actions/generalActions'; 
import { 
  setAlgotradingCards,
  setOverviewAlgorithm,
  setAlgoInformation,
} from '../../Redux/actions/userActions'; 

const MenuLayout = () => {
  console.log('MenuLayout component is rendering!'); 

  const dispatch = useDispatch();
  const location = useLocation();
  
  // Redux state
  // inlineCollapsed selector removed as it's no longer used for margin
  const showPage = useSelector(state => state.generalReducer.showPage);
  
  // Local state
  const [searchValue, setSearchValue] = useState('');
  const [martPage, setMartPage] = useState(showPage);

  // handleResize useEffect removed as inlineCollapsed is no longer used for margin
  // useEffect(() => {
  //   const handleResize = () => {
  //     const shouldCollapse = window.innerWidth < 1600;
  //     dispatch(setCollapsed(shouldCollapse));
  //   };
  //   window.addEventListener('resize', handleResize);
  //   handleResize(); 
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [dispatch]);

  // User actions
  const userActions = {
    setAlgotradingCards: (data) => dispatch(setAlgotradingCards(data)),
    setOverviewAlgorithm: (data) => dispatch(setOverviewAlgorithm(data)),
    setAlgoInformation: (info) => dispatch(setAlgoInformation(info)),
  };

  // General actions - setCollapsed removed
  const generalActions = {
    setShowAlgoPage: (value) => dispatch(setShowAlgoPage(value)),
  };

  return (
    <div className="menu-layout">
      {/* Header */}
      <div className="header-container">
        <Header 
          onSearch={searchValue}
          searchValue={searchValue}
          // isCollapsed prop removed as it's no longer needed
        />
      </div>

      {/* Main Content Area */}
      <div className="main-content-container">
        {/* Page Content */}
        <div 
          className={`page-content ${location.pathname !== allPaths.HOME ? 'with-background' : ''}`}
          style={{ 
            // Set marginLeft to 0px to remove the left space, or remove this style entirely
            marginLeft: '0px', 
            transition: 'margin-left 0.3s ease' // Keep transition for smoothness if you add other dynamic margins later
          }}
        >
          <Outlet context={{
            searchValue,
            martPage,
            setMartPage,
            userActions,
            generalActions
          }} />
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
