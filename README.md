# action-kit
Set of action &amp; state related functions used by flint apps

## Installation

```npm
npm install @flintdev/action-kit --save
```

## Usage

### Action Function

```javascript
export async function action(eventArgs, state, handler) {
  const {setState, getDataObjects} = handler;
  const expenses = await getDataObjects({
    model: 'expense',
    filter: 'status=complete' 
  });
  setState('SET_COMPLETE_EXPENSES', {expenses});
}
```

### Handler interface

```typescript
interface Handler {
    setState: (stateUpdaterName: string, object) => void
}
```

### Use in source code

```javascript
// import action kit
import {actionAdapter} from '@flintdev/action-kit';
// import action function
import {action as getCompleteExpense} from './getCompleteExpenses';

export const asyncAction = actionAdapter(getCompleteExpense);
```

## Functions

### **State management**

| Function | Library | Description |
|---|---|---|---|
| `setState` | `handler` | set global state in action function|
| `getState` | `handler` | get state object dynamically in real-time |

#### Interface/Type:

* setState
```typescript
type SetState = (stateUpdaterName: string, parameters: object) => void
```
* getState
```typescript
type GetState = () => any
```

### **CRUD data objects**

| Function | Library | Description |
|---|---|---|---|
| `getObjectList` | `handler.data` | |
| `getObject` | `handler.data` | 
| `createObject` | `handler.data` | |
| `deleteObject` | `handler.data` | |
| `updateObject` | `handler.data` | |