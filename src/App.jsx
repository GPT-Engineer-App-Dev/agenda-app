import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Link, Text } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Box as="footer" p={4} bg="gray.200" mt={4} textAlign="center">
          <Text fontSize="sm">© 2023 Todo App, Inc.</Text>
          <Link href="/privacy-policy" color="teal.500" fontSize="sm">Privacy Policy</Link>
        </Box>
      </Routes>
    </Router>
  );
}

export default App;
