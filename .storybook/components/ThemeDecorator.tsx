import * as React from 'react';

import styled, { css } from 'styled-components';

import { ThemeProvider } from '../../src/styled';

import { Button } from '../../src/components/button/Button';

import { createTheme } from '../../src/theme';

const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 4px;
    padding: 20px;

    background: ${theme.colors.secondaryBackground};
  `};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const theme1 = createTheme({}, {});

const theme2 = createTheme(
  {
    primary: 'orange',
    primaryBackground: '#484f5e',
    secondary: '#ad7101',
    secondaryBackground: '#1F2728',
    border: '#5C5F68',
    title: '#EFEFEF',
    subtitle: '#EFEFEF',
    body: '#C9C7C7',
  },
  {
    typographyTitleFontFamily: 'Helvetica Neue',
    buttonPrimaryColor: 'black',
    buttonPrimaryHoverColor: 'black',
    buttonPrimaryActiveColor: 'black',
  }
);

const themes = {
  theme1,
  theme2,
};

const Story = ({ onClick, storyFn }: any) => {
  return (
    <Container>
      <Header>
        <Button size="small" shape="circle" onClick={onClick} />
      </Header>
      <div style={{ height: '15px' }} />
      {storyFn()}
    </Container>
  );
};

export default (storyFn: any) => {
  const [themeIndex, setThemeIndex] = React.useState<'theme1' | 'theme2'>(
    'theme1'
  );

  const onClick = React.useCallback(() => {
    if (themeIndex === 'theme1') {
      setThemeIndex('theme2');
    } else {
      setThemeIndex('theme1');
    }
  }, [themeIndex]);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <Story onClick={onClick} storyFn={storyFn} />
    </ThemeProvider>
  );
};
