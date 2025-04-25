// import * as react from '../../../node_modules/react';
import * as react from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
const overrideReact = { ...react, createClass, PropTypes };
export default overrideReact;

export const {
    Children,
    Component,
    Fragment,
    Profiler,
    PureComponent,
    StrictMode,
    Suspense,
    cloneElement,
    createContext,
    createElement,
    createFactory,
    createRef,
    forwardRef,
    isValidElement,
    lazy,
    memo,
    useCallback,
    useContext,
    useDebugValue,
    useDeferredValue,
    useEffect,
    useId,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    useSyncExternalStore,
    useTransition,
    version
} = react;

export {
    /**
     * Legacy API to create a class component.
     */
    createClass,

    /**
     * Legacy API to define prop types.
     */
    PropTypes
};
