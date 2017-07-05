/**
 * Created by Administrator on 2017/7/5.
 */

//import ReactDOM from 'react-dom';

//ReactDOM.render(element,container,[callback]);

//ReactDOM.unmountComponentAtNode(container);
//unmount一个组件，和对应组件的event,state等

//ReactDOM.findDOMNode(component);
//必须在mounted之后才能使用此方法，否则抛出异常
//大多数情况可以使用refs代替此方法，简单便捷

//checkbox、radio初始化mount的时候可使用defaultChecked 勾选

//指定css类使用className.
//If you use React with Web Components (which is uncommon), use the class attribute instead.

//dangerouslySetInnerHTML 用于设定DOM的innerHTML。此属性接收一个带有__html属性的对象。

//onChange触发change事件。与原生的change事件不同，不需要在input输入后需要失去焦点才触发，而是实时触发。

//style 此属性接受一个对象。对象key是camelCase形式的css名，值是字符串的css值。
//有时需要加上浏览器前缀。如：WebkitTransition，msTransition。除了ms以小写字母开头，其他的都以大写字母开头

//value,defaultValue

//事件，react封装过原生事件，使其变成跨浏览器的。如stopPropagation(),preventDefault()都是跨浏览器的。
//事件回调执行完毕后event会被清除，以保证性能，也就是说不能在异步操作中访问到event对象（此时已被清除）。
//如果想保持对event的引用，可执行event.persist()，react就不会清除此事件对象
//事件一般在冒泡阶段触发，如果想在捕获阶段触发，只需要在事件名称末尾加上Capture即可

