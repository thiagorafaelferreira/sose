import React from 'react'
import { StatusBar } from 'react-native';
import Routes from './index.js';

const Root = ({ store }) => (
    <StoreProvider store={store}>
        <PaperProvider>
            <Routes />
        </PaperProvider>
  </StoreProvider>
)

export default Root