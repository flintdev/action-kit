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