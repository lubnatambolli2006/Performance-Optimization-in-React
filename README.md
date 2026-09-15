# Performance Optimization in React

## Introduction

This project demonstrates important techniques used to improve the performance of React applications.

The project focuses on reducing unnecessary rendering and improving the efficiency of React components.

## Technologies Used

- React JS
- JavaScript
- HTML5
- CSS3

## Optimization Techniques Demonstrated

### 1. React.memo

`React.memo` prevents a component from re-rendering when its props have not changed.

In this project, the `StudentCard` component uses `React.memo`.

### 2. useMemo

`useMemo` stores the result of an expensive calculation and recalculates it only when its dependencies change.

In this project, `useMemo` is used to calculate the average student marks.

### 3. useCallback

`useCallback` returns a memoized function.

It helps prevent unnecessary re-rendering when functions are passed as props to child components.

### 4. Component Re-rendering

The project includes a counter to demonstrate state changes and component rendering.

## Performance Profiling

React Developer Tools can be used to analyze component rendering and identify unnecessary re-renders.

The Profiler helps developers understand:

- Which components rendered
- How often components rendered
- Rendering duration
- Possible performance bottlenecks

## Code Splitting

Code splitting allows an application to load JavaScript code only when it is required.

React applications can use `React.lazy()` and `Suspense` for component-level code splitting.

Example:

```javascript
const Dashboard = React.lazy(() => import("./Dashboard"));
