const baseUrl = 'http://localhost:5000/tasks';

const fetchTasks = () => {
    return axios
      .get(baseUrl)
      .then(response => {
        const data = response.data;
        return { data };
      })
      .catch(error => {
        console.error(error);
        return { error };
      });
  }
  
  const fetchData = async () => {
    const { data, error } = await fetchTasks();
    if (error) {
      console.error(error);
    }
    return data;
  }
  
  export const Tasks = await fetchData();
  
  export const addTask = (task) => {
    axios
      .post(baseUrl, task)
      .catch(error => console.error(error))
  };

  
  export const deleteTasks = (id) => {
    console.log(id);
    axios
      .delete('http://localhost:5000/tasks/del', { data: id }) 
      .then(response => {
        console.log(`DELETE: tasks are removed`, response.data); 
      })
      .catch(error => console.error(error));
  }
