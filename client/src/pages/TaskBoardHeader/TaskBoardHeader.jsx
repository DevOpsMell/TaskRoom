import React, { useEffect } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Link,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/authSlice'
import http from '../../utils/axios'
import stringAvatar from '../../utils/stringAvatar'
import AvatarMenu from './components/AvatarMenu'
import { useNavigate } from 'react-router'

export default function TaskBoardHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchUserProfile = async () => {
    try {
      const response = await http('/users/profile', {
        method: 'GET',
      })
      if (response.status === 200) {
        const { data: userProfile } = response
        dispatch(login({ ...user, ...userProfile }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUserProfile()
    }
  }, [isAuthenticated])

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      sx={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(5px)',
        elevation: '2',
        borderBottom: 'none',
        position: 'relative',
      }}
    >
      <Toolbar sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 2,
            alignItems: 'center',
          }}
        >
          <Button>
            <Avatar src="/images/TR_logo.png" alt="TR_Logo" variant="rounded" />
            <Typography variant="h6" sx={{ ml: 1, color: '#42526e' }}>
              TaskRoom
            </Typography>
          </Button>
          <Box>
            <Link onClick={() => navigate('/project')}>
              <Button sx={{ color: '#42526e' }}>Project</Button>
            </Link>

            <Button sx={{ color: '#42526e' }}>Create</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {isAuthenticated ? (
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {user.username ? (
                  <Avatar {...stringAvatar(`${user.username}`)} />
                ) : (
                  ''
                )}
              </IconButton>
            </Tooltip>
          ) : (
            <Link href="/login">
              <Button sx={{ color: '#42526e' }}>Login</Button>
            </Link>
          )}
        </Box>
      </Toolbar>
      <AvatarMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        userProfile={user}
      />
    </AppBar>
  )
}
