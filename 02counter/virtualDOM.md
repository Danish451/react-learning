React Fiber is an ongoing reimplementation of React's core algorithm.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.

Reconciliation:- The algorithm React uses to diff one tree with another to determine which parts need to be changed.

update:- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM" 


Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

# Reconciliation versus rendering
The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

# Scheduling
scheduling:- the process of determining when work should be performed.
work:- any computations that must be performed. Work is usually the result of an update (e.g. setState).


We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to:-
1) pause work and come back to it later.
2) assign priority to different types of work.
3) reuse previously completed work.
4) abort work if it's no longer needed.

# Interview perspective
In fiber algorithm, to improve the performance of list then in each iteration keys should be used