//render:
//组件中直接跟浏览器交互是，应该将代码放在componentDidMount等生命周期方法里边。
//如果shouldComponentUpdate返回false,render()函数不会被调用

//constructor:
//constructor在mount动作调用前被调用。如果不定义state并且不用bind函数，则无需实现constructor

//componentWillMount:
//这个函数会在mount动作发生前执行。在render()调用前调用，所以在此方法中修改state不会触发rerender.
//通常用constructor替代

//componentDidMount
// 这个函数在组件mount后被调用。这是发起异步请求触发re-render的的好地方

//componentWillReceiveProps
//这个函数在接收到新的props之前被调用
//这个方法可能在props没有改变的时候被调用。使用时有必要比较新值和旧值是否一致

//shouldComponentUpdate
//这个函数在rendering前在接收到新的state或props后被调用。初始渲染和调用forceUpdate时不会调用此方法
//返回false不会阻止子组件更新

//componentWillUpdate
//这个函数在rendering前在接收到props或state后被调用。
//此方法中不可更新state。如需更新使用componentWillReceiveProps替代

//componentDidUpdate

//componentWillUnmount
//this method is invoked immediately before a component is unmounted and destroyed

//setState
//更新state并告诉react组件及子组件需要更新。
//react不保证状态立刻更新。（可能会等待多个状态同时更新
//使用此函数的可选参数----回调函数保证state是最新状态。官方建议使用componentDidUpdate替代此逻辑

//forceUpdate
//强制re-rendering
//此方法调用会调起当前组件中的render函数，但是shouldComponentUpdate不会被调起。子组件则按正常情况调用lifecycle hocks

//Class Properties
//defaultProps
//使用类名点defaultProps定义属性，如果props传递的值是undefined，则defaultProps中的属性值将作为默认值。（传递值为null时，会被保留，不会替换）
//displayName

