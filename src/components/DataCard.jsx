import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Text,
  StackDivider,
  Button,
} from '@chakra-ui/react';
import Video from './Video';

const DataCard = ({ data }) => {
  return (
    <div>
      <Box>
        <Card>
          <CardHeader>
            <Heading size="md">{data.title}</Heading>
          </CardHeader>

          <Box pl="50px">
            <Video data={data.video} />
          </Box>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {data.content}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {data.topic}
                </Text>
              </Box>
              <Box>
                <Box padding="20px">
                  {data.resources.map((resource, index) => (
                    <Box key={index} padding="5px">
                      <Button colorScheme="green">
                        <a href={resource.url}>{resource.type}</a>
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box></Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
};

export default DataCard;
