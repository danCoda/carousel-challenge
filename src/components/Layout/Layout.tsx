import { PropsWithChildren } from "react";
import { Container, Content } from "./Layout.styles";

type LayoutProps = {
  className?: string;
};

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <Content>{children}</Content>
    </Container>
  );
};
