// ** React Import
// ** Type Import
import { LayoutProps } from '@core/layouts/types';
// ** Util Import
import { hexToRGBA } from '@core/utils/hex-to-rgba';
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Import
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import themeConfig from 'configs/themeConfig';
import { useRef, useState } from 'react';
// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar';

// ** Component Imports
import Drawer from './Drawer';
import VerticalNavHeader from './VerticalNavHeader';
import VerticalNavItems from './VerticalNavItems';

interface Props {
  navWidth: number;
  navVisible: boolean;
  collapsedNavWidth: number;
  hidden: LayoutProps['hidden'];
  navigationBorderWidth: number;
  toggleNavVisibility: () => void;
  settings: LayoutProps['settings'];
  children: LayoutProps['children'];
  setNavVisible: (value: boolean) => void;
  saveSettings: LayoutProps['saveSettings'];
  navMenuContent: LayoutProps['verticalLayoutProps']['navMenu']['content'];
  navMenuBranding: LayoutProps['verticalLayoutProps']['navMenu']['branding'];
  menuLockedIcon: LayoutProps['verticalLayoutProps']['navMenu']['lockedIcon'];
  verticalNavItems: LayoutProps['verticalLayoutProps']['navMenu']['navItems'];
  navMenuProps: LayoutProps['verticalLayoutProps']['navMenu']['componentProps'];
  menuUnlockedIcon: LayoutProps['verticalLayoutProps']['navMenu']['unlockedIcon'];
  afterNavMenuContent: LayoutProps['verticalLayoutProps']['navMenu']['afterContent'];
  beforeNavMenuContent: LayoutProps['verticalLayoutProps']['navMenu']['beforeContent'];
}

const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  '&.scrolled': {
    opacity: 1,
  },
}));

const Navigation = (props: Props) => {
  // ** Props
  const { hidden, settings, afterNavMenuContent, beforeNavMenuContent, navMenuContent: userNavMenuContent } = props;

  // ** States
  const [navHover, setNavHover] = useState<boolean>(false);
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);

  // ** Ref
  const shadowRef: any = useRef(null); //TODO

  // ** Hooks
  const theme = useTheme();
  const { mode } = settings;

  // ** Var
  const { afterVerticalNavMenuContentPosition, beforeVerticalNavMenuContentPosition } = themeConfig;

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = (ref: HTMLElement | any) => {
    if (ref) {
      ref._getBoundingClientRect = ref.getBoundingClientRect;

      ref.getBoundingClientRect = () => {
        const original = ref._getBoundingClientRect();

        return { ...original, height: Math.floor(original.height) };
      };
    }
  };

  // ** Scroll Menu
  const scrollMenu = (container: any) => {
    if (beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) {
      container = hidden ? container.target : container;
      if (shadowRef && container.scrollTop > 0) {
        if (!shadowRef.current.classList.contains('scrolled')) {
          shadowRef.current.classList.add('scrolled');
        }
      } else {
        shadowRef.current.classList.remove('scrolled');
      }
    }
  };

  const shadowBgColor = () => {
    if (mode === 'light') {
      return `linear-gradient(${theme.palette.customColors.lightBg} 5%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.85
      )} 30%,${hexToRGBA(theme.palette.customColors.lightBg, 0.5)} 65%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.3
      )} 75%,transparent)`;
    } else {
      return `linear-gradient(${theme.palette.customColors.darkBg} 5%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.85
      )} 30%,${hexToRGBA(theme.palette.customColors.darkBg, 0.5)} 65%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.3
      )} 75%,transparent)`;
    }
  };

  const ScrollWrapper: any = hidden ? Box : PerfectScrollbar;

  return (
    <Drawer {...props} navHover={navHover} setNavHover={setNavHover}>
      <VerticalNavHeader {...props} navHover={navHover} />
      {beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'fixed' ? beforeNavMenuContent(props) : null}
      {(beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) && (
        <StyledBoxForShadow ref={shadowRef} sx={{ background: shadowBgColor() }} />
      )}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <ScrollWrapper
          {...(hidden
            ? {
                onScroll: (container: any) => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' },
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container: any) => scrollMenu(container),
                containerRef: (ref: any) => handleInfiniteScroll(ref),
              })}
        >
          {beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'static'
            ? beforeNavMenuContent(props)
            : null}
          {userNavMenuContent ? (
            userNavMenuContent(props)
          ) : (
            <List className="nav-items" sx={{ pt: 0, '& > :first-child': { mt: '0' } }}>
              <VerticalNavItems
                navHover={navHover}
                groupActive={groupActive}
                setGroupActive={setGroupActive}
                currentActiveGroup={currentActiveGroup}
                setCurrentActiveGroup={setCurrentActiveGroup}
                {...props}
              />
            </List>
          )}
          {afterNavMenuContent && afterVerticalNavMenuContentPosition === 'static' ? afterNavMenuContent(props) : null}
        </ScrollWrapper>
      </Box>
      {afterNavMenuContent && afterVerticalNavMenuContentPosition === 'fixed' ? afterNavMenuContent(props) : null}
    </Drawer>
  );
};

export default Navigation;
