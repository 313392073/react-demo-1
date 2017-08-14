### redux
1. redux 处理异步操作可使用redux-thunk中间件或者redux-promise。

2. mapDispatchToProps可以使函数，也可以是对象。作为函数，返回一个对象，
    定义了UI组件的参数怎样发出Action;作为对象，键值是一个函数，返回action(对象)
    返回的Action由Redux自动发出。
    
3. 向Provider传入的store,使所有组件都能拿到state.原理是使用React组件的context属性。

### react-router（2.x）
1. path属性通配符：
    - :name--匹配URL的一部分直到遇到下一个/、?、#为止，此参数可以通过this.props.params.paramName取出
    - :()--表示URL的这个部分是可选的
    - :*--匹配任意字符，直到模式里的下一个字符为止。非贪婪匹配。
    - :**--匹配任意字符，知道下一个/、?、#为止。非贪婪匹配。
2. path属性相对路径：不以/开头的的路径会相对于父组件路径进行匹配(如嵌套路由)
3. 路由从上到下进行匹配，一旦发现匹配，就不会在向后匹配。
4. this.props.location.query.bar:获取URL查询字符串
5. browserHistory.push 可以在Router组件之外导航到路由页面。
6. onlyActiveOnIndex属性可实现精确匹配。