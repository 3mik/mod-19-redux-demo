import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});

//const CommentsListContainer = connect(mapStateToProps)(CommentsList);

//export default CommentsListContainer;

export default connect(mapStateToProps)(CommentsList); 