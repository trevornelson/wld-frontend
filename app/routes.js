// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Authentication/reducer'),
          import('containers/Authentication/sagas'),
          import('containers/Authentication'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('authentication', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Dashboard/reducer'),
          import('containers/Authentication/reducer'),
          import('containers/Core/reducer'),
          import('containers/Dashboard/sagas'),
          import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([dashboardReducer, authReducer, coreReducer, sagas, component]) => {
          injectReducer('dashboard', dashboardReducer.default);
          injectReducer('authentication', authReducer.default);
          injectReducer('core', coreReducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/dashboard/core',
          name: 'core',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Core/reducer'),
              import('containers/Core/sagas'),
              import('containers/Core'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('core', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
        }, {
          path: '/dashboard/relationships',
          name: 'relationships',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Relationships/reducer'),
              import('containers/Relationships/sagas'),
              import('containers/Relationships'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('relationships', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
        }, {
          path: '/dashboard/long-term',
          name: 'long-term',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/LongTermGoals/reducer'),
              import('containers/LongTermGoals/sagas'),
              import('containers/LongTermGoals'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('longTermGoals', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
        }, {
          path: '/dashboard/short-term',
          name: 'short-term',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/ShortTermGoals/reducer'),
              import('containers/ShortTermGoals/sagas'),
              import('containers/ShortTermGoals'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('shortTermGoals', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
        }, {
          path: '/dashboard/priorities',
          name: 'priorities',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Priorities/reducer'),
              import('containers/Priorities/sagas'),
              import('containers/Priorities'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('priorities', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
        }, {
          path: '/dashboard/affirmations',
          name: 'affirmations',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Affirmations/reducer'),
              import('containers/Affirmations/sagas'),
              import('containers/Affirmations'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('affirmations', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          }
        },
      ]
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
