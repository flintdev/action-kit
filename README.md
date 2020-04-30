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
  const {setState} = handler;
  const expenses = await handler.data.getObjectList('expense', 'status=complete');
  setState('SET_COMPLETE_EXPENSES', {expenses});
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

* `setState`
```typescript
type SetStateFunc = (stateUpdaterName: string, parameters: object) => void
```
* `getState`
```typescript
type GetStateFunc = () => any
```

### **2. CRUD data objects**

| Function | Library | Description |
|---|---|---|
| `getObjectList` | `handler.data` | get object list of assigned model |
| `getObject` | `handler.data` | get object spec of assigned model and object name|
| `createObject` | `handler.data` | create object of assigned model with corrected data schema|
| `deleteObject` | `handler.data` | delete object of assigned model |
| `updateObject` | `handler.data` | update partial spec of assigned object by providing patch payload |

#### Interface/Type:

* `getObjectList`
```typescript
type GetObjectListFunc = (modelName: string, selector?: string) => Promise<any[]>
```
> selector string uses the same format with k8s label-selector. 
> please refer to this [link](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors) for more details. 
* `getObject`
```typescript
type GetObjectFunc = (modelName: string, objectName: string) => Promise<any>
```
* `createObject`
```typescript
type CreateObjectFunc = (modelName: string, objectName: string, spec: any) => Promise<void>
```
* `deleteObject`
```typescript
type DeleteObjectFunc = (modelName: string, objectName: string) => Promise<void>
```
* `updateObject`
```typescript
type UpdateObjectFunc = (modelName: string, objectName: string, payload: any) => Promise<void>
```

### **3. User/Account management**

| Function | Library | Description |
|---|---|---|
| `login` | `handler.user` | login with user's credentials and return token with expiration date|
| `logout` | `handler.user` | logout current user session and remove token locally |
| `register` | `handler.user` | for new user to create account via this function |
| `isLoggedIn` | `handler.user` | check if user is logged in with valid token/session. Usually invoked when page loadded. | 

* `login`
```typescript
```
* `logout`
```typescript
```
* `register`
```typescript
```
* `isLoggedIn`
```typescript
```