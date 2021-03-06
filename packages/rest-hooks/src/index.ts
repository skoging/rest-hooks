import { Resource, SimpleResource, SuperagentResource } from './resource';
import NetworkManager from './state/NetworkManager';
import RIC from './state/RIC';
import PollingSubscription from './state/PollingSubscription';
import SubscriptionManager from './state/SubscriptionManager';
import reducer, { initialState } from './state/reducer';
import { useDenormalized } from './state/selectors';
import {
  useCache,
  useFetcher,
  useRetrieve,
  useResource,
  useSubscription,
  useMeta,
  useError,
  CacheProvider,
  useInvalidator,
  useResetter,
  ExternalCacheProvider,
  NetworkErrorBoundary,
  NetworkError as OGNetworkError,
} from './react-integration';
import useSelectionUnstable from './react-integration/hooks/useSelection';
import hasUsableData from './react-integration/hooks/hasUsableData';
import { Request as RequestType } from 'superagent';
import { StateContext, DispatchContext } from './react-integration/context';

const __INTERNAL__ = {
  initialState,
  StateContext,
  DispatchContext,
  RIC,
  hasUsableData,
};

export type NetworkError = OGNetworkError;
export type Request = RequestType;

export * from './types';
export * from './resource/shapes';
export * from './resource/normal';
export {
  Resource,
  SimpleResource,
  SuperagentResource,
  CacheProvider,
  ExternalCacheProvider,
  useCache,
  useFetcher,
  useRetrieve,
  useInvalidator,
  useResetter,
  useResource,
  useSubscription,
  useMeta,
  useError,
  useSelectionUnstable,
  useDenormalized,
  NetworkManager,
  SubscriptionManager,
  PollingSubscription,
  reducer,
  NetworkErrorBoundary,
  __INTERNAL__,
};
