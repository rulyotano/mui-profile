import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const ActionButton = ({ url, icon }) => {
  if (!url) return null;
  return <Link href={url} color="inherit" target="_blank">
    <Button size="small">
      {icon}
    </Button>
  </Link>
}

export default ActionButton;