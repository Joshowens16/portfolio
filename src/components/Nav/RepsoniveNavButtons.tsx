import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../store/viewSlice';
import './responsive.css';
const RepsoniveNavButtons = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { darkMode } = useSelector((state: RootState) => state.viewMode);
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleViewChange = () => {
    if (darkMode) {
      dispatch(setDarkMode(false));
      return;
    }
    dispatch(setDarkMode(true));
    return;
  };

  return (
    <div className="responsiveNav">
      <div id={!darkMode ? 'viewmode' : 'darkViewMode'}>
        <button onClick={handleViewChange}>
          {!darkMode ? <DarkModeIcon /> : <LightModeIcon sx={{ color: 'white' }} />}
        </button>
      </div>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Link to="/">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                  </Link>
                  <Link to="/about">
                    <MenuItem onClick={handleClose}>About</MenuItem>
                  </Link>
                  <Link to="/projects">
                    <MenuItem onClick={handleClose}>Projects</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>Resume</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default RepsoniveNavButtons;
