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