import React, { useEffect, useState } from 'react';
import { Tabs, TabPanels, TabPanel, Box, Flex, Button } from '@chakra-ui/react';
import Nvabar from './Nvabar';
import axios from 'axios';
import DataCard from './DataCard';

const Hero = () => {
  const [data, setData] = useState([]);

  const [page, setpage] = useState(1);

  const getData = () => {
    axios
      .get(`https://edwisely.onrender.com/learningData?_limit=1&_page=${page}`)
      .then(res => {
        setData(res.data);
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);
  // console.log(data.length)

  return (
    <>
      <Nvabar />
      <Box w="100%">
        <Tabs>
          <Flex gap="50px" padding="20px">
            <Box boxSizing="borderBox">
              <TabPanels>
                <TabPanel>
                  {data.map(item => {
                    return (
                      <Box key={item.id}>
                        <Button
                          colorScheme="teal"
                          isDisabled={page === 1}
                          onClick={() => setpage(page - 1)}
                        >
                          Previous
                        </Button>
                        <Button
                          ml="10px"
                          colorScheme="teal"
                          isDisabled={page === 5}
                          onClick={() => setpage(page + 1)}
                        >
                          Next
                        </Button>
                        <DataCard key={item.id} data={item} />
                      </Box>
                    );
                  })}
                </TabPanel>
              </TabPanels>
            </Box>
          </Flex>
        </Tabs>
      </Box>
    </>
  );
};

export default Hero;
