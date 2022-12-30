// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
// ** Next Import
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
// ** Store Imports
import { useDispatch, useSelector } from 'react-redux';

// ** Icon Imports
import Icon from './../../../@core/components/icon';
import CustomAvatar from './../../../@core/components/mui/avatar';
// ** Custom Components Imports
import CustomChip from './../../../@core/components/mui/chip';
import { ThemeColor } from './../../../@core/layouts/types';
// ** Utils Import
import { getInitials } from './../../../@core/utils/get-initials';
// ** Types Imports
import { AppDispatch, RootState } from './../../../store';
// ** Actions Imports
import { fetchData } from './../../../store/apps/user';
import { UsersType } from './../../../types/apps/userTypes';
// ** Custom Components Imports
import TableHeader from './../../../views/apps/roles/TableHeader';

interface UserRoleType {
  [key: string]: { icon: string; color: string };
}

interface UserStatusType {
  [key: string]: ThemeColor;
}

interface CellType {
  row: UsersType;
}

// ** Vars
const userRoleObj: UserRoleType = {
  admin: { icon: 'mdi:laptop', color: 'error.main' },
  author: { icon: 'mdi:cog-outline', color: 'warning.main' },
  editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
  maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
  subscriber: { icon: 'mdi:account-outline', color: 'primary.main' },
};

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary',
};

// ** renders client column
const renderClient = (row: UsersType) => {
  if (row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />;
  } else {
    return (
      <CustomAvatar skin="light" color={row.avatarColor} sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}>
        {getInitials(row.fullName ? row.fullName : 'John Doe')}
      </CustomAvatar>
    );
  }
};

const columns = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'fullName',
    headerName: 'User',
    renderCell: ({ row }: CellType) => {
      const { fullName, username } = row;

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              component={Link}
              variant="subtitle2"
              href="/apps/user/view/overview/"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {fullName}
            </Typography>
            <Typography noWrap variant="caption">
              {`@${username}`}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography variant="body2" noWrap>
          {row.email}
        </Typography>
      );
    },
  },
  {
    flex: 0.15,
    field: 'role',
    minWidth: 150,
    headerName: 'Role',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3, color: userRoleObj[row.role].color } }}>
          <Icon icon={userRoleObj[row.role].icon} fontSize={20} />
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.role}
          </Typography>
        </Box>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: 'Plan',
    field: 'currentPlan',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
          {row.currentPlan}
        </Typography>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          skin="light"
          size="small"
          label={row.status}
          color={userStatusObj[row.status]}
          sx={{ textTransform: 'capitalize' }}
        />
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: () => (
      <IconButton component={Link} href="/apps/user/view/overview/">
        <Icon icon="mdi:eye-outline" />
      </IconButton>
    ),
  },
];

const UserList = () => {
  // ** State
  const [plan, setPlan] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(10);

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(
      fetchData({
        role: '',
        q: value,
        status: '',
        currentPlan: plan,
      })
    );
  }, [dispatch, plan, value]);

  const handleFilter = useCallback((val: string) => {
    setValue(val);
  }, []);

  const handlePlanChange = useCallback((e: SelectChangeEvent) => {
    setPlan(e.target.value);
  }, []);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader plan={plan} value={value} handleFilter={handleFilter} handlePlanChange={handlePlanChange} />
          <DataGrid
            autoHeight
            rows={store.data}
            columns={columns}
            checkboxSelection
            pageSize={pageSize}
            disableSelectionOnClick
            rowsPerPageOptions={[10, 25, 50]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserList;
