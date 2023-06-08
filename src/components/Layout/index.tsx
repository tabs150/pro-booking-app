import type { ReactNode } from 'react';

type LayoutProps = {
  meta?: ReactNode;
  children?: ReactNode;
};

const Layout = (props: LayoutProps) => (
  <div className="w-full antialiased">
    {props.meta}
    <div className="mx-auto">{props.children}</div>
  </div>
);

export default Layout;
