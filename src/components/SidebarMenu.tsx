import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import AppsIcon from '@material-ui/icons/Apps';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArticlesIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Language';
import NpmIcon from 'components/icons/NpmIcon';
import NugetIcon from 'components/icons/NugetIcon';
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
  projects: 'projects',
  articles: 'articles',
  readBooks: 'readBooks',
}

export default function ApplicationBar({ onClose = () => { } }) {
  const classes = useStyles();
  const projects = settings.projects;
  const articles = settings.articles;
  const readBooks = settings.recommendedBooks;
  const [opened, setOpened] = useState({});

  const isMenuOpened = (menu: string) => Boolean(opened[menu])
  const toggleMenu = (menu: string) => setOpened({ ...opened, [menu]: !opened[menu] })

  const projectsOpened = isMenuOpened(menus.projects)
  const articlesOpened = isMenuOpened(menus.articles)
  const readBooksOpened = isMenuOpened(menus.readBooks)
  return (
    <div className={classes.list}>
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          @{settings.companyName}
        </ListSubheader>
      }>
        {/* ===== Projects ===== */}
        <ListItem button onClick={() => toggleMenu(menus.projects)}>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary={"Interesting Projects"} />

          <ExpandButton expanded={projectsOpened} />
        </ListItem>


        <Collapse in={projectsOpened} timeout="auto" unmountOnExit>
          {projects.map(it => <ProjectMenuItem key={it.title} level={1} title={it.title} github={it.github} web={it.web} npm={it.npm} nuget={it.nuget} />)}
        </Collapse>

        {/* ===== Articles ===== */}
        <ListItem button onClick={() => toggleMenu(menus.articles)}>
          <ListItemIcon>
            <ArticlesIcon />
          </ListItemIcon>
          <ListItemText primary={"Articles"} />

          <ExpandButton expanded={articlesOpened} />
        </ListItem>


        <Collapse in={articlesOpened} timeout="auto" unmountOnExit>
          {articles.map(it => <ArticlesMenuItem key={it.title} level={1} name={it.title} web={it.web} />)}
        </Collapse>

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

interface ArticlesItemProps {
  level: number,
  name: string,
  web?: string
}

interface ReadBooksItemProps {
  level: number,
  name: string,
  web?: string
}

function ProjectMenuItem(props: MenuItemProps) {
  const { title, github, web, npm, nuget } = props;
  const classes = useStyles(props);
  const [isOpen, setIsOpen] = useState(false);


  return <>
    <ListItem className={classes.menuItem} button onClick={() => setIsOpen(!isOpen)}>
      <ListItemText primary={title} />
      <ExpandButton expanded={isOpen} />
    </ListItem>

    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>

        <ListItem className={classes.menuSubItem}>
          {github ? <Tooltip title="Github">
            <Link href={github} color="inherit" target="_blank">
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
            </Link>
          </Tooltip> : null}

          {web ? <Tooltip title="Web"><Link href={web} color="inherit" target="_blank">
            <ListItemIcon>
              <WebIcon />
            </ListItemIcon>
          </Link></Tooltip> : null}

          {npm ? <Tooltip title="Npm"><Link href={npm} color="inherit" target="_blank">
            <ListItemIcon>
              <NpmIcon />
            </ListItemIcon>
          </Link></Tooltip> : null}

          {nuget ? <Tooltip title="Nuget"><Link href={nuget} color="inherit" target="_blank">
            <ListItemIcon>
              <NugetIcon />
            </ListItemIcon>
          </Link></Tooltip> : null}

        </ListItem>

      </List>
    </Collapse>
  </>;
}

function ArticlesMenuItem(props: ArticlesItemProps) {
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