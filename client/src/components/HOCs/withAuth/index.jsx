import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../../store/slices/userSlice';
import Spinner from '../../Spinner/Spinner';

const withAuth = (Component) => {
  const Hoc = (props) => {
    const { error, history, match } = props;

    const { isFetching, data } = useSelector((state) => state.userStore);

    const dispatch = useDispatch();

    useEffect(() => {
      if (!data) {
        dispatch(getUser());
      } // eslint-disable-next-line
    }, []);

    if (error) return <Redirect to="/" />;

    return (
      <>
        {isFetching ? (
          <Spinner mtop />
        ) : (
          <Component history={history} match={match} {...props} />
        )}
      </>
    );
  };

  return Hoc;
};

export default withAuth;
