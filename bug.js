This error occurs when you are trying to use a component inside a functional component, but you haven't imported it correctly. This can be a simple typo in the import statement or forgetting to import the component entirely. 

```javascript
//Incorrect import
import {View, Text} from 'react-native';

//Correct import
import MyComponent from './MyComponent';

const App = () => {
  return (
    <View>
      <MyComponent/>
    </View>
  );
};
```