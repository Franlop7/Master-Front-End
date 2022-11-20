import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';
import { CharacterCollectionProvider } from '../character-collection/character-collection.context';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <CharacterCollectionProvider>
          <Route
            exact={true}
            path={[switchRoutes.root, switchRoutes.characterCollection]}
            component={CharacterCollectionScene}
          />
        </CharacterCollectionProvider>
        <Route
          exact={true}
          path={switchRoutes.createCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
