import {
  Box,
  Typography,
} from '@mui/material';

const TitleBar = ({ title, itemName }:{title:string, itemName: string | undefined }) =>
  (<Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '24px' }}> {title}{itemName ? ': ' : ''}{itemName ? <Typography sx={{ fontSize: '28px', fontWeight: '200', color: '#777', display: 'inline' }}>{itemName}</Typography> :''}</Typography></Box>);

export default TitleBar;