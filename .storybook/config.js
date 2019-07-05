import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react/dist/client/preview';
import { theme } from '../src/theme/mainTheme';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
