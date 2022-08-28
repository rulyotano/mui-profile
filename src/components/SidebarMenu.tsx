import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import AppsIcon from '@material-ui/icons/Apps';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Link from '@material-ui/core/Link';
import NextLink from 'next/link';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArticlesIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/MenuBook';
import settings from 'settings.json';
import ExpandButton from 'components/ExpandButton';

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250
  },
  menuItem: {
    paddingLeft: (props: MenuItemProps) => theme.spacing(4 * props.level),
  },
  menuSubItem: {
    paddingLeft: (props: MenuItemProps) => theme.spacing(8 * props.level),
  }
}))

const menus = {
  readBooks: 'readBooks',
}

export default function ApplicationBar({ onClose = () => { } }) {
  const classes = useStyles();
  const readBooks = settings.recommendedBooks;
  const [opened, setOpened] = useState({});

  const isMenuOpened = (menu: string) => Boolean(opened[menu])
  const toggleMenu = (menu: string) => setOpened({ ...opened, [menu]: !opened[menu] })

  const readBooksOpened = isMenuOpened(menus.readBooks)
  return (
    <div className={classes.list}>
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          @{settings.companyName}
        </ListSubheader>
      }>
        {/* ===== Projects ===== */}
        <ListItem button>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <Link href={"/projects"} color="inherit" component={NextLink}>
            <ListItemText primary={"Interesting/Fun Projects"} />
          </Link>
        </ListItem>

        {/* ===== Articles ===== */}
        <ListItem button>
          <ListItemIcon>
            <ArticlesIcon />
          </ListItemIcon>
          <Link href={"/articles"} color="inherit" component={NextLink}>
            <ListItemText primary={"Articles"} />
          </Link>
        </ListItem>

        {/* ===== Read Books ===== */}
        <ListItem button onClick={() => toggleMenu(menus.readBooks)}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary={"Recommended Books"} />

          <ExpandButton expanded={readBooksOpened} />
        </ListItem>


        <Collapse in={readBooksOpened} timeout="auto" unmountOnExit>
          {readBooks.map(it => <ReadBooksMenuItem key={it.title} level={1} name={it.title} web={it.web} />)}
        </Collapse>
      </List>
    </div>
  );
}

interface MenuItemProps {
  level: number,
  title: string,
  github?: string,
  web?: string,
  npm?: string,
  nuget?: string,
}

interface ReadBooksItemProps {
  level: number,
  name: string,
  web?: string
}

function ReadBooksMenuItem(props: ReadBooksItemProps) {
  const classes = useStyles(props);
  const { name, web } = props;

  return <>
    <ListItem className={classes.menuItem}>
      <Link href={web} color="inherit" target="_blank">
        <ListItemText primary={name} />
      </Link>
    </ListItem>
  </>;
}