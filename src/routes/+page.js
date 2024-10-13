export const load = async ({ fetch }) => {
    const tasksRes = await fetch("./api/tasks")
    const tasks = await tasksRes.json();
    return {tasks};
}