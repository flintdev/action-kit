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

### **1. State management**

| Function | Library | Description |
|---|---|---|
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

### **2. CRUD data objects**

| Function | Library | Description |
|---|---|---|
| `getObjectList` | `handler.data` | get object list of assigned model |
| `getObject` | `handler.data` | get object spec of assigned model and object name|
| `createObject` | `handler.data` | create object of assigned model with corrected data schema|
| `deleteObject` | `handler.data` | delete object of assigned model |
| `updateObject` | `handler.data` | update partial spec of assigned object by providing patch payload |

### **3. User/Account management**

| Function | Library | Description |
|---|---|---|
| `login` | `handler.user` | login with user's credentials and return token with expiration date|
| `logout` | `handler.user` | logout current user session and remove token locally |
| `register` | `handler.user` | for new user to create account via this function |
| `isLoggedIn` | `handler.user` | check if user is logged in with valid token/session. Usually invoked when page loadded. | 

