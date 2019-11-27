import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/main-layout';
import UsersList from '../components/users';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Blog Layout">
      <h1>Simple Prisma 2 Blog Example</h1>
      <h3>Users List</h3>
      <UsersList />
    </Layout>
  );
};

export default IndexPage;
