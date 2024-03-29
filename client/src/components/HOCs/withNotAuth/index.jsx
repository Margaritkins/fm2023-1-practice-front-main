import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/slices/userSlice';
import Spinner from '../../Spinner/Spinner';

const withNotAuth = (Component) => {
  const HocForLoginSignUp = (props) => {
    const { history } = props;

    const { isFetching, data } = useSelector((state) => state.userStore);

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getUser(history.replace)); // eslint-disable-next-line
    }, []);

    if (isFetching) {
      return <Spinner mtop />;
    }
    if (!data) {
      return <Component history={history} />;
    }
    return null;
  };

  return HocForLoginSignUp;
};

// const withNotAuth = Component => {
//   class HocForLoginSignUp extends React.Component {
//     componentDidMount () {
//       this.props.checkAuth(this.props.history.replace);
//     }

//     render () {
//       if (this.props.isFetching) {
//         return <Spinner mtop />;
//       }
//       if (!this.props.data) {
//         return <Component history={this.props.history} />;
//       }
//       return null;
//     }
//   }

//   const mapStateToProps = state => state.userStore;

//   const mapDispatchToProps = dispatch => ({
//     checkAuth: replace => dispatch(getUser(replace)),
//   });

//   return connect(mapStateToProps, mapDispatchToProps)(HocForLoginSignUp);
// };

export default withNotAuth;
