// ** React Imports
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// ** MUI Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// ** Next Import
import Link from 'next/link';
import { SyntheticEvent } from 'react';

// ** Icon Imports
import Icon from './../../../../@core/components/icon';
// ** Custom Components Imports
import CustomChip from './../../../../@core/components/mui/chip';
import OptionsMenu from './../../../../@core/components/option-menu';
// ** Types
import { TeamsTabType } from './../../../../@fake-db/types';

const Teams = ({ data }: { data: TeamsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={item.avatar} sx={{ mr: 2, height: 32, width: 32 }} />
                      <Typography variant="h6" sx={{ fontSize: '1.125rem', color: 'text.secondary' }}>
                        {item.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small" sx={{ color: 'text.secondary' }}>
                        <Icon icon="mdi:star-outline" />
                      </IconButton>
                      <OptionsMenu
                        iconButtonProps={{ size: 'small' }}
                        options={[
                          'Rename Team',
                          'View Details',
                          'Add to Favorites',
                          { divider: true },
                          { text: 'Delete Team', menuItemProps: { sx: { color: 'error.main' } } },
                        ]}
                      />
                    </Box>
                  </Box>
                  <Typography sx={{ my: 4, color: 'text.secondary' }}>{item.description}</Typography>
                  <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AvatarGroup className="pull-up" sx={{ alignItems: 'center' }}>
                        {item.avatarGroup.map((person, index) => {
                          return (
                            <Tooltip key={index} title={person.name}>
                              <Avatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                            </Tooltip>
                          );
                        })}
                        <Typography variant="body2" sx={{ ml: 0.5, color: 'text.disabled' }}>
                          +{item.extraMembers}
                        </Typography>
                      </AvatarGroup>
                    </Box>
                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                      {item.chips &&
                        item.chips.map((chip, index) => (
                          <Box
                            href="/"
                            key={index}
                            component={Link}
                            onClick={(e: SyntheticEvent) => e.preventDefault()}
                            sx={{
                              textDecoration: 'none',
                              '&:not(:last-of-type)': { mr: 3 },
                              '& .MuiChip-root': { cursor: 'pointer' },
                            }}
                          >
                            <CustomChip size="small" skin="light" color={chip.color} label={chip.title} />
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Teams;
