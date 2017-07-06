/**
 * Created by Administrator on 2017/7/6.
 */


//<Redirect></Redirect>  重定向到某个路径。

//<Switch></Switch>  此标签包含的多个路由路径，在匹配到一个后不再向后匹配，也就是说，Switch中最多有一个路由被匹配。
	//子标签可以使Route和Redirect
	//Route 使用path属性匹配；Redirect使用from属性匹配。如果二者没有对应属性将被匹配

//<BrowserRouter> A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
	//basename : the base URL for all location
	//getUserConfirmation : A function to use to confirm navigation.
	//forceRefresh
	//keyLength ： location.key的长度

// <HashRouter>  A <Router> that uses the hash portion of the URL
	//更推荐使用BrowserRouter.因为HashRouter不支持location.key和location.state

//<MemoryRouter> A <Router> that keeps the history of your “URL” in memory

//<Link> 提供声明式的导航
	//to:string 导航到的路径名
	//to:object
	{/*<Link to={{
		pathname: '/courses',
		search: '?sort=name',
		hash: '#the-hash',
		state: { fromDashboard: true }
	}}/>*/}
	//replace : 添加此属性后，当前历史记录会被覆盖而不是新增一个

//<NavLink> 一个可以控制样式的Link

//<Router> 最重要的职责是根据匹配渲染UI
//component 当路由匹配时要渲染的组件
//render 接受一个函数动态创建一个组件（不可与component同时使用）
//path : a path to match
//exact :When true, will only match if the path matches the location.pathname exactly.
//strict : 如果为true ,匹配时会严格匹配尾部的“/”



