import * as Styled from './styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <Styled.Container>{children}</Styled.Container>
);

export default Container;
