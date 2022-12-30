// ** React Imports
// ** Next Import

// ** Spinner Import
import Spinner from '../@core/components/spinner'
// ** Hook Imports

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/dashboards/crm'
}

const Home = () => {
  

  return <Spinner sx={{ height: '100%' }} />
}

export default Home
