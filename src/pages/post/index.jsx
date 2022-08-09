import React, { useEffect, useState, Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import AppBarP from "../../components/AppBarP";
import CardPost from "../../components/CardPost";
import If from "../../components/If";
import { get } from "../../service/api";
import { url } from "./constants";

const HomePage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await get(url);
      setPosts(data);
    };

    getData();
  }, []);

  return (
    <Fragment>
      <AppBarP />
      <If test={!posts}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="inherit"/>
        </Box>
      </If>
      <Container>
        <If test={posts}>
          <CardPost />
        </If>
      </Container>
    </Fragment>
  );
};
export default HomePage;
