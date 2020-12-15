import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import MyPage from "../myPage";
import PersonPage from "../personPage";
import ErrorPage from "../error";

import { users } from '../../mocks/users.json';

type CommonPageProps = RouteComponentProps<{ id?: string }>;

const CommonPage = (props: CommonPageProps): React.ReactElement => {
  const { match } = props;

  const userIdStr = match.params.id || '';
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  if (currentUser.id === userIdStr)
    return <MyPage {...currentUser} />;

  const user = users.find((u: { id: number }) => 'id' + u.id == userIdStr);

  if (!user) return <ErrorPage />

  return <PersonPage {...user}/>
};

export default withRouter(CommonPage);
