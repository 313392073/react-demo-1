/**
 * Created by Administrator on 2017/7/25.
 */

const defaults = {
    page1Topic: "page1Topic"
};

export const page1TopicReducer = (state = defaults.page1Topic, action) => {
    switch(action.type){
        case 'SET_TOPIC':
            return action.topic;
        default:
            return state;
    }
};
