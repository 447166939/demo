
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../store'
import Layout from '../components/Layout';
import actions from '../store/modules/common/action'
const {tempGetInfo}=actions

const  Index=()=> {
  const dispatch = useDispatch()

  useEffect(() => {
  }, [dispatch])
  return (
      <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
        </Box>
      </Container>
      </Layout>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    if (!store.getState().placeholderData) {
        console.log('ttt===',tempGetInfo())
         store.dispatch(tempGetInfo())
    }
    return {

    }
})

export default Index
