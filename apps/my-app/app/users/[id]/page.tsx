import React from 'react';

interface UserIdPage {
  params: {
    id: string;
  };
}
export default function UserIdPage(props: UserIdPage) {
  return <div>UserIdPage {props.params.id}</div>;
}
