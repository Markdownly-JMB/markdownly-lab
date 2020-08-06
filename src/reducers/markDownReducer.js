export const initialState = {
  currentMarkDownTitle: 'title',
  markdown: {
    title: 'content',
    'another title': 'content'
  },
};

export default function reducer(state, action) {
  switch(action.type){
    case 'UPDATE_MARKDOWN':
      return { ...state, markdown: action.payload };
    case 'CREATE_MARKDOWN':
      return { ...state, markdown: { ...state.markdown, [action.payload]: '' } };
    case 'SET_CURRENT_MARKDOWN_TITLE': 
      return { ...state, currentMarkDownTitle: action.payload };
    default:
      return state;
  }
}
