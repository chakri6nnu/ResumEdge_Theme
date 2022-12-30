// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux';

// ** Hooks
import { useSettings } from './../../../@core/hooks/useSettings';
import { formatDateToMonthShort } from './../../../@core/utils/format';
// ** Utils Imports
import { getInitials } from './../../../@core/utils/get-initials';
// ** Types
import { AppDispatch, RootState } from './../../../store';
import {
  fetchChatsContacts,
  fetchUserProfile,
  removeSelectedChat,
  selectChat,
  sendMsg,
} from './../../../store/apps/chat';
import { StatusObjType, StatusType } from './../../../types/apps/chatTypes';
import ChatContent from './../../../views/apps/chat/ChatContent';
// ** Chat App Components Imports
import SidebarLeft from './../../../views/apps/chat/SidebarLeft';

const AppChat = () => {
  // ** States
  const [userStatus, setUserStatus] = useState<StatusType>('online');
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
  const [userProfileLeftOpen, setUserProfileLeftOpen] = useState<boolean>(false);
  const [userProfileRightOpen, setUserProfileRightOpen] = useState<boolean>(false);

  // ** Hooks
  const theme = useTheme();
  const { settings } = useSettings();
  const dispatch = useDispatch<AppDispatch>();
  const hidden = useMediaQuery(theme.breakpoints.down('lg'));
  const store = useSelector((state: RootState) => state.chat);

  // ** Vars
  const { skin } = settings;
  const smAbove = useMediaQuery(theme.breakpoints.up('sm'));
  const sidebarWidth = smAbove ? 370 : 300;
  const mdAbove = useMediaQuery(theme.breakpoints.up('md'));
  const statusObj: StatusObjType = {
    busy: 'error',
    away: 'warning',
    online: 'success',
    offline: 'secondary',
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchChatsContacts());
  }, [dispatch]);

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen);
  const handleUserProfileLeftSidebarToggle = () => setUserProfileLeftOpen(!userProfileLeftOpen);
  const handleUserProfileRightSidebarToggle = () => setUserProfileRightOpen(!userProfileRightOpen);

  return (
    <Box
      className="app-chat"
      sx={{
        width: '100%',
        display: 'flex',
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'background.paper',
        boxShadow: skin === 'bordered' ? 0 : 6,
        ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
      }}
    >
      <SidebarLeft
        store={store}
        hidden={hidden}
        mdAbove={mdAbove}
        dispatch={dispatch}
        statusObj={statusObj}
        userStatus={userStatus}
        selectChat={selectChat}
        getInitials={getInitials}
        sidebarWidth={sidebarWidth}
        setUserStatus={setUserStatus}
        leftSidebarOpen={leftSidebarOpen}
        removeSelectedChat={removeSelectedChat}
        userProfileLeftOpen={userProfileLeftOpen}
        formatDateToMonthShort={formatDateToMonthShort}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
        handleUserProfileLeftSidebarToggle={handleUserProfileLeftSidebarToggle}
      />
      <ChatContent
        store={store}
        hidden={hidden}
        sendMsg={sendMsg}
        mdAbove={mdAbove}
        dispatch={dispatch}
        statusObj={statusObj}
        getInitials={getInitials}
        sidebarWidth={sidebarWidth}
        userProfileRightOpen={userProfileRightOpen}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
        handleUserProfileRightSidebarToggle={handleUserProfileRightSidebarToggle}
      />
    </Box>
  );
};

AppChat.contentHeightFixed = true;

export default AppChat;
