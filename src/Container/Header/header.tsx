import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './header.css'
import Logo from '../../Components/Logo/Logo'
import Menu from 'Components/Menu/Menu'
import CartHeader from 'Components/CartHeader/CartHeader'

type Props = {}
const header = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Logo />
                    </Typography>
                    <Menu />
                    <CartHeader />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default header
