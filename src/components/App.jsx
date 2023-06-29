import { Layout } from "components/layout/Layout";
import { AppBar } from "components/appBar/AppBar";
import { TaskForm } from "components/taskForm/TaskForm";
import { TaskList } from "components/taskList/TaskList";

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default App;