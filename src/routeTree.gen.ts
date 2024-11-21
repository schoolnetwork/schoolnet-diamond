/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PlayImport } from './routes/play'
import { Route as GamesImport } from './routes/games'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const ChatLazyImport = createFileRoute('/chat')()

// Create/Update Routes

const ChatLazyRoute = ChatLazyImport.update({
  id: '/chat',
  path: '/chat',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/chat.lazy').then((d) => d.Route))

const PlayRoute = PlayImport.update({
  id: '/play',
  path: '/play',
  getParentRoute: () => rootRoute,
} as any)

const GamesRoute = GamesImport.update({
  id: '/games',
  path: '/games',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/games': {
      id: '/games'
      path: '/games'
      fullPath: '/games'
      preLoaderRoute: typeof GamesImport
      parentRoute: typeof rootRoute
    }
    '/play': {
      id: '/play'
      path: '/play'
      fullPath: '/play'
      preLoaderRoute: typeof PlayImport
      parentRoute: typeof rootRoute
    }
    '/chat': {
      id: '/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/games': typeof GamesRoute
  '/play': typeof PlayRoute
  '/chat': typeof ChatLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/games': typeof GamesRoute
  '/play': typeof PlayRoute
  '/chat': typeof ChatLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/games': typeof GamesRoute
  '/play': typeof PlayRoute
  '/chat': typeof ChatLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/games' | '/play' | '/chat'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/games' | '/play' | '/chat'
  id: '__root__' | '/' | '/games' | '/play' | '/chat'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  GamesRoute: typeof GamesRoute
  PlayRoute: typeof PlayRoute
  ChatLazyRoute: typeof ChatLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  GamesRoute: GamesRoute,
  PlayRoute: PlayRoute,
  ChatLazyRoute: ChatLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/games",
        "/play",
        "/chat"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/games": {
      "filePath": "games.tsx"
    },
    "/play": {
      "filePath": "play.tsx"
    },
    "/chat": {
      "filePath": "chat.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */