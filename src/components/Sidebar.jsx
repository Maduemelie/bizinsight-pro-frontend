import React from 'react';

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutline,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Client Management',
    icon: null,
  },
  {
    text: 'Product Management',
    icon: <ShoppingCartOutlined />,
  },
  {
    text: 'Customer Management',
    icon: <Groups2Outlined />,
  },
  {
    text: 'Transaction Management',
    icon: <ReceiptLongOutlined />,
  },
  {
    text: 'Customer Geolocation',
    icon: <PublicOutlined />,
  },
  {
    text: 'Sales Analysis',
    icon: null,
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />,
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />,
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />,
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutline />,
  },
  {
    text: 'Management',
    icon: null,
  },
  {
    text: 'Administration',
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: 'Performance',
    icon: <TrendingUpOutlined />,
  },
];
const Sidebar = ({
  user,
  drawerWidth,
  userProfile,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              width: drawerWidth,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              borderStyle: 'solid',
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    INSIGHTIFY
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: '2.5rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  );
                }
                const lowerCaseText = text.toLowerCase();
                const cleanLowerCaseText = lowerCaseText.replace(/\s+/g, ''); // Remove spaces
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        const url = `/${cleanLowerCaseText}`;
                        console.log('Navigating to:', url);
                        navigate(url);
                        setActive(cleanLowerCaseText);
                      }}
                      sx={{
                        backgroundColor:
                          active === cleanLowerCaseText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === cleanLowerCaseText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            active === cleanLowerCaseText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === cleanLowerCaseText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={
                  userProfile.profilePicture &&
                  userProfile.profilePicture.length > 0
                    ? URL.createObjectURL(
                        new Blob([new Uint8Array(userProfile.profilePicture)], {
                          type: 'image/png',
                        })
                      )
                    : ''
                }
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.username}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.role}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: '25px ',
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
