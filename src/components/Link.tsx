/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Ref } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(props: NextComposedProps, ref: Ref<any>) {
  const { as, href, ...other } = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface NextComposedProps {
  as?: string | object,
  href?: string | object,
  prefetch?: boolean,
  ref?: Ref<any>,
  className?: string
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: LinkProps) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink component={NextComposed} className={className} ref={innerRef} href={href as any} {...(other as any)} />
  );
}

interface LinkProps {
  activeClassName?: string,
  as?: string | object,
  className?: string,
  href?: string | Href,
  naked?: boolean,
  onClick?: Function,
  prefetch?: boolean,
  innerRef?: Ref<any>,
}

interface Href {
  pathname: string
}

export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />);
