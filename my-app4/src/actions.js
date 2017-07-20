/**
 * Created by Administrator on 2017/7/20.
 */

export const setTopic = topic => ({
	type: "SET_TOPIC",
	topic
});

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const fetchCurrentTopic = (dispatch, state) => {
	//dispatch(fetchStart());

	fetch( URL + state.topic )
		.then( res => res.json() )
		.then( json => {
			if( json.error ){
				console.log(json);
				//dispatch(fetchFailed(json.error));
			}else{
				console.log(json);
				//dispatch(fetchComplete(json));
			}
		} )
		.catch(json => {
			console.log(json);
			//dispatch(fetchFailed(json.error));
		});
};

export const fetchBooks = () => ({
	//type: 'BEGIN_FETCH',//自定义的中间件里边直接判断fn 的类型，这个type貌似可以不要
	fn: fetchCurrentTopic

});