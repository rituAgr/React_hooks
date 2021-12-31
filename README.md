* when the current state in setState react fn depends on previous state. Use -
```setState((prev)=> prev+1)```
* Spread operator can be used for array and object data types as well.
* 
* what is side Effect?
   https://smartcar.com/blog/what-the-react-sagas/

* useEffect hooks func runs after first and all render.
  ```useEffect(()=>{document.title(`you clicked it ${parentCounterComponent} times`)})```
* conditional useEffect func
  ```useEffect(()=>{document.title(`you clicked it ${parentCounterComponent} times`)},[props name or state])```

### UseEffect Hooks
useEffect after every render of component

Hooks - 
1. useState
2. useEffect
3. useReducer
4. useContext
5. customHooks => JS function whose name starts with 'use'. Custom hooks can call other hooks. Custom hooks are 
                  used to extract common logic used in many components for reuse. Further, since there wont be any 
                   jsx returned, the file extension will be .ts 