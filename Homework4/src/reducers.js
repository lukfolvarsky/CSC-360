function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
          return action.username
      case "REGISTER":
          return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
}

function postReducer(state, action) {
    switch(action.type) {
        case 'CREATE_POST':
        const newPost = {
            title: action.title,
            content: action.content,
            author: action.author,
            dateCreated: action.dateCreated, 
            dateCompleted: action.dateCompleted, 
            complete: action.complete,
            id: action.id
        };
        return [newPost, ...state];
        case 'UPDATE_POST':
            return action.updatedPosts
    
        case 'DELETE_POST':
         return action.updatedPosts

         case 'SHOW_POST':
            return action.updatedPosts

         case 'CLEAR_CASE':
          return[]

        default:
        return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postReducer(state.posts, action)
    }
}
