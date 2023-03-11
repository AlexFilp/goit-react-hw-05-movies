import { Main, Container, Loader } from './PageLoading.styled';

export const PageLoading = () => {
  return (
    <Main>
      <Container style={{ textAlign: 'center' }}>
        <Loader width={150} height={150} />
      </Container>
    </Main>
  );
};
