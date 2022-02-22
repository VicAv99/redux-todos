import NoteIcon from '@mui/icons-material/Note';
import { AppBar, Box, Button, styled, Toolbar as MuiToolbar, Typography } from '@mui/material';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ToolbarProps {
}

const TextLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Toolbar = (props: ToolbarProps) => {
  return (
    <AppBar position="static">
      <MuiToolbar variant="dense">
        <TextLink href="/">
          <Typography variant="h6" color="inherit" component="div">
            Dopnization
          </Typography>
        </TextLink>
        <Box sx={{ flexGrow: 1 }} />
        <TextLink passHref href="/todoit">
          <Button variant="text" color="inherit">
            <NoteIcon />&nbsp;Notes
          </Button>
        </TextLink>
      </MuiToolbar>
    </AppBar>
  )
}
