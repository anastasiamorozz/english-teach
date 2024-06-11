import * as React from 'react';
import './MiniDrawer.css';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { store } from '../..';
import { IUser } from '../../models/IUser';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  border: 'none', // Remove border
  right: 0, // Position drawer on the right
  left: 'auto',
  color: 'white'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: 'none', // Remove border
  right: 0, // Position drawer on the right
  left: 'auto',
  color: 'white'
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align icons to the start
  ...theme.mixins.toolbar,
  minHeight: 0, // Remove padding
  border: 'none', // Remove border
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none', // Remove border
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth, // Adjust margin to the right
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    color: 'white'
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const [avatar, setAvatar] = useState<Blob | any>(undefined);
  const [userId, setUserId] = useState<number>(0);
  const [firstName, setFirstName] = useState<string | undefined>("");
  const [lastName, setLastName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decodedToken: DecodedToken = jwtDecode(token);
            console.log("Decoded token:", decodedToken);
            setUserId(decodedToken.id);
        } catch (e) {
            console.error('Invalid token:', e);
            localStorage.removeItem('token');
            store.setAuth(false);
        }
    }
}, [store]);

  useEffect(()=>{
      const fetchAvatar = async () =>{
          try{
            const response = await UserService.getUserInfo(userId);
              const photo_res = await UserService.getAvatar(userId);
              const user = response.data.user as IUser;
              setFirstName(user.firstName);
              setLastName(user.lastName);
              setEmail(user.email);
              setAvatar(photo_res);
          }catch(e){
              console.error('Error fetching user info:', e);
          }
      }

      fetchAvatar()

  }, [userId])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{padding:'0'}}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}> {/* Align toolbar content to the end */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginLeft: 5,
              width: '50px',
              height: '50px',
            //   backgroundColor: '#0F1621',
              border: 'none',
              ...(open && { display: 'none' }),
            }}
          >
            {/* <MenuIcon /> */}
            {/* <img className="miniAvatar" src='/avatar.jpg'></img> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="right" open={open}>
        <DrawerHeader sx={{ backgroundColor: '#0F1621' }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            <div className='miniInfo'>
            <img className="miniAvatar" src={avatar || './avatar.jpg'}></img>
            <div>
                <h6>{firstName} {lastName}</h6>
                <p>{email}</p>
            </div>
            {/* {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            </div>
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ border: 'none' }} />
        <List sx={{ backgroundColor: '#0F1621', flexGrow: 1 }}> {/* Ensure List takes full height */}
          {['Topics', 'My profile', 'Settings'].map((text, index) => {
                    const path = text.toLowerCase().replace(' ', '');
                    return(
                      <ListItem key={text} disablePadding sx={{ display: 'block', border: 'none' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          border: 'none',
                        }}
                        onClick={() => handleNavigation(`/${path}`)}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            color: 'white',
                            justifyContent: 'center',
                            border: 'none',
                          }}
                        >
                        {index % 3 === 0 ? <SchoolIcon/> : index % 3 === 1 ? <AccountCircleIcon /> : <SettingsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: 'white', border: 'none' }} /> {/* Set text color to white */}
                      </ListItemButton>
                    </ListItem>
                  );
                  })}
        </List>

        <Typography sx={{
          backgroundColor:'#0F1621'
        }}>
        {open ? (
          <div className='colorThemePick'>
            <hr></hr>
            <p><HelpOutlineIcon /> Colour Scheme</p>
            <div className='buttonsGroup'>
              <button className='lightTheme' onClick={()=>
                document.body.setAttribute("data-theme", "light")
            }><LightModeIcon></LightModeIcon>Light</button>
              <button className='darkTheme' onClick={()=>
                document.body.setAttribute("data-theme", "dark")
            }><NightsStayIcon></NightsStayIcon>Dark</button>
            </div>
          </div>
        ) : (
          <NightsStayIcon sx={{
            marginBottom:'20px',
            marginLeft:'25px',
            // color:'#D1D3D4',
            backgroundColor:'#0F1621'
          }}/>
        )}
      </Typography>
        <Divider sx={{ border: 'none' }} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
