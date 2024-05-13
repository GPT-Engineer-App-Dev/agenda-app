import { useState } from 'react';
import { Box, Button, Container, Flex, IconButton, Input, List, ListItem, Text, useToast } from '@chakra-ui/react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex as="nav" justify="space-between" align="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
      </Flex>
      <Box as="form" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <Flex mb={4}>
          <Input
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="blue">Add Task</Button>
        </Flex>
      </Box>
      <List spacing={3}>
        {tasks.map(task => (
          <ListItem key={task.id} p={2} bg={task.isCompleted ? 'green.100' : 'gray.100'}>
            <Flex align="center" justify="space-between">
              <Text as={task.isCompleted ? 's' : 'span'}>{task.text}</Text>
              <Flex>
                <IconButton
                  icon={<FaCheck />}
                  aria-label="Complete Task"
                  onClick={() => toggleCompletion(task.id)}
                  colorScheme={task.isCompleted ? 'green' : 'gray'}
                  mr={2}
                />
                <IconButton
                  icon={<FaTrash />}
                  aria-label="Delete Task"
                  onClick={() => deleteTask(task.id)}
                  colorScheme="red"
                />
              </Flex>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;