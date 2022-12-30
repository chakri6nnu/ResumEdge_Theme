// ** MUI Imports
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';

// ** Icon Imports
import Icon from './../../../@core/components/icon';

const ListSecondary = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/images/avatars/2.png" alt="Caroline Black" sx={{ height: 36, width: 36 }} />
        </ListItemAvatar>
        <ListItemText primary="Caroline Black" secondary="Sweet dessert brownie." />
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <Icon icon="mdi:plus" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/images/avatars/1.png" alt="Alfred Copeland" sx={{ height: 36, width: 36 }} />
        </ListItemAvatar>
        <ListItemText primary="Alfred Copeland" secondary="Pudding pie tiramisu." />
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <Icon icon="mdi:plus" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/images/avatars/8.png" alt="Celia Schneider" sx={{ height: 36, width: 36 }} />
        </ListItemAvatar>
        <ListItemText primary="Celia Schneider" secondary="Muffin pie chupa chups." />
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <Icon icon="mdi:plus" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default ListSecondary;
